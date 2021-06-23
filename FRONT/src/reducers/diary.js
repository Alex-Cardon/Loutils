import { INPUT_DATE } from 'src/actions/diary';


const initialState = {
    date: new Date(),
    showDate: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        
        case INPUT_DATE:
            
        return {
            ...state,
            date: action.date,
        };

        default:
            return state
    }
};

export default reducer;
