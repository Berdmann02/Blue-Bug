import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// initial state
const initialState = {
    user: null,
    fetchingUser: true,
    users: [],
    completeTickets: [],
    incompleteTickets: [],
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
        case "RESET_USER":
            return {
                ...state,
                user: null,
                completeTickets: [],
                incompleteTickets: [],
                users: [],
                fetchingUser: false,
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




    // const getUsers = async () => {
    //     try {
    //         const grab = await axios.get("/api/auth/users");

    //         if (grab.data) {
    //     dispatch({ type: "SET_USERS", payload: grab.data });
    //         } else {
    //             dispatch({ type: "RESET_USER" });
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         console.log('grab failed');
    //     }
    //     }



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

    const value = {
        ...state,
        getCurrentUser,
        // getUsers,
        logout, 
        addTicket,
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

