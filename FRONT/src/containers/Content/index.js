import { connect } from 'react-redux';

import Content from 'src/components/Content';
import { getContent } from 'src/actions/content';

const mapStateToprops = (state) => ({
  isLogged: state.user.isLogged,
  content:state.card.content,
  apiResult : state.research.apiResult,
  searchResult: state.research.searchResult,
});

const mapDispatchToProps = (dispatch) =>({
  loadContent:() => {
    dispatch(getContent());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Content);




