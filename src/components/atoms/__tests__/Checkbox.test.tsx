import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
  /**
   * Test Cases:
   * - With default props, should render the Checkbox with non-disabled and
   *   non-checked state
   * - When the Checkbox in disabled state
   * - When the Checkbox in checked state
   * - When the Checkbox in indeterminate state
   */

  const CHECKBOX_LABEL = 'Example';
  const onToggleCheckbox = jest.fn();
  const defaultProps = { label: CHECKBOX_LABEL, onChange: onToggleCheckbox };
  afterEach(cleanup);

  test(`With default props, should render the Checkbox with non-disabled and
    non-checked state`, () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).toBeDefined();
    expect(checkbox.nextSibling?.textContent).toEqual(CHECKBOX_LABEL);
    expect(checkbox).not.toBeDisabled();
    expect(checkbox.parentElement).toHaveClass('kc-checkbox');
    expect(checkbox.checked).toEqual(false);
  });

  test(`When the Checkbox in disabled state, should not be
    able to click`, async () => {
    render(<Checkbox {...defaultProps} disabled />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).toBeDisabled();
  });

  test('When the Checkbox in checked state', () => {
    render(<Checkbox {...defaultProps} checked />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toEqual(true);
  });

  test('When the Checkbox in indeterminate state', () => {
    render(<Checkbox {...defaultProps} indeterminate checked />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toEqual(true);
  });
});
