import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders page heading', () => {
  render(<Heading />);
  const headingElement = screen.getByText(/React Testing Library using Typescript/i)
  expect(headingElement).toBeInTheDocument();
})