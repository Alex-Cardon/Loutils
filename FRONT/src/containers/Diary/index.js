import { connect } from 'react-redux';

import { inputDate, submitDateValue } from 'src/actions/diary';

import Diary from 'src/components/Diary';

const mapStateToProps = (state) => ({
    date: state.diary.date,
    showDate: state.diary.showDate,
  });

const mapDispatchToProps = (dispatch) => ({

    handleDateChange: (date) => {
      // console.log("startDate:", date[0]);
      // console.log("endDate:", date[1]);
      
      dispatch(inputDate(date));
    },

    handleValidation: () => {
      
      dispatch(submitDateValue());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Diary);
