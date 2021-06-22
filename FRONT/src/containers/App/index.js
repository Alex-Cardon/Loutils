import { connect } from 'react-redux';

import { getContent } from 'src/actions/content';

import App from 'src/components/App';

const mapStateToprops = (state) => ({
  loading: state.content.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadContent: () => {
    dispatch(getContent());
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(App);
