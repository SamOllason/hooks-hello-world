import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import SayHello from './SayHello';

// test('renders learn react link', () => {
//   const { getByText } = render(<App initialName={"name"} />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders display element using props', () => {
  const { getByText } = render(<SayHello name={"test_name"} />);
  const displayEl = getByText(/Hello test_name/i);
  expect(displayEl).toBeInTheDocument();
});
