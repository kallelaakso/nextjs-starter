import React from 'react';
import { act } from 'react-dom/test-utils';

import { render, fireEvent } from '../testUtils';
import IndexPage from '../../pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    const { getByText } = render(<IndexPage />, {});
    window.alert = jest.fn();

    act(() => {
      fireEvent.click(getByText('Increase'));
    });
    expect(window.alert).toHaveBeenCalledWith('Increased');
  });
});
