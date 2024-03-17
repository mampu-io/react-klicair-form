import React from 'react';
import {
  act,
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CopyButton from '../CopyButton';

describe('CopyButton component', () => {
  /**
   * Test Cases:
   * - The copy mechanism from the CopyButton component should work
   * - When the CopyButton in disabled state
   */

  const VALUE_TO_COPY = 'Example';
  // Mock navigator.clipboard.writeText()
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.useFakeTimers();
  afterEach(cleanup);

  xtest('The copy mechanism from the CopyButton component should work', () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    render(<CopyButton valueToCopy={VALUE_TO_COPY} />);
    const copyButton = screen.getByRole('button') as HTMLInputElement;
    const copyButtonIcon = copyButton.querySelector('i') as HTMLElement;
    const copyButtonTooltip = copyButton.nextElementSibling;

    expect(copyButton).toBeDefined();
    expect(copyButtonIcon).toHaveClass('fas fa-copy');
    expect(copyButton).not.toBeDisabled();
    expect(copyButton.parentElement).toHaveClass(...[
      'kc-rounded-button',
      'kc-rounded-button--neutral',
      'kc-rounded-button--medium',
    ]);
    expect(copyButtonTooltip?.textContent).toEqual('Copy');

    fireEvent.click(copyButton);
    expect(copyButtonTooltip?.textContent).toEqual('Copied');
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(VALUE_TO_COPY);

    act(() => { jest.runAllTimers(); });
    expect(copyButtonTooltip?.textContent).toEqual('Copy');
  });

  test('When the CopyButton in disabled state', async () => {
    render(<CopyButton valueToCopy={VALUE_TO_COPY} disabled />);
    const copyButton = screen.getByRole('button') as HTMLInputElement;
    expect(copyButton).toBeDisabled();
  });
});
