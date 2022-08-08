import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button component', () => {
  /**
   * Test Cases:
   * - With default props, should render primary short button with non-disabled
   *   and non-loading state
   * - When button in disabled state, should not be able to click
   * - When button in loading state, should be disabled and display
   *   spinner animation
   * - When model and size prop is defined
   * - When create button with icon
   * - When button is clicked, onClick handler should be called
   */
  afterEach(cleanup);

  test(`With default props, should render primary short button with non-disabled
    and non-loading state`, () => {
    render(<Button label="Login" />);
    const button = screen.getByRole('button');

    expect(button).toBeDefined();
    expect(button.textContent).toEqual('Login');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('kc-button kc-button--short kc-button--primary');
  });

  test('When button in disabled state, should not be able to click', () => {
    const onClickMock = jest.fn();
    render(<Button label="Login" disabled onClick={onClickMock} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClickMock).toBeCalledTimes(0);
  });

  test(`When button in loading state, should be disabled and display spinner 
    animation`, () => {
    const onClickMock = jest.fn();
    render(<Button label="Login" loading onClick={onClickMock} />);
    const button = screen.getByRole('button');
    const spinner = button.querySelector('.spinner-border');
    userEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveClass('kc-button kc-button--loading');
    expect(onClickMock).toBeCalledTimes(0);
    expect(spinner).toBeDefined();
  });

  test('When model and size prop is defined', () => {
    render(<Button label="Login" model="secondary" size="fluid" />);
    const button = screen.getByRole('button');

    expect(button).toBeDefined();
    expect(button).toHaveClass('kc-button kc-button--fluid kc-button--secondary');
  });

  test('When create button with icon', () => {
    render(<Button label="Login" withIcon iconName="fas fa-add" />);
    const button = screen.getByRole('button');
    const buttonIcon = button.querySelector('.kc-button--icon');

    expect(buttonIcon).toBeDefined();
    expect(buttonIcon).toHaveClass('fas fa-add');
  });

  test('When button is clicked, onClick handler should be called', async () => {
    const onClickMock = jest.fn();
    render(<Button label="Login" onClick={onClickMock} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClickMock.mock.calls).toHaveLength(1);
  });
});
