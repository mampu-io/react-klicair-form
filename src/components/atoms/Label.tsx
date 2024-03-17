import React, { LabelHTMLAttributes } from 'react';

export type LabelProps = {
  value: string;
  important?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  value,
  important = true,
  htmlFor,
  className,
  ...nativeProps
}: LabelProps) {
  const getClassName = () => {
    const labelImportant = important ? ' kc-typo-bold' : '';
    const result = className ? `kc-body1 ${labelImportant} ${className}` : `kc-body1 ${labelImportant}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <label className={getClassName()} htmlFor={htmlFor} {...nativeProps}>
      {value}
    </label>
  );
}
