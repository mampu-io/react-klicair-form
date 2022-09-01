import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import FormWrapper, { FormWrapperProps } from '../FormWrapper';
import FormGroup from '../../molecules/FormGroup';
import InputField from '../../atoms/InputField';

describe('FormWrapper component', () => {
  /**
   * Test Cases:
   * - With default props, should render form wrapper with appropriate behavior
   * - With custom submit label button
   * - When isSubmitButtonDisabled is true
   */
  const onSubmitHandlerMock = jest.fn();
  const formGroupTest = (
    <FormGroup label="Nama Sesuai Identitas">
      <InputField placeholder="Masukkan nama sesuai identitas" width="fluid" />
    </FormGroup>
  );

  const globalProps: FormWrapperProps = {
    onSubmitHandler: onSubmitHandlerMock,
    submitLabel: 'Submit',
    children: {} as React.ReactNode,
    isSubmitButtonDisabled: false,
  };

  afterEach(cleanup);

  test(`With default props, should render form wrapper with appropriate
    behavior`, async () => {
    render(<FormWrapper {...globalProps}>{formGroupTest}</FormWrapper>);
    const formWrapper = document.querySelector('.kc-form-wrapper');
    expect(formWrapper).toBeDefined();

    const submitBtn = screen.getByRole('button');
    await userEvent.click(submitBtn);
    expect(onSubmitHandlerMock.mock.calls).toHaveLength(1);

    const submitBtnLabel = submitBtn.querySelector('span.kc-button-label');
    expect(submitBtnLabel?.textContent).toEqual('Submit');

    const formGroup = formWrapper?.querySelector('.kc-form-group');
    expect(formGroup).toBeDefined();

    const inputField = formGroup?.querySelector('kc-inputfield');
    expect(inputField).toBeDefined();
  });

  test('With custom submit label button', () => {
    render(<FormWrapper {...globalProps} submitLabel="Tambah">{formGroupTest}</FormWrapper>);
    const submitBtn = screen.getByRole('button');
    const submitBtnLabel = submitBtn.querySelector('span.kc-button-label');
    expect(submitBtnLabel?.textContent).toEqual('Tambah');
  });

  test('When isSubmitButtonDisabled is true', () => {
    render(<FormWrapper {...globalProps} isSubmitButtonDisabled>{formGroupTest}</FormWrapper>);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeDisabled();
  });
});
