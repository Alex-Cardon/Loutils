import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import PropTypes from 'prop-types';

const Diary = ({handleDateChange, handleValidation, date}) => {
 
    return (
      <div className='calendar' >
         <Calendar
          
            onChange={handleDateChange}
            selectRange={true}
            defaultValue={date}
         />
        
        <button onClick={handleValidation}>Valider</button>
        
      </div>
    );
};

Diary.propTypes = {
  showDate: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  };

export default Diary;
