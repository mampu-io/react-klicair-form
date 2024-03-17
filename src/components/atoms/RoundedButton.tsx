import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';

export type RoundedButtonProps = {
  iconName: string,
  model?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  tooltipLabel?: string;
  tooltipAlign?: PlacesType;
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function RoundedButton({
  iconName,
  model = 'primary',
  size = 'medium',
  disabled = false,
  tooltipLabel,
  tooltipAlign = 'bottom',
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

  const tooltipId = `${Math.floor(Math.random() * 100_000_000)}`;
  const tooltipProps: HTMLAttributes<HTMLButtonElement> = {
    'data-tooltip-id': tooltipId,
    'data-tooltip-content': tooltipLabel,
    'data-tooltip-place': tooltipAlign,
  };

  return (
    <div className={getClassName()} title={title}>
      <button type="button" disabled={disabled} {...tooltipProps} {...nativeProps}>
        <div className="kc-rounded-button__content">
          <i className={iconName} />
        </div>
      </button>
      {tooltipLabel ? <Tooltip id={tooltipId} className="kc-rounded-button__tooltip" /> : null}
    </div>
  );
}
