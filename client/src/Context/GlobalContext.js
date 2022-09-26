import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// initial state
const initialState = {
    user: null,
    fetchingUser: true,
    fetchingUsers: true,
    users: [],
    completeTickets: [],
    incompleteTickets: [],
    allTickets: [],
}

// reducer

const globalReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                fetchingUser: false,
            };
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                fetchingUsers: false,
            };
        case "SET_COMPLETE_TICKETS":
            return {
                ...state,
                completeTickets: action.payload
            };
        case "SET_INCOMPLETE_TICKETS":
            return {
                ...state,
                incompleteTickets: action.payload
            };
        case "SET_ALL_TICKETS":
            return {
                ...state,
                allTickets: action.payload
            }
        case "RESET_USER":
            return {
                ...state,
                user: null,
                completeTickets: [],
                incompleteTickets: [],
                allTickets: [],
                users: [],
                fetchingUser: false,
                fetchingUsers: false,
            };
        default:
            return state;
    }
};

// create the context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
        getCurrentUser();
        getUsers();
        getTickets();
    }, []);

    // action: get current user
    const getCurrentUser = async () => {
        try {
            const res = await axios.get("/api/auth/current");

            if (res.data) {
                const ticketsRes = await axios.get("/api/tickets/current");

                if (ticketsRes.data) {
                    dispatch({ type: "SET_USER", payload: res.data });
                    dispatch({ type: "SET_COMPLETE_TICKETS", payload: ticketsRes.data.complete });
                    dispatch({ type: "SET_INCOMPLETE_TICKETS", payload: ticketsRes.data.incomplete });
                }
            } else {
                dispatch({ type: "RESET_USER" });
            }
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" })
        }
    };

    // get all users
    const getUsers = async () => {
        try {
            const res = await axios.get("/api/auth/users");

            if (res.data) {
                    dispatch({ type: "SET_USERS", payload: res.data });
            } 
            else {
                dispatch({ type: "RESET_USER" });
            }
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" })
        }
    };

    // get all tickets
    const getTickets = async () => {
        try {
            const res = await axios.get("/api/tickets/alltickets");

            if (res.data) {
                    dispatch({ type: "SET_ALL_TICKETS", payload: res.data });
            } 
            else {
                dispatch({ type: "RESET_USER" });
            }
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" })
        }
    };

    // update user information
    const updateUser = (user) => {
        const newUsers = state.user.map(
            (userUpdate) => userUpdate._id !== user._id ? 
            userUpdate : user
        );

        dispatch({
            type: "SET_USER_UPDATE",
            payload: newUsers,
        });  
    }

    // update ticket information
    const updateTicket = (ticket) => {
        if(ticket.complete) {
            const newCompleteTickets = state.completeTickets.map(
                (completeTicket) => completeTicket._id !== ticket._id ? 
                completeTicket : ticket
            );

            dispatch({
                type: "SET_COMPLETE_TICKETS",
                payload: newCompleteTickets,
            });
        } else {
            const newIncompleteTickets = state.incompleteTickets.map(
                (incompleteTicket) => incompleteTicket._id !== ticket._id ? 
                incompleteTicket : ticket
            );

            dispatch({
                type: "SET_INCOMPLETE_TICKETS",
                payload: newIncompleteTickets,
            });
        }
    }



    // logout
    const logout = async () => {
        try {
            await axios.put("/api/auth/logout");

            dispatch({ type: "RESET_USER" });
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" });
        }
    }

    // add ticket
    const addTicket = (ticket) => {
        dispatch({
            type: 'SET_INCOMPLETE_TICKETS',
            payload: [ticket, ...state.incompleteTickets]
        });
    }

    // mark ticket as complete
    const ticketComplete = ticket => {
        dispatch({
            type: "SET_INCOMPLETE_TICKETS",
            payload: state.incompleteTickets.filter(
                (incompleteTicket) => incompleteTicket._id !== ticket._id
                )
        })

        dispatch({
            type: "SET_COMPLETE_TICKETS",
            payload: [ticket, ...state.completeTickets]

        })
    }

    // mark ticket as incomplete
    const ticketIncomplete = ticket => {
        dispatch({
            type: "SET_COMPLETE_TICKETS",
            payload: state.completeTickets.filter(
                (completeTicket) => completeTicket._id !== ticket._id
            ),
        });

        const newIncompleteTickets = [ticket, ...state.incompleteTickets];

        dispatch({
            type: "SET_INCOMPLETE_TICKETS",
            payload: newIncompleteTickets.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        })
    }

    // remove ticket
    const removeTicket = (ticket) => {
        if(ticket.complete) {
            dispatch({
                type: "SET_COMPLETE_TICKETS",
                payload: state.completeTickets.filter(
                    (completeTicket) => completeTicket._id !== ticket._id
                )
            })
        } else {
            dispatch({
                type: "SET_INCOMPLETE_TICKETS",
                payload: state.incompleteTickets.filter(
                    (incompleteTicket) => incompleteTicket._id !== ticket._id
                )
            })
        }
    }

    // remove user
    const removeUser = (person) => {
            dispatch({
                type: "SET_USERS",
                payload: state.users.filter(
                    (user) => user._id !== person._id
                )
            })
    }

    const value = {
        ...state,
        getCurrentUser,
        getUsers,
        logout, 
        addTicket,
        ticketComplete,
        ticketIncomplete,
        removeTicket,
        removeUser,
        getTickets,
        updateTicket,
        updateUser,
    }

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export function useGlobalContext() {
    return useContext(GlobalContext);
}

