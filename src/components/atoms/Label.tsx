import React, { LabelHTMLAttributes } from 'react';

export type LabelProps = {
  value: string;
  important?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({
  value,
  important,
  htmlFor,
  ...nativeProps
}: LabelProps) {
  const labelImportant = important ? ' kc-typo-bold' : '';

  return (
    <label className={`kc-body1${labelImportant}`} htmlFor={htmlFor} {...nativeProps}>
      {value}
    </label>
  );
}

Label.defaultProps = {
  important: true,
};
