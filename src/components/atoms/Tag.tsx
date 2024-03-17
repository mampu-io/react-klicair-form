import React, { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  disabled?: boolean;
  onRemove: () => void;
}

export default function Tag({
  label,
  disabled = false,
  onRemove,
  className,
  ...nativeProps
}: TagProps) {
  const getClassName = () => {
    const tagDisabled = disabled ? 'kc-tag--disabled' : '';
    const result = className ? `kc-tag ${tagDisabled} ${className}` : `kc-tag ${tagDisabled}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const onClickRemoveButtonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div className={getClassName()} {...nativeProps}>
      <div className="kc-tag__label" title={label}>{label}</div>
      <button
        type="button"
        className="kc-tag__remove-btn"
        onClick={(e) => onClickRemoveButtonHandler(e)}
        disabled={disabled}
        title="Hapus Tag"
      >
        <i className="fas fa-xmark" />
      </button>
    </div>
  );
}
