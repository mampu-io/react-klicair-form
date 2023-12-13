import React, { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export default function Badge({ label, className, ...nativeProps }: BadgeProps) {
  const getClassName = () => {
    const result = className ? `kc-badge ${className}` : 'kc-badge';
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <div className={getClassName()} {...nativeProps}>
      <span className="kc-body2 kc-typo-bold">
        {label}
      </span>
    </div>
  );
}
