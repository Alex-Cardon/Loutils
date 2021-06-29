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
      console.log('on est dans le middleware SUBMIT_DATE_VALUE')
      // avec getstate on apporte le state dans le MW
      axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking', {
       
         begining: state.diary.date[0],
         end: state.diary.date[1],
         ad_id: 1},
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
      console.log(action)
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking/${action.id}`,
        {headers:{
          "Content-Type": "application/json",
          'token': state.user.token
        },
      })
        .then((response)=>{
          console.log(response.data);
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

