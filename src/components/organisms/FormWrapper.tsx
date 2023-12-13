import React, { FormHTMLAttributes } from 'react';
import Button from '../atoms/Button';

export type FormWrapperProps = {
  onSubmitHandler: Function;
  children: React.ReactNode;
  submitLabel?: string;
  isSubmitButtonDisabled?: boolean;
  isSubmitButtonLoading?: boolean;
} & FormHTMLAttributes<HTMLFormElement>;

export default function FormWrapper({
  onSubmitHandler,
  children,
  submitLabel,
  isSubmitButtonDisabled,
  isSubmitButtonLoading,
  className,
  ...nativeProps
}: FormWrapperProps) {
  const getClassName = () => {
    const result = className ? `kc-form-wrapper ${className}` : 'kc-form-wrapper';
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <form
      className={getClassName()}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}
      {...nativeProps}
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
