import { connect } from 'react-redux';

import oneAd from 'src/components/oneAd';
import { getOneAd } from 'src/actions/oneAd';
import{withRouter} from 'react-router-dom';

const mapStateToprops = (state) => ({

  oneAd:state.oneAd.oneAd,
});
//console.log(state);

const mapDispatchToProps = (dispatch, ownProps) =>({
  loadOneAd:() => {
    dispatch(getOneAd(ownProps.match.params.id));
  }
});
//console.log(dispatch);


const container = connect(mapStateToprops, mapDispatchToProps)(oneAd);  
const containerWithRouter = withRouter(container);  
export default containerWithRouter;
