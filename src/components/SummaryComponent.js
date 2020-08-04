import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState';


export const Summary = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
        const sign = (transaction.amount > 0);
        if (sign) { income += transaction.amount } else { expense += transaction.amount };
    });


    return (
        <div className="row">
            <div className="col-5 col-md-2 offset-1 offset-md-4 text-center border-bottom border-success border-width-medium mr-1">
                <h6>INCOME</h6>
                <p className="text-success pb-2">${Math.abs(income)}</p>
            </div>
            <div className="col-5 col-md-2 text-center border-bottom border-danger">
                <h6>EXPENSES</h6>
                <p className="text-danger pb-2">${Math.abs(expense)}</p>
            </div>
        </div>

    );
}