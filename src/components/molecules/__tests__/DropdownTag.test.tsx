import React from 'react';
import {
  act,
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DropdownItem } from '../../atoms/Dropdown';
import DropdownTag, { DropdownTagProps } from '../DropdownTag';

describe('DropdownTag component', () => {
  /**
   * Test Cases:
   * - Should render dropdown tag in appropriate form
   * - The mechanism to choose multiple tags should work
   * - The mechanism to remove tag should work
   * - When all tags is choosen, the dropdown items should render appropriate
   *   message
   * - When defaultLabel is not set
   * - When the dropdown tag in disabled state, it should not be able
   *   to interact
   */
  const onChangeHandlerMock = jest.fn();

  const PROMOS = ['11.11 Sale', 'Diskon Akhir Tahun', 'Diskon Lebaran'];
  const DEFAULT_LABEL = '-- Pilih Tags --';
  const SELECTED_DROPDOWN_TAG_ITEM_INDEXES = [0, 2];
  const DEFAULT_DROPDOWN_LABEL = 'Pilih...';

  const dropdownItems: DropdownItem<string>[] = PROMOS.map((promo, i) => ({
    id: String(i),
    label: promo,
    value: promo,
  }));

  const selectedDropdownItems = SELECTED_DROPDOWN_TAG_ITEM_INDEXES
    .map((i) => dropdownItems[i]);

  const expectedCurrentValues = selectedDropdownItems.map(({ value }) => value);
  const selectedValues: string[] = [];

  const globalProps: DropdownTagProps<string> = {
    values: dropdownItems,
    currentValues: [],
    disabled: false,
    onChangeHandler: onChangeHandlerMock,
    defaultLabel: DEFAULT_LABEL,
  };

  afterEach(() => {
    onChangeHandlerMock.mockReset();
    cleanup();
  });

  test('Should render dropdown tag in appropriate form', () => {
    render(<DropdownTag {...globalProps} />);
    const dropdownTag = screen.getAllByRole('button')[0];
    expect(dropdownTag).toBeDefined();
    expect(dropdownTag.parentElement).toHaveClass('kc-dropdown-tag kc-dropdown-tag--close');
    expect(dropdownTag.parentElement).not.toHaveClass('kc-dropdown-tag--disabled');
    expect(dropdownTag).toHaveClass('kc-dropdown-button kc-button-label');

    const dropdownTagLabel = dropdownTag
      .querySelector('.kc-dropdown-button__content span.kc-button-label') as HTMLElement;
    expect(dropdownTagLabel.textContent).toEqual(DEFAULT_LABEL);

    const dropdownTagIcon = dropdownTag
      .querySelector('.kc-dropdown-button__content .kc-dropdown-button__icon i') as HTMLElement;
    expect(dropdownTagIcon).toHaveClass('fas fa-angle-down');

    act(() => { fireEvent.click(dropdownTag); });
    expect(dropdownTagIcon).toHaveClass('fas fa-angle-up');
    expect(dropdownTag.parentElement).not.toHaveClass('kc-dropdown-tag--close');

    act(() => { fireEvent.click(dropdownTag); });
    expect(dropdownTagIcon).toHaveClass('fas fa-angle-down');
    expect(dropdownTag.parentElement).toHaveClass('kc-dropdown-tag--close');
  });

  test('The mechanism to choose multiple tags should work', () => {
    render(<DropdownTag {...globalProps} />);
    const dropdownTag = screen.getAllByRole('button')[0];
    const dropdownTagOptionsContainer = dropdownTag.nextElementSibling as HTMLElement;
    const dropdownTagOptions = dropdownTagOptionsContainer
      .querySelectorAll('.kc-dropdown__item button');
    const dropdownTagIcon = dropdownTag
      .querySelector('.kc-dropdown-button__content .kc-dropdown-button__icon i') as HTMLElement;

    SELECTED_DROPDOWN_TAG_ITEM_INDEXES.forEach((i) => {
      act(() => { fireEvent.click(dropdownTag); });
      act(() => { fireEvent.click(dropdownTagOptions[i]); });
      selectedValues.push(expectedCurrentValues[i]);
      expect(dropdownTagIcon).toHaveClass('fas fa-angle-down');
      expect(dropdownTag.parentElement).toHaveClass('kc-dropdown-tag--close');
      expect(onChangeHandlerMock).toHaveBeenCalledWith(selectedValues);
    });

    const selectedDropdownTags = Array.from(dropdownTag
      .querySelectorAll('kc-tag'));

    selectedDropdownTags.forEach((selectedDropdownTag, i) => {
      expect(selectedDropdownTag.textContent)
        .toEqual(selectedDropdownItems[i].label);
    });
  });

  test('The mechanism to remove tag should work', () => {
    render(<DropdownTag {...globalProps} currentValues={expectedCurrentValues} />);
    const dropdownTag = screen.getAllByRole('button')[0];
    const dropdownTagItemsContainer = dropdownTag.nextElementSibling as HTMLElement;
    const removeTagButtons = Array.from(dropdownTag
      .querySelectorAll('.kc-tag__remove-btn'));

    removeTagButtons.forEach((removeTagButton, i) => {
      act(() => { fireEvent.click(removeTagButton); });
      const dropdownItemLabels = Array
        .from(dropdownTagItemsContainer.querySelectorAll('.kc-dropdown__item button'))
        .map((dropdownItem) => dropdownItem.textContent as string);
      const tagItemLabels = Array
        .from(dropdownTag.querySelectorAll('kc-tag'))
        .map((tagItem) => tagItem.textContent as string);
      expect(dropdownItemLabels).toContain(expectedCurrentValues[i]);
      expect(tagItemLabels).not.toContain(expectedCurrentValues[i]);
    });
  });

  test(`When all tags is choosen, the dropdown items should render appropriate
    message`, () => {
    const WARNING = 'Tidak ada pilihan tersedia';
    const currentValues = dropdownItems.map(({ value }) => value);
    render(<DropdownTag {...globalProps} currentValues={currentValues} />);
    const dropdownTag = screen.getAllByRole('button')[0];
    const dropdownTagItemsContainer = dropdownTag.nextElementSibling as HTMLElement;

    act(() => { fireEvent.click(dropdownTag); });
    const dropdownTagItemEmpty = dropdownTagItemsContainer
      .querySelector('li.kc-dropdown__item--empty') as HTMLElement;
    expect(dropdownTagItemEmpty.textContent).toEqual(WARNING);
  });

  test('When defaultLabel is not set', () => {
    render(<DropdownTag {...globalProps} defaultLabel={undefined} />);
    const dropdownTag = screen.getAllByRole('button')[0];
    const dropdownTagLabel = dropdownTag
      .querySelector('.kc-dropdown-button__content .kc-button-label') as HTMLElement;
    expect(dropdownTagLabel.textContent).toEqual(DEFAULT_DROPDOWN_LABEL);
  });

  test(`When the dropdown tag in disabled state, it should not be able
    to interact`, () => {
    render(<DropdownTag {...globalProps} currentValues={expectedCurrentValues} disabled />);
    const dropdownTag = screen.getAllByRole('button')[0];
    const dropdownTagIcon = dropdownTag
      .querySelector('.kc-dropdown-button__content .kc-dropdown-button__icon i') as HTMLElement;

    expect(dropdownTag.parentElement).toHaveClass('kc-dropdown-tag--disabled');

    act(() => { fireEvent.click(dropdownTag); });
    expect(dropdownTagIcon).toHaveClass('fas fa-angle-down');
    expect(dropdownTag.parentElement).toHaveClass('kc-dropdown-tag--close');
  });
});
