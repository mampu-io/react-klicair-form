import React from 'react';

export interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="kc-tag">
      <span className="kc-body2 kc-typo-bold">
        {label}
      </span>
    </div>
  );
}
