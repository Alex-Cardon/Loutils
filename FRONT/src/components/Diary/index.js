import React, { useEffect, useCallback } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Loading from 'src/components/Loading'
import moment from 'moment';

import PropTypes from 'prop-types';
import './styles.scss';

const Diary = ({
  handleDateChange, 
  handleValidation, 
  date, 
  begining, 
  end, 
  validate,
  loading,
  loadDates,
  allDates,
}) => {

  useEffect(() => {
    loadDates();
  }, []);

  console.log(allDates);
 moment.locale('fr')
 const momentbegin = moment(begining).format("dddd DD MMM YYYY");
 const momentend = moment(end).format("dddd DD MMM YYYY");

// let dateBegin= [];
// let dateEnd= [];

// if (allDates.length > 0) {
//   const dateTest = allDates.map((date) => (
//     dateBegin.push(date.begining),
//     dateEnd.push(date.end)
//   ));
// }

  useEffect(() => {
    if(allDates.length){
      console.log('On est dans le useCallback', allDates)
      console.log(allDates[0].begining, new Date(allDates[0].begining))
    }   

  }, [allDates])

// console.log(dateBegin);
const tileClassName = ({ activeStartDate, date, view }) => {
  console.log({activeStartDate, date, view})
  
  const isAlreadyBooked = allDates.some((interval) => {
    const begining = new Date(interval.begining);
    const end = new Date(interval.end);
    return (date > begining && date < end);  
  })

  return (isAlreadyBooked) ? 'diary-booked' : null;
}

    if (loading) {
      return <Loading />;
    }
    return (
      <div className='calendar' >
         <Calendar

            onChange={handleDateChange}
            selectRange={true}
            tileClassName={tileClassName}
            
         />
        
        <button onClick={handleValidation}>Valider</button>
        {validate &&
        <div className='calendar-result'>
          Vous avez reservé du {momentbegin} au {momentend}
        </div>
        }
        
      </div>
    );
};

Diary.propTypes = {
  showDate: PropTypes.bool.isRequired,
  date: PropTypes.array,
  handleDateChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
};

Diary.defaultProps = { 
  date: ["2021-06-29", "2021-06-31"]
};

export default Diary;
