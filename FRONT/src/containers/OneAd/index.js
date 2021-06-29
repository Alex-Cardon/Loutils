import { connect } from 'react-redux';

import Content from 'src/components/OneAd';
import { getOneAd } from 'src/actions/OneAd';

const mapStateToprops = (state) => ({
  
  oneAd:state.oneAd.oneAd,
  
});

const mapDispatchToProps = (dispatch) =>({
  loadOneAd:() => {
    dispatch(getOneAd());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Content);




