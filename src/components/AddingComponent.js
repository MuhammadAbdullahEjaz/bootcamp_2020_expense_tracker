import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'


export const AddTrail = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState(5);

    const { addTransaction } = useContext(GlobalContext);

    const SubmitTransaction = (e) => {
        e.preventDefault();
        if (+amount !== 0 && text !== '') {
            addTransaction({ id: id, text: text, amount: +amount });
            setId(id + 1);
        }
    }

    return (
        <React.Fragment>
            <div className="row mt-2">
                <div className="col-12 col-md-4 offset-md-4 text-center border-bottom">
                    <h5 className="font-weight-bold">Adding Transaction</h5>
                </div>
            </div>

            <form onSubmit={SubmitTransaction}>
                <div className="row"><p className="col-12 col-md-4 offset-md-4 pb-1 pt-1 mb-0 font-weight-bold">Text</p></div>
                <div className="form-group row mb-0">
                    <input type="text" className="form-control col-12 col-md-4 offset-md-4" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="row"><p className="col-12 col-md-4 offset-md-4 pt-0 mt-0 mb-0 font-weight-bold">Amount</p></div>
                <div className="row"><p className="col-12 col-md-4 offset-md-4 pt-0 mt-0">(negative-expenses, positive-income)</p></div>
                <div className="form-group row mb-0">
                    <input type="phone" className="form-control col-12 col-md-4 offset-md-4" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
                </div>
                <div className="form-group row mb-0">
                    <input type="submit" className="form-control col-12 col-md-4 offset-md-4 mt-2 bg-primary text-white" />
                </div>
            </form>
        </React.Fragment>
    );

};