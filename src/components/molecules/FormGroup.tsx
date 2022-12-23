import React from 'react';
import Label from '../atoms/Label';

export type FormGroupProps = {
  label: string,
  direction?: 'horizontal' | 'vertical';
  note?: string;
  isRequired?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function FormGroup({
  label,
  direction,
  note,
  isRequired,
  disabled,
  children,
}: FormGroupProps) {
  const formGroupDirection = `kc-form-group--${direction}`;
  const formGroupWithNote = note ? 'kc-form-group--with-note' : '';
  const formGroupDisabled = disabled ? 'kc-form-group--disabled' : '';
  const formGroupVariant = [formGroupDirection, formGroupWithNote, formGroupDisabled].join(' ');

  return (
    <div className={`kc-form-group ${formGroupVariant}`.trim()}>
      <div className="kc-form-group__identity">
        <div className="kc-form-group__label">
          <Label value={label} />
          {isRequired ? <span className="kc-form-group__is-required">*</span> : null}
        </div>
        {note ? <span className="kc-form-group__note kc-overline">{note}</span> : null}
      </div>
      {children}
    </div>
  );
}

FormGroup.defaultProps = {
  direction: 'horizontal',
  note: '',
  isRequired: false,
  disabled: false,
};
