import React, { HTMLAttributes } from 'react';
import Label from '../atoms/Label';

export interface RecordItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: string;
  direction?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

export default function RecordItem({
  label,
  value,
  direction,
  children,
  className,
  ...nativeProps
}: RecordItemProps) {
  const getClassName = () => {
    const recordItemDirection = `kc-record-item-new--${direction}`;
    const result = className ? `kc-record-item-new ${recordItemDirection} ${className}` : `kc-record-item-new ${recordItemDirection}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <div className={getClassName()} {...nativeProps}>
      <Label value={label} important={false} />
      <div className="kc-record-item-new__value">
        {children || <Label value={value || ''} />}
      </div>
    </div>
  );
}

RecordItem.defaultProps = {
  value: '',
  direction: 'horizontal',
  children: null,
};
