import { connect } from 'react-redux';

import { inputDate, submitDateValue, fetchDates } from 'src/actions/diary';
import { withRouter } from 'react-router-dom';

import Diary from 'src/components/Diary';

const mapStateToProps = (state) => ({
    date: state.diary.date,
    showDate: state.diary.showDate,
    begining: state.diary.begining,
    end: state.diary.end,
    validate: state.diary.validate,
    loading: state.diary.loading,
    });

const mapDispatchToProps = (dispatch, ownProps) => ({

    handleDateChange: (date) => {
      // console.log("startDate:", date[0]);
      // console.log("endDate:", date[1]);
      
      dispatch(inputDate(date));
    },

    handleValidation: () => {
      
      dispatch(submitDateValue());
    },

    loadDates: () => {
      dispatch(fetchDates(ownProps.match.params.id));
    }

});

const container = connect(mapStateToProps, mapDispatchToProps)(Diary);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

