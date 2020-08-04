import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
        const sign = (transaction.amount > 0);
        if (sign) { income += transaction.amount } else { expense += transaction.amount };
    });

    return (
        <div className="row">
            <div className='col-12 col-md-4 offset-md-4 text-center mt-2 mb-4' >
                <div className=' border-top border-bottom border-primary'>
                    <h5 className="font-weight-light">CURRENT BALANCE</h5>
                    <h4 className="card-text pb-2">{((income+expense < 0)?"-":"")}${Math.abs(income + expense)}</h4>
                </div>
            </div>
        </div >
    );
}