import { connect } from 'react-redux';

import Content from 'src/components/Content';
import { getContent } from 'src/actions/content';

const mapStateToprops = (state) => ({
  /*id: state.card.id,
  title: state.card.title,
  description: state.card.description,
  price: state.card.price,*/
  content:state.card.content,
});

const mapDispatchToProps = (dispatch) =>({
  loadContent:() => {
    dispatch(getContent());
  }
});

export default connect(mapStateToprops, mapDispatchToProps)(Content);




