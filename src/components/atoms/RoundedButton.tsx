import React, { ButtonHTMLAttributes } from 'react';

export type RoundedButtonProps = {
  iconName: string,
  model?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  tooltipLabel?: string;
  tooltipAlign?: 'left' | 'right';
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function RoundedButton({
  iconName,
  model,
  size,
  disabled,
  tooltipLabel,
  tooltipAlign,
  title,
  className,
  ...nativeProps
}: RoundedButtonProps) {
  const getClassName = () => {
    const roundedButtonModel = `kc-rounded-button--${model}`;
    const roundedButtonSize = `kc-rounded-button--${size}`;
    const roundedButtonVariant = [roundedButtonModel, roundedButtonSize].join(' ');
    const result = className ? `kc-rounded-button ${roundedButtonVariant} ${className}` : `kc-rounded-button ${roundedButtonVariant}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const roundedButtonTooltipAlign = `kc-rounded-button__tooltip--${tooltipAlign}`;

  return (
    <div className={getClassName()} title={title}>
      <button type="button" disabled={disabled} {...nativeProps}>
        <div className="kc-rounded-button__content">
          <i className={iconName} />
        </div>
      </button>
      {tooltipLabel ? (
        <div className={`kc-rounded-button__tooltip ${roundedButtonTooltipAlign}`}>
          {tooltipLabel}
        </div>
      ) : null}
    </div>
  );
}

RoundedButton.defaultProps = {
  model: 'primary',
  size: 'medium',
  disabled: false,
  tooltipLabel: '',
  tooltipAlign: 'left',
  title: '',
};
