import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import RoundedButton from '../RoundedButton';

describe('RoundedButton component', () => {
  /**
   * Test Cases:
   * - With default props, should render primary medium rounded button with
   *   non-disabled state
   * - When button in disabled state, should not be able to click
   * - When model and size prop is defined
   * - When button is clicked, onClick handler should be called
   */
  const onClickMock = jest.fn();
  const globalProps = {
    iconName: 'fas fa-xmark',
    onClick: onClickMock,
  };

  afterEach(() => {
    onClickMock.mockReset();
    cleanup();
  });

  test(`With default props, should render primary medium rounded button with
    non-disabled state`, () => {
    render(<RoundedButton {...globalProps} />);
    const button = screen.getByRole('button');
    const buttonIcon = button.querySelector('.kc-rounded-button__content i');

    expect(button).toBeDefined();
    expect(buttonIcon).toHaveClass('fas fa-xmark');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('kc-rounded-button kc-rounded-button--primary kc-rounded-button--medium');
  });

  test('When button in disabled state, should not be able to click', () => {
    render(<RoundedButton {...globalProps} disabled />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClickMock).toBeCalledTimes(0);
  });

  test('When model and size prop is defined', () => {
    render(<RoundedButton {...globalProps} model="secondary" size="small" />);
    const button = screen.getByRole('button');

    expect(button).toBeDefined();
    expect(button).toHaveClass('kc-rounded-button kc-rounded-button--small kc-rounded-button--secondary');
  });

  test('When button is clicked, onClick handler should be called', async () => {
    render(<RoundedButton {...globalProps} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClickMock.mock.calls).toHaveLength(1);
  });
});
