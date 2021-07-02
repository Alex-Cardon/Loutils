import axios from 'axios';

//GET http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads -> Voir les annonces et leurs détails de l'utilisateur X

//GET http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad/6 -> voir une annonce par son id en tant que visiteur

//PATCH http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ad/2 -> Modifier une annonce en tant qu'utilisateur X
//POST http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads -> Poster une annonce en tant qu'utilisateur X
// DELETE http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ad/2 -> supprimer une annonce en tant que monsieur x


import {
  GET_ANNOUNCEMENTS,
  getAnnouncementsSuccess,
  DELETE_BOOKING,
  deleteBookingSuccess,
} from 'src/actions/announcements';


const announcementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    
    case GET_ANNOUNCEMENTS:
      const state = store.getState();
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads`, {headers:{
        /*ad_id: state.annoucements.id,*/
        token: state.user.token,
      }})  
            .then((response) => {
          //console.log('response de GET_ANNOUNCEMENTS', response.data)
          store.dispatch(getAnnouncementsSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break;
    
    case DELETE_BOOKING: {
      console.log('state dans DELETE_BOOKING',state);
      const state = store.getState();
      axios.patch(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads/${action.adId}`,{
        "ad_id": state.announcements.adId,
      },
       {
          headers:{
          "Content-Type": "application/json",
          'token': state.user.token  
        }
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(deleteBookingSuccess(response.data));
        })
        .catch((error) => console.log(error))
          console.log(token); 
      break;
    }
/*
    case GET_ANNOUNCEMENTS:
      //const state = store.getState();
      axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads`,{
        
      })
        .then((response) => {
          console.log('response de GET_ANNOUNCEMENTS', response.data)
          store.dispatch(getAnnouncementsSuccess(response.data));
        })
        .catch((error) => console.log(error))
      break;

     default:
      case GET_ANNOUNCEMENTS:
        axios.get(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/ad/:id`)
          .then((response) => {
            console.log('response de GET_ANNOUNCEMENTS', response.data)
            store.dispatch(getAnnouncementsSuccess(response.data));
          })
          .catch((error) => console.log(error))
      break
       default:
          case POST_ANNOUNCEMENTS://
            axios.post(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ads`)
              .then((response) => {
                console.log('response de POST_ANNOUNCEMENTS', response.data)//
                store.dispatch(postAnnouncementsSuccess(response.data));//
              })
              .catch((error) => console.log(error))
            break
          default:
          switch (action.type) {
            case PATCH_ANNOUNCEMENTS://
              axios.patch(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ad/:id`)
                .then((response) => {
                  console.log('response de PATCH_ANNOUNCEMENTS', response.data)//
                  store.dispatch(patchAnnouncementsSuccess(response.data));//
                })
                .catch((error) => console.log(error))
              break
            default: 
            switch (action.type) {
              case DELETE_ANNOUNCEMENTS://
                axios.delete(`http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/account/ad/:id`)
                  .then((response) => {
                    console.log('response de DELETE_ANNOUNCEMENTS', response.data)//
                    store.dispatch(deleteAnnouncementsSuccess(response.data));//
                  })
                  .catch((error) => console.log(error))
                break */ 
              default:   
      next(action);
      break;
  }
};

export default announcementsMiddleware;
