import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Dropdown, { DropdownItem, DropdownProps } from '../Dropdown';

describe('Dropdown component', () => {
  /**
   * Test Cases:
   * - With current value props is set, should render dropdown that have
   *   current value
   * - With default label props is set, should render dropdown that have
   *   default label
   * - When the dropdown is in disabled state, it should not be able to click
   *   and dropdown items should not appear
   * - When the dropdown is not in disabled state, it should be able to click
   *   and dropdown items should appear
   * - When one of the dropdown items is selected, the current value should
   *   be updated
   */
  const onChangeHandlerMock = jest.fn();

  const dropdownValues: DropdownItem<string>[] = [
    {
      id: '1',
      label: 'Male',
      value: 'male',
    },
    {
      id: '2',
      label: 'Female',
      value: 'female',
    },
  ];

  const globalProps: DropdownProps<string> = {
    values: dropdownValues,
    onChangeHandler: onChangeHandlerMock,
    defaultLabel: 'Choose Gender',
  };

  afterEach(() => {
    onChangeHandlerMock.mockReset();
    cleanup();
  });

  test(`With current value props is set, should render dropdown that have
    current value`, () => {
    render(<Dropdown {...globalProps} currentValue={dropdownValues[0]} />);
    const button = screen.getAllByRole('button')[0];
    expect(button).toBeDefined();
    expect(button.parentElement).toHaveClass('kc-dropdown kc-dropdown--fixed kc-dropdown--close');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('kc-dropdown-button kc-button-label');

    const buttonLabel = button.querySelector('.kc-dropdown-button__content span.kc-button-label');
    expect(buttonLabel?.textContent).toEqual(dropdownValues[0].label);
  });

  test(`With default label props is set, should render dropdown that have
    default label`, () => {
    render(<Dropdown {...globalProps} />);
    const button = screen.getAllByRole('button')[0];
    expect(button).toBeDefined();

    const buttonLabel = button.querySelector('.kc-dropdown-button__content span.kc-button-label');
    expect(buttonLabel?.textContent).toEqual(globalProps.defaultLabel);
  });

  test(`When the dropdown is in disabled state, it should not be able to click
    and dropdown items should not appear`, async () => {
    render(<Dropdown {...globalProps} disabled />);
    const button = screen.getAllByRole('button')[0];
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(button.parentElement).toHaveClass('kc-dropdown--close');
  });

  test(`When the dropdown is not in disabled state, it should be able to click
    and dropdown items should appear`, async () => {
    render(<Dropdown {...globalProps} />);
    const button = screen.getAllByRole('button')[0];
    const buttonIcon = button.querySelector('.kc-dropdown-button__content div.kc-dropdown-button__icon i');
    expect(buttonIcon).toHaveClass('fas fa-angle-down');

    await userEvent.click(button);
    expect(button.parentElement).not.toHaveClass('kc-dropdown--close');
    expect(buttonIcon).toHaveClass('fas fa-angle-up');

    const dropdownItemsContainer = button.nextElementSibling;
    const dropdownItems = dropdownItemsContainer?.querySelectorAll('li.kc-dropdown__item');
    dropdownItems?.forEach((dropdownItem, i) => {
      const dropdownItemLabel = dropdownItem.querySelector('button span.kc-body2');
      expect(dropdownItemLabel?.textContent).toEqual(dropdownValues[i].label);
    });
  });

  test(`When one of the dropdown items is selected, the current value should
    be updated`, async () => {
    render(<Dropdown {...globalProps} />);
    const button = screen.getAllByRole('button')[0];
    await userEvent.click(button);

    const dropdownItemsContainer = button.nextElementSibling;
    const dropdownItemButton = dropdownItemsContainer?.querySelector('li.kc-dropdown__item button');
    if (!dropdownItemButton) throw new Error('button is not rendered');
    await userEvent.click(dropdownItemButton);

    const buttonLabel = button.querySelector('.kc-dropdown-button__content span.kc-button-label');
    expect(onChangeHandlerMock).toHaveBeenCalledTimes(1);
    expect(buttonLabel?.textContent).toEqual(dropdownValues[0].label);
    expect(button.parentElement).toHaveClass('kc-dropdown--close');
  });
});
