import { connect } from 'react-redux';

import oneAd from 'src/components/oneAd';
import { getOneAd, handleMessage } from 'src/actions/oneAd';
import{withRouter} from 'react-router-dom';

const mapStateToprops = (state) => ({
  
  oneAd:state.oneAd.oneAd,
  msgTxt: state.oneAd.msgTxt,
  sendMessageSuccess: state.oneAd.sendMessageSuccess,
});
//console.log(state);

const mapDispatchToProps = (dispatch, ownProps) =>({
  loadOneAd:() => {
    dispatch(getOneAd(ownProps.match.params.id));
  },

  handleMessage:(msgTxt, userId, adId ) => {
    console.log("coucou container handleMessage");
    dispatch(handleMessage(msgTxt, userId, adId ));
  },

});
//console.log(dispatch);


const container = connect(mapStateToprops, mapDispatchToProps)(oneAd);  
const containerWithRouter = withRouter(container);  
export default containerWithRouter;
