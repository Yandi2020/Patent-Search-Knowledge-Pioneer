import db from '../../db.json'

const initState = {
    database: [],
    error: null
}

const reducer = (state = initState, action) => {
    if(action.type === 'patent title' || action.type === 'chemical type 1'){
        let newDb = db.filter(item => {
            return item[action.type] === action.content;
        })
        console.log(newDb)
        if(newDb.length === 0){
            return {
                database: [],
                error: 'Sorry, we have not found matched results...'
            }
        }else{
            return {
                ...state,
                database: newDb,
                error: null
            }
        }
    }

    return state; 
}

export default reducer;
