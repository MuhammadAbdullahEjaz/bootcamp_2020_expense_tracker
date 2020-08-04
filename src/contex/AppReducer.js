export default (state, action)=>{
    switch(action.type){
        case 'delete':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'add':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}