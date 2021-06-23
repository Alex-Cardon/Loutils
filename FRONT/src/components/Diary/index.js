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
            value={date}
         />
        
        <button onClick={handleValidation}>Valider</button>
        
    </div>
    );
};

Diary.propTypes = {
  showDate: PropTypes.bool.isRequired,
  date: PropTypes.object.isRequired, 
  handleDateChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  };

export default Diary;
