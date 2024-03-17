/* eslint-disable no-param-reassign */
import React, { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
}

export default function Checkbox({
  id,
  label,
  disabled = false,
  indeterminate = false,
  checked = false,
  className,
  ...nativeProps
}: CheckboxProps) {
  const getClassName = () => {
    const checkboxIndeterminate = indeterminate ? 'kc-checkbox--indeterminate' : '';
    const checkboxdisabled = disabled ? 'kc-checkbox--disabled' : '';
    const checkboxVariant = [checkboxIndeterminate, checkboxdisabled].join(' ');
    const result = className ? `kc-checkbox ${checkboxVariant} ${className}` : `kc-checkbox ${checkboxVariant}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <div className={getClassName()}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        ref={(input) => {
          if (input) input.indeterminate = checked && indeterminate;
        }}
        {...nativeProps}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </div>
  );
}
