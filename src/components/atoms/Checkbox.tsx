/* eslint-disable no-param-reassign */
import React, { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
}

export default function Checkbox({
  label,
  disabled,
  indeterminate,
  checked,
  ...nativeProps
}: CheckboxProps) {
  const checkboxIndeterminate = indeterminate ? 'kc-checkbox--indeterminate' : '';
  const checkboxdisabled = disabled ? 'kc-checkbox--disabled' : '';
  const checkboxVariant = [checkboxIndeterminate, checkboxdisabled].join(' ');
  const isChecked = checked || false;
  const isIndeterminate = indeterminate || false;

  return (
    <div className={`kc-checkbox ${checkboxVariant}`}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        ref={(input) => {
          if (input) input.indeterminate = isChecked && isIndeterminate;
        }}
        {...nativeProps}
      />
      <label htmlFor="vehicle1">{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  indeterminate: false,
  checked: false,
};
