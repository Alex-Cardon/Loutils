import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
 author:state.message.author,
 content:state.message.content,
});

export default connect(mapStateToProps)(Messages);

