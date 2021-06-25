// import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// import PropTypes from 'prop-types';

// const Diary = ({
//   handleDateChange, 
//   handleValidation, 
//   date,
// }) => (
//   <div 
//     className='calendar' 
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-around",
//       height: "100%"
//     }} 
//   >
//     <Calendar
//       // onChange prend date come parametre
//       onChange={handleDateChange}
//       // true permet de selectionner deux dates : début et fin, ici on renvoie un tableau
//       selectRange={true}
//       // date est le parametre de la date sur laquelle on va cliquer, 
//       value={date}
//       depth="year"
//     />
//     {/* <p>Date choisie : {date.toLocaleDateString()}</p> */}
//     <button onClick={handleValidation}>Valider</button>
  
//   </div>
// );



// Diary.propTypes = {
//   date: PropTypes.instanceOf(Date).isRequired,
//   handleDateChange: PropTypes.func.isRequired,
//   handleValidation: PropTypes.func.isRequired,
// }

// export default Diary;
