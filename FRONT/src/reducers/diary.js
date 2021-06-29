import { INPUT_DATE } from 'src/actions/diary';
import { SUBMIT_SUCCESS } from '../actions/diary';


const initialState = {
    date: new Date(),
    showDate: false,
    begining: '',
    end: '',
    validate: false,
    loading: true,
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        
        case INPUT_DATE:
            
        return {
            ...state,
            date: action.date,
        };
        case SUBMIT_SUCCESS:
          console.log(action);
          return {
            ...state,
            begining: action.booking.data[0].begining,
            end: action.booking.data[0].end,
            validate: true
          }
        default:
            return state
    }
};

export default reducer;
