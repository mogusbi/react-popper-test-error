import { render } from '@testing-library/react';
import React from 'react';
import Hook from './Hook';

test('should render', () => {
  const { container } = render(<Hook />);

  expect(container).toBeInTheDocument();
});