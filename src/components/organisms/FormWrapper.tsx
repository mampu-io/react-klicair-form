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
  submitLabel = 'Submit',
}: FormWrapperProps) {
  return (
    <form className="kc-form-wrapper" onSubmit={() => onSubmitHandler()}>
      {children}
      <div className="kc-form-wrapper__submit-btn">
        <Button label={submitLabel} type="submit" />
      </div>
    </form>
  );
}

FormWrapper.defaultProps = {
  submitLabel: 'Submit',
};
