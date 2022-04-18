import axios from 'axios';
import { 
  SUBMIT_DATE_VALUE,
  FETCH_DATES,
  submitSuccess,
  saveFetchDates,

  } from 'src/actions/diary';
const diaryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_DATE_VALUE: {
      const state = store.getState();
      // avec getstate on apporte le state dans le MW
      axios.post(`http://localhost:3000/booking/${action.id}`, 
      {
         begining: state.diary.date[0],
         end: state.diary.date[1],},
        {headers:{
          "Content-Type": "application/json",
          'token': state.user.token
        },
        })
        .then((response)=>{
          console.log(response.data);
            store.dispatch(submitSuccess(response.data));
        })
        .catch((error)=>console.log(error))
        break;
      }
    case FETCH_DATES: {
      const state = store.getState();
      axios.get(`http://localhost:3000/booking/${action.id}`,
        {headers:{
          "Content-Type": "application/json",
          'token': state.user.token
        },
      })
        .then((response)=>{
            store.dispatch(saveFetchDates(response.data));
        })
        .catch((error)=>console.log(error))
        break;
    }
    default:
      next(action);
  }
}
export default diaryMiddleware;

