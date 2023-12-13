import React, { useState } from 'react';
import InputField, { InputFieldProps } from '../atoms/InputField';
import Tag from '../atoms/Tag';

export type InputTagProps = InputFieldProps & {
  values: string[];
  onAddValue: (value: string) => void;
  onRemoveValue: (value: string) => void;
  disabled?: boolean;
  dataTest?: string;
};

export default function InputTag({
  values,
  onAddValue,
  onRemoveValue,
  disabled,
  width,
  dataTest,
  className,
  ...nativeProps
}: InputTagProps) {
  const [enteredValue, setEnteredValue] = useState('');

  const getClassName = () => {
    const inputTagWidth = `kc-input-tag--${width}`;
    const result = className ? `kc-input-tag ${inputTagWidth} ${className}` : `kc-input-tag ${inputTagWidth}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return;
    onAddValue(enteredValue);
    setEnteredValue('');
  };

  return (
    <div className={getClassName()} data-test={dataTest}>
      {values.length > 0 ? (
        <div className="kc-input-tag__values">
          {values.map((value, i) => (
            <Tag
              key={`input-value-${i + 1}`}
              label={value}
              disabled={disabled}
              onRemove={() => onRemoveValue(value)}
            />
          ))}
        </div>
      ) : null}
      <InputField
        width="fluid"
        value={enteredValue}
        disabled={disabled}
        onChange={(e) => setEnteredValue(e.target.value)}
        onKeyDown={(e) => onKeyDownHandler(e)}
        {...nativeProps}
      />
    </div>
  );
}

InputTag.defaultProps = {
  disabled: false,
  dataTest: '',
};
