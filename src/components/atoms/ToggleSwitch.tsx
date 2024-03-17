/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes } from 'react';

export interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  switchOn?: boolean;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ToggleSwitch({
  disabled = false,
  switchOn = false,
  onChangeHandler,
  className,
  ...nativeProps
}: ToggleSwitchProps) {
  const getClassName = () => {
    const toggleSwitchDisabled = disabled ? 'kc-toggle-switch--disabled' : '';
    const result = className ? `kc-toggle-switch ${toggleSwitchDisabled} ${className}` : `kc-toggle-switch ${toggleSwitchDisabled}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const labelOffDisabled = switchOn ? 'kc-toggle-switch__off--disabled' : '';
  const labelOnDisabled = !switchOn ? 'kc-toggle-switch__on--disabled' : '';

  return (
    <label className={getClassName()}>
      <input
        type="checkbox"
        checked={switchOn}
        onChange={onChangeHandler}
        disabled={disabled}
        {...nativeProps}
      />
      <span className="kc-toggle-switch__slider" />
      <span className={`kc-toggle-switch__off ${labelOffDisabled}`.trim()}>OFF</span>
      <span className={`kc-toggle-switch__on ${labelOnDisabled}`.trim()}>ON</span>
    </label>
  );
}
