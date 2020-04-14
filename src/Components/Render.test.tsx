import { render } from '@testing-library/react';
import React from 'react';
import Render from './Render';

test('should render', () => {
  const { container } = render(<Render />);

  expect(container).toBeInTheDocument();
});