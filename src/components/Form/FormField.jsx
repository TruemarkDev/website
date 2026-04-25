import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Select from 'react-select';

const REACT_SELECT_TM_COLORS = {
  primary25: '#ffbbbb',
  primary50: '#ff9a9a',
  primary75: '#ff7878',
  primary: '#ff5757',
};

export const FormError = ({ name, className = '' }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error && typeof error === 'string' ? (
        <div className={`text-danger ${className}`}>{error}</div>
      ) : null
    }
  />
);

FormError.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const SelectFormField = ({
  name,
  options = [],
  containerClassName,
  inputClassName,
  labelClassName,
  label,
  forId,
  validate,
  ...rest
}) => (
  <Field type="select" name={name} validate={validate}>
    {({ input }) => (
      <div className={containerClassName}>
        <label htmlFor={`${forId}-${name}`} className={labelClassName}>
          {label}
          {validate && '*'}
        </label>
        <ReactSelectAdapter {...input} {...rest} options={options} />
        <FormError name={name} />
      </div>
    )}
  </Field>
);

export const ReactSelectAdapter = ({ options, simpleValue, ...rest }) => {
  if (simpleValue) {
    return (
      <Select
        {...rest}
        options={options}
        value={options.filter(({ value }) => rest.value.includes(value))}
        classNamePrefix="tm"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            ...REACT_SELECT_TM_COLORS,
          },
        })}
        onChange={(selection) => {
          let _selection = selection;
          if (rest.isMulti)
            _selection = _selection?.map(({ value }) => value) ?? _selection;
          else _selection = _selection.value;
          rest.onChange(_selection);
        }}
      />
    );
  }

  return <Select {...rest} options={options} />;
};

export const CheckBoxField = ({
  name,
  options = [],
  containerClassName = '',
  labelClassName = '',
  validate,
  label: fieldLabel,
  optionsContainerClassName = '',
  errorClassName = '',
  forId = 'tm',
}) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelClassName}>
      {fieldLabel}
      {validate && '*'}
    </label>
    <div className={optionsContainerClassName}>
      {options.map(({ label, value }) => (
        <div key={value} className="form-check form-check-inline ps-0">
          <Field
            name={name}
            component="input"
            className="checkbox"
            type="checkbox"
            value={value}
            id={`${forId}-${value}`}
            validate={validate}
          />
          <label htmlFor={`${forId}-${value}`}>{label}</label>
        </div>
      ))}
    </div>
    <FormError className={errorClassName} name={name} />
  </div>
);

CheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  validate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  errorClassName: PropTypes.string,
  optionsContainerClassName: PropTypes.string,
  forId: PropTypes.string,
  options: PropTypes.array,
};

export const FormRow = ({ className, children }) => (
  <div className={`row ${className}`}>{children}</div>
);

const FormField = ({
  name,
  containerClassName = '',
  inputClassName = '',
  labelClassName = '',
  placeholder = '',
  validate,
  label,
  textArea = false,
  rows = 4,
  cols = 4,
  disabled = false,
  onKeyPress = () => {},
  onChangeCallback = () => {},
  errorClassName = '',
  forId = 'tm',
}) => (
  <Field
    name={name}
    placeholderText={placeholder}
    validate={validate}
    fieldLabel={label}
    fieldDisabled={disabled}
    format={(value = '') => {
      if (typeof value !== 'string') return value;
      return value.trim();
    }}
    formatOnBlur
    render={({ input, placeholderText, meta, fieldLabel, fieldDisabled }) => {
      const inputClassNames = [];
      const error = meta.touched && meta.error ? 'border-danger' : null;
      if (inputClassName) inputClassNames.push(inputClassName);
      if (error) inputClassNames.push(error);
      return (
        <div className={containerClassName}>
          {label && (
            <label
              htmlFor={`${forId}-${input.name}`}
              className={labelClassName}
            >
              {fieldLabel} {validate && '*'}
            </label>
          )}
          {textArea ? (
            <textarea
              className={inputClassNames.join(' ')}
              id={`${forId}-${input.name}`}
              placeholder={placeholderText}
              disabled={fieldDisabled}
              rows={rows}
              cols={cols}
              {...input}
            />
          ) : (
            <input
              {...input}
              className={inputClassNames.join(' ')}
              id={`${forId}-${input.name}`}
              placeholder={placeholderText}
              disabled={fieldDisabled}
              onKeyPress={onKeyPress}
              onChange={(e) => {
                const { value } = e.target;
                if (onChangeCallback) onChangeCallback(value);
                input.onChange(value);
              }}
            />
          )}
          <FormError className={errorClassName} name={input.name} />
        </div>
      );
    }}
  />
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  textArea: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onKeyPress: PropTypes.func,
  onChangeCallback: PropTypes.func,
  errorClassName: PropTypes.string,
  forId: PropTypes.string,
};

export default FormField;
