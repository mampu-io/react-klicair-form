/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../styles/components/atoms/_toggle_switch.scss';

export interface ToggleSwitchProps {
  disabled?: boolean;
  checked?: boolean;
}

export default function ToggleSwitch({
  disabled,
  checked,
  ...nativeProps
}: ToggleSwitchProps) {
  const toggleSwitchDisabled = disabled ? 'kc-toggle-switch--disabled' : '';
  const isChecked = checked || false;
  const labelOffDisabled = isChecked ? 'kc-toggle-switch__off--disabled' : '';
  const labelOnDisabled = !isChecked ? 'kc-toggle-switch__on--disabled' : '';

  return (
    <label className={`kc-toggle-switch ${toggleSwitchDisabled}`}>
      <input
        type="checkbox"
        checked={isChecked}
        {...nativeProps}
      />
      <span className="kc-toggle-switch__slider" />
      <span className={`kc-toggle-switch__off ${labelOffDisabled}`}>OFF</span>
      <span className={`kc-toggle-switch__on ${labelOnDisabled}`}>ON</span>
    </label>
  );
}

ToggleSwitch.defaultProps = {
  disabled: false,
  checked: false,
};
