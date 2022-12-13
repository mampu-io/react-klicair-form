import React from 'react';

export interface TagProps {
  label: string;
  disabled?: boolean;
  onRemove: () => void;
}

export default function Tag({ label, disabled, onRemove }: TagProps) {
  const onClickRemoveButtonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div className={`kc-tag ${disabled ? 'kc-tag--disabled' : ''}`}>
      <div className="kc-tag__label" title={label}>
        {label}
      </div>
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

Tag.defaultProps = {
  disabled: false,
};
