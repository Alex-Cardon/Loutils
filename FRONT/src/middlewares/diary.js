
import axios from 'axios';

import { SUBMIT_DATE_VALUE, submitSuccess} from 'src/actions/diary';

const diaryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_DATE_VALUE: {
      // avec getstate on apporte le state dans le MW
        const state = store.getState();
      axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking', {
        // ici transformer format
         date: state.diary.date,
        })
        .then((response)=>{
            store.dispatch(submitSuccess(response.data))
        })
        .catch((error)=>console.log(error))
        break;
    }
    default:
      next(action);
  }
}


export default diaryMiddleware;

