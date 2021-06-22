import { connect } from 'react-redux';

import { inputDate } from 'src/actions/adForm';

import Diary from 'src/components/AdForm/diary';

const mapStateToProps = (state) => ({
    date: state.ad.date
  });

const mapDispatchToProps = (dispatch) => ({
    handleDateChange: (date) => {
      console.log(date);
        dispatch(inputDate(date));
    },
    handleValidation: (date) => {
        dispatch()
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Diary);
