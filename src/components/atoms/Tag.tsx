import React from 'react';
import '../../styles/components/atoms/_tag.scss';

export interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="kc-notification-tag">
      <span className="kc-body2 kc-typo-bold">
        {label}
      </span>
    </div>
  );
}
