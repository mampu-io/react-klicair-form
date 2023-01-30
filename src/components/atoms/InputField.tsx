import React, { InputHTMLAttributes } from 'react';

type InputFieldGeneralProps = {
  placeholder: string,
  width?: 'fixed' | 'fluid';
  _prefix?: string,
  suffix?: string,
  _size?: 'small' | 'medium' | 'large';
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  isError?: boolean;
};

type InputFieldWithIconButtonProps = {
  iconButtonName?: undefined;
  onClickIconButton?: () => void;
} | {
  iconButtonName?: string;
  onClickIconButton: () => void;
}

export type InputFieldProps = InputFieldGeneralProps
  & InputFieldWithIconButtonProps
  & InputHTMLAttributes<HTMLInputElement>
  & React.ClassAttributes<HTMLInputElement>;

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
  iconButtonName,
  onClickIconButton,
  ref,
  ...nativeProps
}: InputFieldProps) {
  const inputFieldSize = `kc-inputfield--${_size}`;
  const inputFieldDisable = disabled ? 'kc-inputfield--disabled' : '';
  const inputFieldError = !disabled && isError ? 'kc-inputfield--error' : '';
  const inputFieldWidth = `kc-inputfield--${width}`;
  const inputFieldVariant = [inputFieldSize, inputFieldDisable, inputFieldError, inputFieldWidth].join(' ');

  const renderSuffix = () => (
    suffix ? (
      <div className="kc-inputfield__suffix">
        <span className="kc-body2">{suffix}</span>
      </div>
    ) : null
  );

  const renderIconButton = () => {
    if (!iconButtonName) return null;

    return (
      <button
        className="kc-inputfield__icon-button"
        type="button"
        disabled={disabled}
        onClick={() => onClickIconButton()}
      >
        <i className={iconButtonName} />
      </button>
    );
  };

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
          type={type}
          {...nativeProps}
        />
        {renderSuffix()}
        {renderIconButton()}
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
