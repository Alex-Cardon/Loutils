import { connect } from 'react-redux';

import { inputDate, submitDateValue, fetchDates } from 'src/actions/diary';
import { withRouter } from 'react-router-dom';

import Calendar from 'src/components/Calendar';

const mapStateToProps = (state) => ({
    date: state.diary.date,
    showDate: state.diary.showDate,
    begining: state.diary.begining,
    end: state.diary.end,
    validate: state.diary.validate,
    loading: state.diary.loading,
    allDates: state.diary.allDates,
    ad_id: state.diary.ad_id
    });

const mapDispatchToProps = (dispatch, ownProps) => ({

    handleDateChange: (date) => {
      
      dispatch(inputDate(date));
    },

    handleValidation: () => {
      
      dispatch(submitDateValue(ownProps.match.params.id));
    },

    loadDates: () => {
      dispatch(fetchDates(ownProps.match.params.id));
    }

});

const container = connect(mapStateToProps, mapDispatchToProps)(Calendar);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

