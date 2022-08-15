import React, { ButtonHTMLAttributes } from 'react';
import '../../styles/components/atoms/_rounded_button.scss';

export type RoundedButtonProps = {
  iconName: string,
  model?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function RoundedButton({
  iconName,
  model,
  size,
  disabled,
  ...nativeProps
}: RoundedButtonProps) {
  const roundedButtonModel = `kc-rounded-button--${model}`;
  const roundedButtonSize = `kc-rounded-button--${size}`;
  const roundedButtonVariant = [roundedButtonModel, roundedButtonSize].join(' ');

  return (
    <button
      type="button"
      className={`kc-rounded-button ${roundedButtonVariant}`}
      disabled={disabled}
      {...nativeProps}
    >
      <div className="kc-rounded-button__content">
        <i className={iconName} />
      </div>
    </button>
  );
}

RoundedButton.defaultProps = {
  model: 'primary',
  size: 'medium',
  disabled: false,
};
