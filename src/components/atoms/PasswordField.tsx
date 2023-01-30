import React, { useState, InputHTMLAttributes } from 'react';
import InputField, { InputFieldProps } from './InputField';

export type PasswordFieldProps = Pick<InputFieldProps, 'placeholder'
  | 'width'
  | '_size'
  | 'title'
  | 'subtitle'
  | 'disabled'
  | 'isError'> & InputHTMLAttributes<HTMLInputElement>;

export default function PasswordField({
  placeholder,
  width,
  _size,
  title,
  subtitle,
  disabled,
  isError,
  ...nativeProps
}: PasswordFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <InputField
      placeholder={placeholder}
      width={width}
      _size={_size}
      title={title}
      subtitle={subtitle}
      disabled={disabled}
      isError={isError}
      type={isPasswordVisible ? 'text' : 'password'}
      iconButtonName={isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'}
      onClickIconButton={() => setIsPasswordVisible(!isPasswordVisible)}
      {...nativeProps}
    />
  );
}
