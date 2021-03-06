import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

test('renders hello react', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});
