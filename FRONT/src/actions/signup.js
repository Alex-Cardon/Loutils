// export const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
export const HANDLE_FORM_SUBMIT = "HANDLE_FORM_SUBMIT";
export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE"


// Nos actions

export const handleFormSubmit = () => (
  {
    type: HANDLE_FORM_SUBMIT,
    
  }
);

export const handleInputChange = (newValue) => (
  {
    type: HANDLE_INPUT_CHANGE,
    newValue,
  }
);
