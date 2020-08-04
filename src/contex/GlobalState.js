import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

function GlobalProvider({ childern }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransection(id){
        dispatch({
            type: 'delete',
            payload: id
        });
    }
    function addTransaction(transaction){

        dispatch({
            type: 'add',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction:deleteTransection, addTransaction:addTransaction }}>
            {childern}
        </GlobalContext.Provider>
    );
};


export { GlobalProvider };