import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormGroup from '../FormGroup';
import InputField from '../../atoms/InputField';

describe('FormGroup component', () => {
  /**
   * Test Cases:
   * - With default props, should render form group with horizontal direction
   */
  afterEach(cleanup);

  test(`With default props, should render form group with horizontal
    direction`, () => {
    render(
      <FormGroup label="Nama Sesuai Identitas">
        <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
      </FormGroup>,
    );
    const formGroup = document.querySelector('.kc-form-group');
    expect(formGroup).toBeDefined();
    expect(formGroup).toHaveClass('kc-form-group--horizontal');

    const formGroupLabel = formGroup?.querySelector('.kc-form-group__label label');
    expect(formGroupLabel?.textContent).toEqual('Nama Sesuai Identitas');

    const inputField = formGroup?.querySelector('kc-inputfield');
    expect(inputField).toBeDefined();
  });
});
