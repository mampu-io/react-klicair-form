/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../styles/components/atoms/_toggle_switch.scss';

export interface ToggleSwitchProps {
  disabled?: boolean;
  switchOn?: boolean;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ToggleSwitch({
  disabled,
  switchOn,
  onChangeHandler,
}: ToggleSwitchProps) {
  const toggleSwitchDisabled = disabled ? 'kc-toggle-switch--disabled' : '';
  const isSwitchOn = switchOn || false;
  const labelOffDisabled = isSwitchOn ? 'kc-toggle-switch__off--disabled' : '';
  const labelOnDisabled = !isSwitchOn ? 'kc-toggle-switch__on--disabled' : '';

  return (
    <label className={`kc-toggle-switch ${toggleSwitchDisabled}`}>
      <input
        type="checkbox"
        checked={isSwitchOn}
        onChange={onChangeHandler}
      />
      <span className="kc-toggle-switch__slider" />
      <span className={`kc-toggle-switch__off ${labelOffDisabled}`}>OFF</span>
      <span className={`kc-toggle-switch__on ${labelOnDisabled}`}>ON</span>
    </label>
  );
}

ToggleSwitch.defaultProps = {
  disabled: false,
  switchOn: false,
  onChangeHandler: () => {},
};
