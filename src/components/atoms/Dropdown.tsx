/* eslint-disable no-unused-expressions */
import React, {
  HTMLAttributes,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useActionOnClickOutside } from '../../common/custom-hooks';

export type DropdownItem<T extends string> = {
  id: string;
  value: T;
  label: string;
};

type DropdownCurrentValueProps<T extends string> = {
  defaultLabel: string;
  currentValue?: T;
} | {
  currentValue: T;
  defaultLabel?: string;
};

type DropdownGenericProps<T extends string> = {
  values: DropdownItem<T>[];
  onChangeHandler: (value: T) => void;
  width?: 'fixed' | 'fluid';
  disabled?: boolean;
  position?: 'top' | 'bottom';
  isSearchActive?: boolean;
};

export type DropdownProps<T extends string> = DropdownGenericProps<T>
  & DropdownCurrentValueProps<T>
  & HTMLAttributes<HTMLDivElement>;

export default function Dropdown<T extends string>({
  values,
  currentValue,
  onChangeHandler,
  defaultLabel,
  width = 'fixed',
  disabled = false,
  position = 'bottom',
  isSearchActive = false,
  className,
  ...nativeProps
}: DropdownProps<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCurrentValue, setDropdownCurrentValue] = useState<DropdownItem<T>>();
  const [dropdownLabel, setDropdownLabel] = useState(defaultLabel);
  const [searchKeyword, setSearchKeyword] = useState('');

  const getClassName = () => {
    const dropdownWidth = `kc-dropdown--${width}`;
    const dropdownClose = isDropdownOpen ? '' : 'kc-dropdown--close';
    const dropdownDisabled = disabled ? 'kc-dropdown--disabled' : '';
    const dropdownPosition = `kc-dropdown--${position}`;
    const dropdownVariant = [dropdownWidth, dropdownClose, dropdownDisabled, dropdownPosition].join(' ');
    const result = className ? `kc-dropdown ${dropdownVariant} ${className}` : `kc-dropdown ${dropdownVariant}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  const dropdownRef = useRef(null);
  useActionOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  useEffect(() => {
    if (!currentValue) {
      setDropdownLabel(defaultLabel);
    }

    const target = values.find((each) => each.value === currentValue);
    if (!target) return;
    setDropdownCurrentValue(target);
  }, [values, currentValue, defaultLabel]);

  useEffect(() => {
    if (!dropdownCurrentValue) return;
    setDropdownLabel(dropdownCurrentValue.label);
  }, [dropdownCurrentValue]);

  const onDropdownItemClick = (dropdownItem: DropdownItem<T>) => {
    onChangeHandler(dropdownItem.value);
    setIsDropdownOpen(false);
    setDropdownCurrentValue(dropdownItem);
    isSearchActive && setSearchKeyword(dropdownItem.label);
  };

  const renderDropdownButtonIcon = () => {
    if (position === 'bottom') {
      return isDropdownOpen
        ? <i className="fas fa-angle-up" />
        : <i className="fas fa-angle-down" />;
    }

    return isDropdownOpen
      ? <i className="fas fa-angle-down" />
      : <i className="fas fa-angle-up" />;
  };

  const renderDropdownButtonContent = () => (
    <div className="kc-dropdown-button__content">
      {isSearchActive ? (
        <input
          type="text"
          placeholder={dropdownLabel}
          disabled={disabled}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(true); }}
        />
      ) : (
        <span className="kc-button-label">
          {dropdownLabel}
        </span>
      )}
      <div className="kc-dropdown-button__icon">
        {renderDropdownButtonIcon()}
      </div>
    </div>
  );

  const filteredValues = searchKeyword !== ''
    ? values.filter((value) => value.label.toLowerCase().includes(searchKeyword.toLowerCase()))
    : values;

  return (
    <div ref={dropdownRef} className={getClassName()} {...nativeProps}>
      <button
        type="button"
        className="kc-dropdown-button kc-button-label"
        disabled={disabled}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {renderDropdownButtonContent()}
      </button>
      {filteredValues.length > 0 ? (
        <ul className="kc-dropdown__items">
          {filteredValues.map((value) => (
            <li className="kc-dropdown__item" key={value.id}>
              <button type="button" onClick={() => onDropdownItemClick(value)}>
                <span className="kc-body2">{value.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
