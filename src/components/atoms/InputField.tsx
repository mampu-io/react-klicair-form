import React, { useState, useEffect, InputHTMLAttributes } from 'react';

export type InputFieldProps = {
  placeholder: string,
  width?: 'fixed' | 'fluid';
  _prefix?: string,
  suffix?: string,
  _size?: 'small' | 'medium' | 'large';
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>;

export default function InputField({
  placeholder,
  type,
  width,
  _prefix,
  suffix,
  _size,
  title,
  subtitle,
  disabled,
  isError,
  ref,
  ...nativeProps
}: InputFieldProps) {
  const [seePassword, setSeePassword] = useState(false);
  const [types, setTypes] = useState(type);
  const inputFieldSize = `kc-inputfield--${_size}`;
  const inputFieldDisable = disabled ? 'kc-inputfield--disabled' : '';
  const inputFieldError = !disabled && isError ? 'kc-inputfield--error' : '';
  const inputFieldWidth = `kc-inputfield--${width}`;
  const inputFieldVariant = [inputFieldSize, inputFieldDisable, inputFieldError, inputFieldWidth].join(' ');

  const showTogglePassword = () => (
    !seePassword ? (
      <button
        className="kc-inputfield__toggle-password"
        type="button"
        disabled={disabled}
        onClick={() => setSeePassword(!seePassword)}
      >
        <i className="fa fa-eye" />
      </button>
    ) : (
      <button
        className="kc-inputfield__toggle-password"
        type="button"
        disabled={disabled}
        onClick={() => setSeePassword(!seePassword)}
      >
        <i className="fa fa-eye-slash" />
      </button>
    )
  );

  const showSuffix = () => (
    suffix ? (
      <div className="kc-inputfield__suffix">
        <span className="kc-body2">{suffix}</span>
      </div>
    ) : null
  );

  useEffect(() => {
    if (type === 'password') {
      setTypes(seePassword ? 'text' : 'password');
    }
  }, [seePassword, type]);

  return (
    <div className={`kc-inputfield ${inputFieldVariant}`}>
      {
        title ? (
          <div className="kc-inputfield__title">
            <span className="kc-caption">{title}</span>
          </div>
        ) : null
      }
      <div className="kc-inputfield__box">
        {
          _prefix ? (
            <div className="kc-inputfield__prefix">
              <span className="kc-body2">{_prefix}</span>
            </div>
          ) : null
        }
        <input
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          type={types}
          {...nativeProps}
        />
        {type === 'password' ? showTogglePassword() : showSuffix()}
      </div>
      {
        subtitle ? (
          <div className="kc-inputfield__subtitle">
            <span className="kc-overline">{subtitle}</span>
          </div>
        ) : null
      }
    </div>
  );
}

InputField.defaultProps = {
  width: 'fixed',
  _prefix: '',
  suffix: '',
  _size: 'medium',
  title: '',
  subtitle: '',
  disabled: false,
  isError: false,
};
