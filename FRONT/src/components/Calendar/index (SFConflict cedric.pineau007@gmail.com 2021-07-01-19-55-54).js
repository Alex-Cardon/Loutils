import React, { useEffect, useCallback } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Loading from 'src/components/Loading'
import moment from 'moment';
import { NavLink } from 'react-router-dom';

//import Header from 'src/containers/Header'; <Header />
//import Footer from 'src/components/Footer';  <Footer />

import PropTypes from 'prop-types';
import './styles.scss';

const Calendars = ({
  handleDateChange,
  handleValidation,
  date,
  begining,
  end,
  validate,
  ad_id,
  loading,
  loadDates,
  allDates,
}) => {

  useEffect(() => {
    loadDates();
  }, []);

  moment.locale('fr')
  const momentbegin = moment(begining).format("dddd DD MMM YYYY");
  const momentend = moment(end).format("dddd DD MMM YYYY");

  const tileClassName = ({ date }) => {

    const isAlreadyBooked = allDates.some((interval) => {
      const begining = new Date(interval.begining);
      const end = new Date(interval.end);
      return (date >= begining && date <= end);
    })

    return (isAlreadyBooked) ? 'diary-booked' : null;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      
      <div className='calendar' >
        <NavLink
          className='account-navlink'
          exact
          to={`/ad/${ad_id}`}
        >
          Retourner à l'annonce
        </NavLink>
        <Calendar
          className={['c1','c2']}
          onChange={handleDateChange}
          selectRange={true}
          tileClassName={tileClassName}
          tileDisabled={() => true}
        />
      </div>
     
    </>
  );
};

Calendars.propTypes = {
  showDate: PropTypes.bool.isRequired,
  date: PropTypes.array,
  handleDateChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
};

// Diary.defaultProps = { 
//   date: ["2021-06-29", "2021-06-31"]
// };

export default Calendars;
