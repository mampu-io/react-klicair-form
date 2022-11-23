import React, { TextareaHTMLAttributes } from 'react';

export type TextAreaProps = {
  placeholder: string,
  width?: 'fixed' | 'fluid';
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  isError?: boolean;
  resizeable?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({
  placeholder,
  width,
  title,
  subtitle,
  disabled,
  isError,
  resizeable,
  ...nativeProps
}: TextAreaProps) {
  const textAreaDisable = disabled ? 'kc-textarea--disabled' : '';
  const textAreaError = !disabled && isError ? 'kc-textarea--error' : '';
  const textAreaWidth = `kc-textarea--${width}`;
  const textAreaResizeable = resizeable ? 'kc-textarea--resizeable' : '';
  const textAreaVariant = [textAreaResizeable, textAreaDisable, textAreaError, textAreaWidth].join(' ');

  return (
    <div className={`kc-textarea ${textAreaVariant}`}>
      {
        title ? (
          <div className="kc-textarea__title">
            <span className="kc-caption">{title}</span>
          </div>
        ) : null
      }
      <div className="kc-textarea__box">
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          {...nativeProps}
        />
      </div>
      {
        subtitle ? (
          <div className="kc-textarea__subtitle">
            <span className="kc-overline">{subtitle}</span>
          </div>
        ) : null
      }
    </div>
  );
}

TextArea.defaultProps = {
  width: 'fixed',
  title: '',
  subtitle: '',
  disabled: false,
  isError: false,
  resizeable: true,
};
