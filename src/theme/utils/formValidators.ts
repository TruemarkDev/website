import REG_EXP from '@constants/regEx';

export const required = (value: any) => (value ? undefined : 'Required');

export const isArray = (value: any[]) =>
  value.length >= 1 ? undefined : 'Please select atleast one option';

export const checkBoxValidate = (values: any[]) => {
  if (values.length < 1) return 'Required';
  return null;
};

export const isNameValue = (value: string) =>
  value && REG_EXP.NAME.test(value) ? undefined : 'Name is not valid';

export const mustBeNumber = (value: any) =>
  isNaN(value) ? 'Must be a number' : undefined;

export const lengthRange = (min: number, max: number) => (value: any) =>
  value.toString().length >= min && value.toString().length <= max
    ? undefined
    : `Should be between ${min} to ${max} characters long`;

export const isZip = (value: string) =>
  REG_EXP.ZIP.test(value) ? undefined : 'Invalid zip code';

export const isEmail = (value: string) =>
  REG_EXP.EMAIL.test(value) ? undefined : 'Invalid email';

export const isPhone = (value: string) =>
  REG_EXP.PHONE.test(value) ? undefined : 'Invalid phone number';

export const isUrl = (value: string) =>
  REG_EXP.WEBSITE.test(value) ? undefined : 'Invalid url';

export const isDateValue = (value: string) =>
  REG_EXP.DATE.test(value) ? undefined : 'Invalid date format for mm/dd/yyyy';

type ValidatorFunction = (value: any) => string | undefined;

export const validateIfValue = (
  ...validators: ValidatorFunction[]
): ValidatorFunction => {
  return (value: any) => {
    if (value) {
      for (const validator of validators) {
        const error = validator(value);
        if (error) {
          return error;
        }
      }
    }
    return undefined;
  };
};

export const composeValidators =
  (...validators: ValidatorFunction[]): ValidatorFunction =>
  (value: any) =>
    validators.reduce<undefined | string>(
      (error, validator) => error || validator(value),
      undefined
    );
export const isPhoneNumber = (value: string) =>
  REG_EXP.PHONE.test(value) ? undefined : 'Invalid phone number';
