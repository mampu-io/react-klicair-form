import React from 'react';
import Label from '../atoms/Label';

export type FormGroupProps = {
  label: string,
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

export default function FormGroup({
  label,
  direction,
  children,
}: FormGroupProps) {
  const formGroupDirection = `kc-form-group--${direction}`;

  return (
    <div className={`kc-form-group ${formGroupDirection}`}>
      <div className="kc-form-group__label">
        <Label value={label} />
      </div>
      {children}
    </div>
  );
}

FormGroup.defaultProps = {
  direction: 'horizontal',
};
