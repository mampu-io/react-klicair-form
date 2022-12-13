import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormGroup from '../FormGroup';
import InputField from '../../atoms/InputField';

describe('FormGroup component', () => {
  /**
   * Test Cases:
   * - With default props, should render form group with horizontal direction
   * - When note is defined, should render note after the form group label
   * - When isRequired is true, should render form group required indicator
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

  test(`When note is defined, should render note after the form
    group label`, () => {
    const expectedNote = 'Maksimal 50 karakter';
    render(
      <FormGroup label="Nama Sesuai Identitas" note={expectedNote}>
        <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
      </FormGroup>,
    );

    const formGroup = document.querySelector('.kc-form-group') as HTMLElement;
    const formGroupNote = formGroup.querySelector('.kc-form-group__note') as HTMLElement;
    expect(formGroupNote.textContent).toEqual(expectedNote);
  });

  test(`When isRequired is true, should render form group required
    indicator`, () => {
    render(
      <FormGroup label="Nama Sesuai Identitas" isRequired>
        <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
      </FormGroup>,
    );

    const formGroup = document.querySelector('.kc-form-group') as HTMLElement;
    const formGroupRequiredIndicator = formGroup.querySelector('.kc-form-group__is-required');
    expect(formGroupRequiredIndicator).toBeDefined();
  });
});
