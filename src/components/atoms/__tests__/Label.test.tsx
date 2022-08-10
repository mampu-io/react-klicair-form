import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from '../Label';

describe('Label component', () => {
  /**
   * Test Cases:
   * - With default props, should render label with important state
   * - Should have capability to render label with non-important state
   */
  afterEach(cleanup);

  test('With default props, should render label with important state', () => {
    render(<Label value="Nama Sesuai Identitas" />);
    const label = document.querySelector('label');

    expect(label).toBeDefined();
    expect(label?.textContent).toEqual('Nama Sesuai Identitas');
    expect(label).toHaveClass('kc-body1 kc-typo-bold');
  });

  test('Should have capability to render label with non-important state', () => {
    render(<Label value="Nama Sesuai Identitas" important={false} />);
    const label = document.querySelector('label');

    expect(label).toBeDefined();
    expect(label?.textContent).toEqual('Nama Sesuai Identitas');
    expect(label).toHaveClass('kc-body1');
    expect(label).not.toHaveClass('kc-typo-bold');
  });
});
