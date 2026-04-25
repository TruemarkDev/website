import React from 'react';
import { Field } from 'react-final-form';
import Select from 'react-select';

const REACT_SELECT_TM_COLORS = {
  primary25: '#ffbbbb',
  primary50: '#ff9a9a',
  primary75: '#ff7878',
  primary: '#ff5757',
};

interface Option {
  label: string;
  value: any;
}

interface FormErrorProps {
  name: string;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ name, className }) => (
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

interface SelectFormFieldProps {
  name: string;
  options?: Option[];
  containerClassName: string;
  inputClassName: string;
  labelClassName: string;
  label: string;
  forId: string;
  validate?: any;
}

export const SelectFormField: React.FC<SelectFormFieldProps> = ({
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
        <ReactSelectAdapter
          isMulti={false}
          {...input}
          {...rest}
          options={options}
        />
        <FormError name={name} />
      </div>
    )}
  </Field>
);

interface ReactSelectAdapterProps {
  options: Option[];
  simpleValue?: boolean;
  value: any;
  isMulti: boolean;
  onChange: (selection: any) => void;
}

export const ReactSelectAdapter: React.FC<ReactSelectAdapterProps> = ({
  options,
  simpleValue,
  ...rest
}) => {
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
            _selection = (_selection as Option[] | undefined)?.map(({ value }) => value) ?? _selection;
          else _selection = _selection.value;
          rest.onChange(_selection);
        }}
      />
    );
  }

  return <Select {...rest} options={options} />;
};

interface CheckBoxFieldProps {
  name: string;
  options?: Option[];
  containerClassName: string;
  labelClassName: string;
  validate: any;
  label: string;
  optionsContainerClassName: string;
  errorClassName: string;
  forId: string;
}

export const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  name,
  options = [],
  containerClassName,
  labelClassName,
  validate,
  label: fieldLabel,
  optionsContainerClassName,
  errorClassName,
  forId,
}) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelClassName}>
      {fieldLabel}
      {validate && '*'}
    </label>
    <div className={optionsContainerClassName}>
      {options.map(({ label, value }) => (
        <div className="form-check form-check-inline ps-0">
          <Field
            name={name}
            component="input"
            className="checkbox"
            type="checkbox"
            checked={label === 'Web' && true}
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

interface FormRowProps {
  className: string;
  children: React.ReactNode;
}

export const FormRow: React.FC<FormRowProps> = ({ className, children }) => (
  <div className={`row ${className}`}>{children}</div>
);

interface FormFieldProps {
  name: string;
  containerClassName: string;
  inputClassName: string;
  labelClassName: string;
  placeholder: string;
  validate: any;
  label: string;
  textArea: boolean;
  rows: number;
  cols: number;
  disabled: boolean;
  onKeyPress: () => void;
  onChangeCallback: (value: any) => void;
  errorClassName: string;
  forId: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  containerClassName,
  inputClassName,
  labelClassName,
  placeholder,
  validate,
  label,
  textArea,
  rows,
  cols,
  disabled,
  onKeyPress,
  onChangeCallback,
  errorClassName,
  forId,
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

export default FormField;
