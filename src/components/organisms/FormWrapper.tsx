import React from 'react';
import Button from '../atoms/Button';
import '../../styles/components/organisms/_form_wrapper.scss';

export type FormWrapperProps = {
  onSubmitHandler: Function;
  children: React.ReactNode;
  submitLabel?: string;
  isSubmitButtonDisabled?: boolean;
  isSubmitButtonLoading?: boolean;
}

export default function FormWrapper({
  onSubmitHandler,
  children,
  submitLabel,
  isSubmitButtonDisabled,
  isSubmitButtonLoading,
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
        <Button
          label={String(submitLabel)}
          type="submit"
          disabled={isSubmitButtonDisabled}
          loading={isSubmitButtonLoading}
        />
      </div>
    </form>
  );
}

FormWrapper.defaultProps = {
  submitLabel: 'Submit',
  isSubmitButtonDisabled: false,
  isSubmitButtonLoading: false,
};
