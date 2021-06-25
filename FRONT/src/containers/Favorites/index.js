import { connect } from 'react-redux';

import { getFavorites } from 'src/actions/favorites';

import Favorites from 'src/components/Favorites';
// TODO en cpours de construction
const mapStateToprops = (state) => ({
  favorites:state.card.favorites,
});

const mapDispatchToProps = (dispatch) =>({
  loadFavorites:() => {
    dispatch(getFavorites());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Favorites);



