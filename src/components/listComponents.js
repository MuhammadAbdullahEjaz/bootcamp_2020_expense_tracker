import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'


export function List(props) {

    const { transactions, deleteTransaction } = useContext(GlobalContext);

    const positive_card = (transaction) => {

        return (
            <div key={transaction.id} className='card border-right border-success mb-1' onClick={() => deleteTransaction(transaction.id)}>
                <div className="card-body pt-0 pb-0">
                    <div className="float-left">
                        {transaction.text}
                    </div>
                    <div className="float-right">
                        {"+$"}{Math.abs(transaction.amount)}
                    </div>
                </div>
            </div>
        );
    };
    const negative_card = (transaction) => {
        return (
            <div key={transaction.id} className='card border-right border-danger mb-1'  onClick={() => deleteTransaction(transaction.id)}>
                <div className="card-body pt-0 pb-0">
                    <div className="float-left">
                        {transaction.text}
                    </div>
                    <div className="float-right">
                        {"-$"}{Math.abs(transaction.amount)}
                    </div>
                </div>
            </div>
        );
    };



    const TransactionList = transactions.map(transaction => {
        const check_value = (transaction.amount > 0);
        if (check_value) {
            return (
                positive_card(transaction)
            )
        }
        else {
            return (
                negative_card(transaction)
            )
        }
    })


    return (
        <div className="row">
            <div className="col-12 col-md-4 offset-md-4">
                <h5 className="border-bottom  p-2 text-center font-weight-bold">Transaction History</h5>
            </div>
            <div className="col-12 col-md-4 offset-md-4">
                {TransactionList}
            </div>
        </div>
    );
}