import REG_EXP from '../constants/regEx';

export const required = (value) => (value ? undefined : 'Required');

export const isArray = (value) => (value.length >= 1 ? undefined : 'Please select atleast one option');

export const checkBoxValidate = (values) => {
  if (values.length < 1) return 'Required';
  return null;
};

export const isNameValue = (value) => (value && REG_EXP.NAME.test(value) ? undefined : 'Name is not valid');

export const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);

export const lengthRange = (min, max) => (value) => (value.toString().length >= min && value.toString().length <= max
  ? undefined
  : `Should be between ${min} to ${max} characters long`);

export const isZip = (value) => (REG_EXP.ZIP.test(value) ? undefined : 'Invalid zip code');

export const isEmail = (value) => (REG_EXP.EMAIL.test(value) ? undefined : 'Invalid email');

export const isPhone = (value) => (REG_EXP.PHONE.test(value) ? undefined : 'Invalid phone number');

export const isUrl = (value) => (REG_EXP.WEBSITE.test(value) ? undefined : 'Invalid url');

export const isDateValue = (value) => (REG_EXP.DATE.test(value) ? undefined : 'Invalid date format for mm/dd/yyyy');

export const validateIfValue = (...validators) => (value) => {
  if (value) {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );
  }
  return undefined;
};

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

export const isPhoneNumber = (value) => (REG_EXP.PHONE.test(value) ? undefined : 'Invalid phone number');
