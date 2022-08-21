import React, { useState, useEffect, useRef } from 'react';
import { useActionOnClickOutside } from '../../common/custom-hooks';
import '../../styles/components/atoms/_dropdown.scss';

export type DropdownItem<T extends string> = {
  id: string;
  value: T;
  label: string;
}

type DropdownCurrentValueProps<T extends string> = {
  defaultLabel: string;
  currentValue?: DropdownItem<T>;
} | {
  currentValue: DropdownItem<T>;
  defaultLabel?: string;
}

export type DropdownProps<T extends string> = {
  values: DropdownItem<T>[];
  onChangeHandler: (value: T) => void;
  width?: 'fixed' | 'fluid';
  disabled?: boolean;
} & DropdownCurrentValueProps<T>

export default function Dropdown<T extends string>({
  values,
  currentValue,
  onChangeHandler,
  defaultLabel,
  width,
  disabled,
}: DropdownProps<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCurrentValue, setDropdownCurrentValue] = useState<DropdownItem<T>>();
  const dropdownWidth = `kc-dropdown--${width}`;
  const dropdownClose = isDropdownOpen ? '' : 'kc-dropdown--close';
  const dropdownDisabled = disabled ? 'kc-dropdown--disabled' : '';
  const dropdownVariant = [dropdownWidth, dropdownClose, dropdownDisabled].join(' ');

  const dropdownRef = useRef(null);
  useActionOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  useEffect(() => {
    setDropdownCurrentValue(currentValue);
  }, [currentValue]);

  const onDropdownItemClick = (dropdownItem: DropdownItem<T>) => {
    onChangeHandler(dropdownItem.value);
    setIsDropdownOpen(false);
    setDropdownCurrentValue(dropdownItem);
  };

  const renderDropdownButtonContent = () => (
    <div className="kc-dropdown-button__content">
      <span className="kc-button-label">
        {dropdownCurrentValue ? dropdownCurrentValue.label : defaultLabel}
      </span>
      <div className="kc-dropdown-button__icon">
        {
          isDropdownOpen
            ? <i className="fas fa-angle-up" />
            : <i className="fas fa-angle-down" />
        }
      </div>
    </div>
  );

  return (
    <div ref={dropdownRef} className={`kc-dropdown ${dropdownVariant}`}>
      <button
        type="button"
        className="kc-dropdown-button kc-button-label"
        disabled={disabled}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {renderDropdownButtonContent()}
      </button>
      <ul className="kc-dropdown__items">
        {
          values.map((value) => (
            <li className="kc-dropdown__item" key={value.id}>
              <button type="button" onClick={() => onDropdownItemClick(value)}>
                <span className="kc-body2">{value.label}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Dropdown.defaultProps = {
  width: 'fixed',
  disabled: false,
};
