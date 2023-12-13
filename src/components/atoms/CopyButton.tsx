import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import RoundedButton, { RoundedButtonProps } from './RoundedButton';

export type CopyButtonProps = {
  valueToCopy: string;
} & Pick<RoundedButtonProps, 'size' | 'disabled'>
& ButtonHTMLAttributes<HTMLButtonElement>;

export default function CopyButton({
  valueToCopy,
  size,
  disabled = false,
  ...nativeProps
}: CopyButtonProps) {
  const DEFAULT_SIZE = 'medium';
  const [tooltipLabel, setTooltipLabel] = useState('Copy');

  useEffect(() => {
    if (tooltipLabel === 'Copied') {
      setTimeout(() => {
        setTooltipLabel('Copy');
      }, 3000);
    }
  }, [tooltipLabel]);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setTooltipLabel('Copied');
  };

  return (
    <RoundedButton
      iconName="fas fa-copy"
      model="neutral"
      size={size || DEFAULT_SIZE}
      disabled={disabled}
      tooltipLabel={disabled ? '' : tooltipLabel}
      onClick={() => copyToClipboard(valueToCopy)}
      {...nativeProps}
    />
  );
}
