const express = require('express');
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validation/registerValidation");
const validateUserInput = require("../validation/updateUserValidation");
const validateNewUserInput = require("../validation/newUsersValidation");
const jwt = require('jsonwebtoken');
const requiresAuth = require('../middleware/permissions');

// @route      GET /api/auth/test
// @desc       Test the auth route
// @access     Public
router.get("/test", (req, res) => {
    res.send("Auth route working");
})

// @route      POST /api/auth/register
// @desc       Create a new user
// @access     Public
router.post("/register", async (req, res) => {
    try {
        const {errors, isValid} = validateRegisterInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        // check for existing user
        const existingEmail = await User.findOne({ 
            email: new RegExp("^" + req.body.email + "$", "i")
        });

        if(existingEmail) {
            return res
            .status(400)
            .json({ error: "There is already a user with this email" });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const defaultRole = 'Updater'

        // create a new user
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: defaultRole
        });

        // save the user to the database
        const savedUser = await newUser.save();

        const payload = { userId: savedUser._id };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "7d"
            });

            res.cookie("access-token", token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === "production"
            });

        const userToReturn = { ...savedUser._doc };
        delete userToReturn.password;

        // return the new user
        return res.json(userToReturn);
    } catch (err) {
        // error here
        console.log(err);

        res.status(500).send(err.message);
    }
})

// @route      POST /api/auth/newuser
// @desc       Create a new user within the app
// @access     Private
router.post("/newuser", requiresAuth, async (req, res) => {
    try {
        const {errors, isValid} = validateNewUserInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        // check for existing user
        const existingEmail = await User.findOne({ 
            email: new RegExp("^" + req.body.email + "$", "i")
        });

        if(existingEmail) {
            return res
            .status(400)
            .json({ error: "There is already a user with this email" });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        // create a new user
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role,
        });

        // save the user to the database
        await newUser.save();

        // const payload = { userId: savedUser._id };

            // const token = jwt.sign(payload, process.env.JWT_SECRET, {
            //     expiresIn: "7d"
            // });

            // res.cookie("access-token", token, {
            //     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            //     httpOnly: true,
            //     secure: process.env.NODE_ENV === "production"
            // });

        // const userToReturn = { ...savedUser._doc };
        // delete userToReturn.password;

        // return the new user
        return res.json(newUser);
    } catch (err) {
         // error here
        console.log(err);

        return res.status(500).send(err.message);
    }
})

// @route      POST /api/auth/login
// @desc       Login user and return a access token
// @access     Public
router.post("/login", async (req, res) => {
    try {
        // check for the user
        const user = await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i")
        })

        if(!user) {
            return res
            .status(400)
            .json({ error: 'There was a problem with your login credentials'});
        }

        const passwordMatch = await bcrypt.compare(
            req.body.password, 
            user.password
            );

            if(!passwordMatch) {
            return res
            .status(400)
            .json({ error: 'There was a problem with your login credentials' });
            }

            const payload = { userId: user._id };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "7d"
            });

            res.cookie("access-token", token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === "production"
            });

            const userToReturn = { ...user._doc };
            delete userToReturn.password;

            return res.json({
                token: token,
                user: userToReturn,
            })

    } catch (err) {
        console.log(err);

        return res.status(500).send(err.message);
    }
})

// @route      GET /api/auth/current
// @desc       Return the currently authed user
// @access     Private
router.get("/current", requiresAuth, (req, res) => {
    if(!req.user) {
        return res.status(401).send("Unauthorized");
    }

    return res.json(req.user);
})

// @route      GET /api/auth/users
// @desc       Return all users
// @access     Private
router.get("/users", requiresAuth, async (req, res) => {
    try {
    const users = await User.find({});
        if (!users) {
            return res
            .status(400)
            .json({ error: 'There was a problem with your login credentials'});
        }
        return res.json({users: users});

    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
}
)


// @route      PUT /api/auth/logout
// @desc       Logout user and clear the cookie
// @access     Private
router.put("/logout", requiresAuth, async(req, res) => {
    try {
        res.clearCookie("access-token");

        return res.json({ success: true });
    } catch(err) {
        console.log(err);
        return status(500).send(err.message);
    }
})

// @route      PUT /api/auth/:userId
// @desc       Update a user's information
// @access     Private
router.put("/:userId", requiresAuth, async (req, res) => {
    try {
        const user = await User.findOne({
            // user: req.user._id,
            // email: new RegExp("^" + req.body.email + "$", "i")
            _id: req.params.userId,
        });

        if(!user) {
            return res.status(404).json({error: 'Could not find user'});
        }

        const { isValid, errors } = validateUserInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const updatedUser = await User.findOneAndUpdate(
            {
                // email: new RegExp("^" + req.body.email + "$", "i")
                _id: req.params.userId,
            },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                // password: req.body.email
            },
            {
                new: true
            }
        );

        return res.json(updatedUser);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      DELETE /api/auth/:userId
// @desc       Delete user
// @access     Private
router.delete("/:userId", requiresAuth, async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.userId,
        });

        if(!user) {
            return res.status(404).json({error: "Could not find user"});
        }

        await User.findOneAndRemove({
            _id: req.params.userId,
        })

        return res.json({ success: true })
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

// @route      PUT /api/auth/current/:userId
// @desc       Update a user's role
// @access     Private
router.put("/current/:userId", requiresAuth, async (req, res) => {
    try {
        const user = await User.findOne({
            // user: req.user._id,
            // email: new RegExp("^" + req.body.email + "$", "i")
            _id: req.params.userId,
        });

        if(!user) {
            return res.status(404).json({error: 'Could not find user'});
        }

        // const { isValid, errors } = validateUserInput(req.body);

        // if(!isValid) {
        //     return res.status(400).json(errors);
        // }

        const updatedUser = await User.findOneAndUpdate(
            {
                // email: new RegExp("^" + req.body.email + "$", "i")
                _id: req.params.userId,
            },
            {
                role: req.body.role
            },
            {
                new: true
            }
        );

        return res.json(updatedUser);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});

module.exports = router;