import React from 'react';
import Button from '../atoms/Button';
import '../../styles/components/organisms/_form_wrapper.scss';

export type FormWrapperProps = {
  onSubmitHandler: Function;
  children: React.ReactNode;
  submitLabel?: string;
}

export default function FormWrapper({
  onSubmitHandler,
  children,
  submitLabel,
}: FormWrapperProps) {
  return (
    <form
      className="kc-form-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}
    >
      {children}
      <div className="kc-form-wrapper__submit-btn">
        <Button label={String(submitLabel)} type="submit" />
      </div>
    </form>
  );
}

FormWrapper.defaultProps = {
  submitLabel: 'Submit',
};
