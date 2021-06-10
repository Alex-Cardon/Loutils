export const CHANGE_SETTINGS_INPUT = 'CHANGE_SETTINGS_INPUT';
export const SUBMIT_SETTINGS = 'SUBMIT_SETTINGS';



// action commune pour changer les champs de settings
export const changeSettingsInput = (settingsKey, newValue) => ({
  type: CHANGE_SETTINGS_INPUT,
  // contiendra email ou password
  settingsKey: settingsKey,
  // la nouvelle valeur a sauvegarder
  newValue: newValue,
});


// pas besoin de parametre
// le reducer pourra gérer avec les infos qu'il a dans le state
export const submitSettings = () => ({
  type: SUBMIT_SETTINGS,
});


