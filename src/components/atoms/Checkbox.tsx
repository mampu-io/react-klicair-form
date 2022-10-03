/* eslint-disable no-param-reassign */
import React, { InputHTMLAttributes } from 'react';
import '../../styles/components/atoms/_checkbox.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
}

export default function Checkbox({
  label,
  disabled = false,
  indeterminate = false,
  checked = false,
  ...nativeProps
}: CheckboxProps) {
  const checkboxIndeterminate = indeterminate ? 'kc-checkbox--indeterminate' : '';
  const checkboxdisabled = disabled ? 'kc-checkbox--disabled' : '';

  return (
    <div className={`kc-checkbox-container ${checkboxIndeterminate} ${checkboxdisabled}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        ref={(input) => {
          if (input) input.indeterminate = checked && indeterminate;
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
