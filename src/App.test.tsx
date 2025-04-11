import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders the main heading', async () => {
  await act(async () => {
    render(<App />);
  });
  const headingElement = screen.getByRole('heading', { name: /Debate App/i });
  expect(headingElement).toBeInTheDocument();
});
