import React, { InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
  description?: string;
  disabled?: boolean;
}

export default function RadioButton({
  label,
  checked,
  description,
  disabled,
  className,
  ...nativeProps
}: RadioButtonProps) {
  const getClassName = () => {
    const result = className ? `kc-radio-button ${className}` : 'kc-radio-button';
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const radioButtonDisabled = disabled || false;
  const radioButtonChecked = checked || false;

  return (
    <div className={getClassName()}>
      <input
        type="radio"
        checked={radioButtonChecked}
        disabled={radioButtonDisabled}
        {...nativeProps}
      />
      <div className={`kc-radio-button__text ${radioButtonDisabled ? 'kc-radio-button__text--disabled' : ''}`.trim()}>
        <span className="kc-radio-button__label kc-body1 kc-typo-bold">
          {label}
        </span>
        {description !== ''
          ? (<span className="kc-radio-button__desc kc-body2">{description}</span>)
          : null}
      </div>
    </div>
  );
}

RadioButton.defaultProps = {
  checked: false,
  description: '',
  disabled: false,
};
