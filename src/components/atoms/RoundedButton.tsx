import React, { ButtonHTMLAttributes } from 'react';
import '../../styles/components/atoms/_rounded_button.scss';

export type RoundedButtonProps = {
  iconName: string,
  model?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  tooltipLabel?: string;
  tooltipAlign?: 'left' | 'right';
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function RoundedButton({
  iconName,
  model,
  size,
  disabled,
  tooltipLabel,
  tooltipAlign,
  ...nativeProps
}: RoundedButtonProps) {
  const roundedButtonModel = `kc-rounded-button--${model}`;
  const roundedButtonSize = `kc-rounded-button--${size}`;
  const roundedButtonVariant = [roundedButtonModel, roundedButtonSize].join(' ');
  const roundedButtonTooltipAlign = `kc-rounded-button__tooltip--${tooltipAlign}`;

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
      {
        tooltipLabel ? (
          <div className={`kc-rounded-button__tooltip ${roundedButtonTooltipAlign}`}>
            {tooltipLabel}
          </div>
        ) : null
      }
    </button>
  );
}

RoundedButton.defaultProps = {
  model: 'primary',
  size: 'medium',
  disabled: false,
  tooltipLabel: '',
  tooltipAlign: 'left',
};
