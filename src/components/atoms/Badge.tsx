import React from 'react';

export interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <div className="kc-badge">
      <span className="kc-body2 kc-typo-bold">
        {label}
      </span>
    </div>
  );
}
