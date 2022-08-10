import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextArea from '../TextArea';

describe('TextArea component', () => {
  /**
   * Test Cases:
   * - With default props, should render normal-state textarea with
   *   placeholder, no-title, and no-subtitle
   * - Should have capability to show title
   * - Should have capability to show subtitle
   * - Should have indicator when textarea in error state
   * - Should have indicator when textarea in disabled state
   * - Should have option that textarea can be resizeable or not
   */
  afterEach(cleanup);

  test(`With default props, should render normal-state textarea with
    placeholder, no-title, and no-subtitle`, () => {
    render(<TextArea placeholder="example" />);
    const textArea: HTMLTextAreaElement = screen.getByRole('textbox');
    const outerContainer = document.querySelector('.kc-textarea');
    const textAreaTitle = document.querySelector('.kc-textarea__title');
    const textAreaSubtitle = document.querySelector('.kc-textarea__subtitle');

    expect(textArea).toBeDefined();
    expect(textArea.placeholder).toEqual('example');
    expect(textArea).not.toBeDisabled();
    expect(outerContainer).toHaveClass('kc-textarea--fixed kc-textarea--resizeable');
    expect(outerContainer).not.toHaveClass('kc-textarea--disabled kc-textarea--error');
    expect(textAreaTitle).toBeFalsy();
    expect(textAreaSubtitle).toBeFalsy();
  });

  test('Should have capability to show title', () => {
    render(<TextArea placeholder="example" title="Komentar" />);
    const textAreaTitle = document.querySelector('.kc-textarea__title > span');
    expect(textAreaTitle).toBeTruthy();
    expect(textAreaTitle?.textContent).toEqual('Komentar');
  });

  test('Should have capability to show subtitle', () => {
    render(<TextArea placeholder="example" subtitle="Wajib diisi" />);
    const textAreaSubtitle = document.querySelector('.kc-textarea__subtitle > span');
    expect(textAreaSubtitle).toBeTruthy();
    expect(textAreaSubtitle?.textContent).toEqual('Wajib diisi');
  });

  test('Should have indicator when textarea in error state', () => {
    render(<TextArea placeholder="example" isError />);
    const outerContainer = document.querySelector('.kc-textarea');
    expect(outerContainer).toHaveClass('kc-textarea--error');
  });

  test('Should have indicator when textarea in disabled state', () => {
    render(<TextArea placeholder="example" disabled />);
    const textArea: HTMLTextAreaElement = screen.getByRole('textbox');
    expect(textArea).toBeDisabled();
  });

  test('Should have option that textarea can be resizeable or not', () => {
    render(<TextArea placeholder="example" resizeable={false} />);
    const outerContainer = document.querySelector('.kc-textarea');
    expect(outerContainer).not.toHaveClass('kc-textarea--resizeable');
  });
});
