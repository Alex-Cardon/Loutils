import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
 content: state.message.content,
 author: state.message.author,
});

export default connect(mapStateToProps)(Message);
