// GET http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking -> Toutes les réservations d'une annonce
/*
{
    "ad_id":5
}
*/

//POST http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking -> créer une réservation
/* 
{
    "begining": "2021-07-10",
    "end": "2021-07-11",
    "ad_id": 7
}
*/

//DELETE http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking -> Supprimer une réservation
/* 
{
    "id" : 2
}*/



import axios from 'axios';

import { SUBMIT_DATE_VALUE, submitSuccess} from 'src/actions/diary';
 //!calendrier



const diaryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_DATE_VALUE: {
      // avec getstate on apporte le state dans le MW
        const state = store.getState();
      axios.post('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking', {
        begining: state.diary.date[0],
        end: state.diary.date[1],
        ad_id: state.announcements.id
        })
        .then((response)=>{
            store.dispatch(submitSuccess(response.data))
        })
        .catch((error)=>console.log(error))
        break;
    }
    default:
      case GET_DATE_VALUE: {
        // avec getstate on apporte le state dans le MW
          const state = store.getState();
        axios.get('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking', {
          ad_id: state.announcements.id
          })
          .then((response)=>{
              store.dispatch(getSuccess(response.data))
          })
          .catch((error)=>console.log(error))
          break;
      }
      default:
        case DELETE_DATE_VALUE: {
          // avec getstate on apporte le state dans le MW
            const state = store.getState();
          axios.delete('http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/booking', {
            ad_id: state.announcements.id
            })
            .then((response)=>{
                store.dispatch(deleteSuccess(response.data))
            })
            .catch((error)=>console.log(error))
            break;
        }
        default:
      next(action);
      break;
  }
}


export default diaryMiddleware;

