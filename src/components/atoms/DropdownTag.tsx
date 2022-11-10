import React, { useState, useEffect, useRef } from 'react';
import { DropdownItem } from './Dropdown';
import { useActionOnClickOutside } from '../../common/custom-hooks';
import '../../styles/components/atoms/_dropdown_tag.scss';

export interface DropdownTagProps<T extends string> {
  values: DropdownItem<T>[];
  onChangeHandler: (value: T[]) => void;
  defaultLabel?: string;
  currentValues?: T[];
  disabled?: boolean;
}

export default function DropdownTag<T extends string>({
  values,
  currentValues,
  onChangeHandler,
  defaultLabel,
  disabled,
}: DropdownTagProps<T>) {
  const DEFAULT_DROPDOWN_LABEL = 'Pilih...';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [availableDropdownItems, setAvailableDropdownItems] = useState<DropdownItem<T>[]>([]);
  const [selectedDropdownItems, setSelectedDropdownItems] = useState<DropdownItem<T>[]>([]);

  const dropdownClose = isDropdownOpen ? '' : 'kc-dropdown-tag--close';
  const dropdownDisabled = disabled ? 'kc-dropdown-tag--disabled' : '';
  const dropdownVariant = [dropdownClose, dropdownDisabled].join(' ');

  const dropdownRef = useRef(null);
  useActionOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  useEffect(() => {
    if (!currentValues) {
      return;
    }

    const targetSelectedDropdownItems = values
      .filter(({ value }) => currentValues.includes(value));
    const targetAvailableDropdownItems = values
      .filter(({ value }) => !currentValues.includes(value));

    setSelectedDropdownItems(targetSelectedDropdownItems);
    setAvailableDropdownItems(targetAvailableDropdownItems);
  }, [values, currentValues, defaultLabel]);

  const onDropdownItemClick = (dropdownItem: DropdownItem<T>) => {
    const selectedDropdownItemsAfter = selectedDropdownItems.concat(dropdownItem);
    const selectedValues = selectedDropdownItemsAfter
      .map((selectedDropdownItem) => selectedDropdownItem.value);

    onChangeHandler(selectedValues);
    setIsDropdownOpen(false);
    setAvailableDropdownItems(availableDropdownItems.filter(({ id }) => id !== dropdownItem.id));
    setSelectedDropdownItems(selectedDropdownItems.concat(dropdownItem));
  };

  const onDropdownItemRemove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    setSelectedDropdownItems(
      selectedDropdownItems
        .filter((selectedDropdownItem) => selectedDropdownItem.id !== id),
    );
    setAvailableDropdownItems(
      availableDropdownItems.concat(values.filter((value) => value.id === id)),
    );
    setIsDropdownOpen(false);
  };

  const onToggleDropdown = () => {
    const height = document.querySelector('.kc-dropdown')?.clientHeight;
    const dropdownItems = document.querySelector('.kc-dropdown__items') as HTMLElement;
    dropdownItems.style.top = `${height}px`;
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderDropdownButtonIcon = () => (
    isDropdownOpen
      ? <i className="fas fa-angle-up" />
      : <i className="fas fa-angle-down" />
  );

  const renderDropdownButtonContent = () => (
    <div className="kc-dropdown-button__content" style={{ paddingBottom: selectedDropdownItems.length === 0 ? 0 : 5 }}>
      {selectedDropdownItems.length > 0 ? (
        selectedDropdownItems.map(({ id, label }) => (
          <div className={`kc-dropdown-tag__item ${disabled ? 'kc-dropdown-tag__item--disabled' : ''}`} key={id}>
            {label}
            <button
              type="button"
              className="kc-dropdown-tag__item__delete-btn"
              onClick={(e) => onDropdownItemRemove(e, id)}
              disabled={disabled}
            >
              <i className="fas fa-xmark" />
            </button>
          </div>
        ))
      ) : (
        <span className="kc-button-label">
          {defaultLabel || DEFAULT_DROPDOWN_LABEL}
        </span>
      )}
      <div className="kc-dropdown-button__icon">
        {renderDropdownButtonIcon()}
      </div>
    </div>
  );

  return (
    <div ref={dropdownRef} className={`kc-dropdown-tag ${dropdownVariant}`}>
      <button
        type="button"
        className="kc-dropdown-button kc-button-label"
        disabled={disabled}
        onClick={onToggleDropdown}
      >
        {renderDropdownButtonContent()}
      </button>
      {
        availableDropdownItems.length > 0 ? (
          <ul className="kc-dropdown__items">
            {
              availableDropdownItems.map((availableDropdownItem) => (
                <li className="kc-dropdown__item" key={availableDropdownItem.id}>
                  <button type="button" onClick={() => onDropdownItemClick(availableDropdownItem)}>
                    <span className="kc-body2">{availableDropdownItem.label}</span>
                  </button>
                </li>
              ))
            }
          </ul>
        ) : (
          <ul className="kc-dropdown__items">
            <li className="kc-dropdown__item--empty">
              <span className="kc-body2">Tidak ada pilihan tersedia</span>
            </li>
          </ul>
        )
      }
    </div>
  );
}

DropdownTag.defaultProps = {
  defaultLabel: '',
  currentValues: [],
  disabled: false,
};
