import React, { HTMLAttributes } from 'react';
import RecordItem, { RecordItemProps } from '../molecules/RecordItem';

type RecordData = Omit<RecordItemProps, 'direction'>

export interface RecordTableProps extends HTMLAttributes<HTMLDivElement> {
  records: RecordData[];
  direction?: 'horizontal' | 'vertical';
}

export default function RecordTable({
  records,
  direction,
  className,
  ...nativeProps
}: RecordTableProps) {
  const getClassName = () => {
    const result = className ? `kc-record-table ${className}` : 'kc-record-table';
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return direction === 'horizontal' ? (
    <table className={getClassName()} {...nativeProps}>
      <tbody>
        {records.map(({ label, value, children }, i) => (
          <tr key={`record-item-${i + 1}`}>
            <td className="kc-record-table__label">
              <span className="kc-body1">{label}</span>
            </td>
            <td className="kc-record-table__value">
              { children || <span className="kc-body1 kc-typo-bold">{value}</span> }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className={getClassName()} {...nativeProps}>
      {records.map(({ label, value, children }, i) => (
        <RecordItem
          key={`record-item-${i + 1}`}
          label={label}
          value={value}
          direction="vertical"
        >
          {children}
        </RecordItem>
      ))}
    </div>
  );
}

RecordTable.defaultProps = {
  direction: 'horizontal',
};
