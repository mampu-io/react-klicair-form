import React, { useEffect, useState } from 'react';
import RoundedButton, { RoundedButtonProps } from './RoundedButton';

export type CopyButtonProps = {
  valueToCopy: string;
} & Pick<RoundedButtonProps, 'size' | 'disabled'>;

export default function CopyButton({
  valueToCopy,
  size = 'medium',
  disabled = false,
}: CopyButtonProps) {
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
      size={size}
      disabled={disabled}
      tooltipLabel={disabled ? '' : tooltipLabel}
      onClick={() => copyToClipboard(valueToCopy)}
    />
  );
}
