import React from 'react';
import Label from '../atoms/Label';

export interface RecordItemProps {
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
}: RecordItemProps) {
  const recordItemDirection = `kc-record-item--${direction}`;

  return (
    <div className={`kc-record-item ${recordItemDirection}`.trim()}>
      <Label value={label} important={false} />
      <div className="kc-record-item__value">
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
