import { INPUT_DATE, SAVE_FETCH_DATES } from 'src/actions/diary';
import { SUBMIT_SUCCESS } from '../actions/diary';


const initialState = {
    date: new Date(),
    showDate: false,
    begining: '',
    end: '',
    validate: false,
    loading: true,
    allDates: []
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
        case SAVE_FETCH_DATES:
          console.log(action);
            return {
            ...state,
            allDates: [action.dates.data],
            loading: false,
          }
          
        default:
            return state
    }
};

export default reducer;
