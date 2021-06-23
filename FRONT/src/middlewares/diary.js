
import axios from 'axios';

import { SUBMIT_DATE_VALUE, submitSuccess} from 'src/actions/diary';

const diaryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_DATE_VALUE: {
      // avec getstate on apporte le state dans le MW
        const state = store.getState();
      axios.post('http://localhost:3000/login', {
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

