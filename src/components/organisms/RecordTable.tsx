import React from 'react';
import RecordItem, { RecordItemProps } from '../molecules/RecordItem';

type RecordData = Omit<RecordItemProps, 'direction'>

export interface RecordTableProps {
  records: RecordData[];
  direction?: 'horizontal' | 'vertical';
}

export default function RecordTable({
  records,
  direction,
}: RecordTableProps) {
  return direction === 'horizontal' ? (
    <table className="kc-record-table">
      <tbody>
        {records.map(({ label, value, children }) => (
          <tr>
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
    <div className="kc-record-table">
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
