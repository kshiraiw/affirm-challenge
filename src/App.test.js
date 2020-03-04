import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/credit card/i);
  expect(linkElement).toBeInTheDocument();
});
