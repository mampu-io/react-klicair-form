import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import PasswordField from '../PasswordField';

describe('PasswordField component', () => {
  /**
   * Test Cases:
   * - Should have proper mechanism to show and hide password
   */
  afterEach(cleanup);

  test('Should have proper mechanism to show and hide password', async () => {
    render(<PasswordField placeholder="example" />);
    const passwordField = document.querySelector('input') as HTMLInputElement;
    const togglePasswordButton = screen.getByRole('button');
    const togglePasswordIcon = togglePasswordButton.querySelector('i');

    expect(passwordField.type).toEqual('password');
    expect(togglePasswordButton).toBeTruthy();
    expect(togglePasswordIcon).toHaveClass('fa-eye');

    await userEvent.click(togglePasswordButton);
    expect(passwordField.type).toEqual('text');
    expect(togglePasswordIcon).toHaveClass('fa-eye-slash');

    await userEvent.click(togglePasswordButton);
    expect(passwordField.type).toEqual('password');
    expect(togglePasswordIcon).toHaveClass('fa-eye');
  });
});
