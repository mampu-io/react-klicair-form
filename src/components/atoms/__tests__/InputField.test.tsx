import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import InputField from '../InputField';

describe('InputField component', () => {
  /**
   * Test Cases:
   * - With default props, should render normal-state input field with
   *   placeholder, no-title, no-subtitle, no-prefix, and no-suffix
   * - Should have capability to show prefix
   * - Should have capability to show suffix
   * - Should have capability to show title
   * - Should have capability to show subtitle
   * - Should have indicator when input field in error state
   * - Should have indicator when input field in disabled state
   */
  afterEach(cleanup);

  test(`With default props, should render normal-state input field with 
    placeholder, no-title, no-subtitle, no-prefix, and no-suffix`, () => {
    render(<InputField placeholder="example" />);
    const inputField: HTMLInputElement = screen.getByRole('textbox');
    const outerContainer = document.querySelector('.kc-inputfield');
    const inputFieldTitle = document.querySelector('.kc-inputfield__title');
    const inputFieldSubtitle = document.querySelector('.kc-inputfield__subtitle');
    const inputFieldPrefix = document.querySelector('.kc-inputfield__prefix');
    const inputFieldSuffix = document.querySelector('.kc-inputfield__suffix');
    const togglePasswordButton = document.querySelector('.kc-inputfield__toggle-password');

    expect(inputField).toBeDefined();
    expect(inputField.placeholder).toEqual('example');
    expect(inputField.type).toEqual('text');
    expect(inputField).not.toBeDisabled();
    expect(outerContainer).toHaveClass('kc-inputfield--medium');
    expect(outerContainer).not.toHaveClass('kc-inputfield--disabled kc-inputfield--error');
    expect(inputFieldTitle).toBeFalsy();
    expect(inputFieldSubtitle).toBeFalsy();
    expect(inputFieldPrefix).toBeFalsy();
    expect(inputFieldSuffix).toBeFalsy();
    expect(togglePasswordButton).toBeFalsy();
  });

  test('Should have capability to show prefix', () => {
    render(<InputField placeholder="example" _prefix="Rp" />);
    const inputFieldPrefix = document.querySelector('.kc-inputfield__prefix > span');
    expect(inputFieldPrefix).toBeTruthy();
    expect(inputFieldPrefix?.textContent).toEqual('Rp');
  });

  test('Should have capability to show suffix', () => {
    render(<InputField placeholder="example" suffix="PCS" />);
    const inputFieldSuffix = document.querySelector('.kc-inputfield__suffix > span');
    expect(inputFieldSuffix).toBeTruthy();
    expect(inputFieldSuffix?.textContent).toEqual('PCS');
  });

  test('Should have capability to show title', () => {
    render(<InputField placeholder="example" title="Username" />);
    const inputFieldTitle = document.querySelector('.kc-inputfield__title > span');
    expect(inputFieldTitle).toBeTruthy();
    expect(inputFieldTitle?.textContent).toEqual('Username');
  });

  test('Should have capability to show subtitle', () => {
    render(<InputField placeholder="example" subtitle="Wajib diisi" />);
    const inputFieldSubtitle = document.querySelector('.kc-inputfield__subtitle > span');
    expect(inputFieldSubtitle).toBeTruthy();
    expect(inputFieldSubtitle?.textContent).toEqual('Wajib diisi');
  });

  test('Should have indicator when input field in error state', () => {
    render(<InputField placeholder="example" isError />);
    const outerContainer = document.querySelector('.kc-inputfield');
    expect(outerContainer).toHaveClass('kc-inputfield--error');
  });

  test('Should have indicator when input field in disabled state', () => {
    render(<InputField placeholder="example" disabled />);
    const inputField: HTMLInputElement = screen.getByRole('textbox');
    expect(inputField).toBeDisabled();
  });
});
