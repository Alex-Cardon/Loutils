export const INPUT_DATE = 'INPUT_DATE';
export const SUBMIT_DATE_VALUE = 'SUBMIT_DATE_VALUE';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const FETCH_DATES = 'FETCH_DATES';

// export const 

export const inputDate = (date) => ({
type: INPUT_DATE,
  date,
});

export const submitDateValue =() => ({
  type: SUBMIT_DATE_VALUE,
});

export const submitSuccess = (booking) => ({
  type: SUBMIT_SUCCESS,
  booking
});

export const fetchDates =(id) => ({
  type: FETCH_DATES,
  id,
});
