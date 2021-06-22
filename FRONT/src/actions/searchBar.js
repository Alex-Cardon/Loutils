export const SUBMIT_RESEARCH = 'SUBMIT_RESEARCH';
export const CHANGE_RESEARCH_INPUT = 'CHANGE_RESEARCH_INPUT';

export const submitResearch = () => ({
  type: SUBMIT_RESEARCH,
});

export const changeSettingsInput = (value) => ({
  type: CHANGE_RESEARCH_INPUT,
  value,
});


//! direction le réduceur 
