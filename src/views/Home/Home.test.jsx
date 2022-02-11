import { render, screen } from '@testing-library/react';
import Home from './Home';
import { UserProvider } from '../../context/UserContext';

test('should display a guest form and an empty list of entries', () => {
  render(
    <UserProvider>
      <Home />
    </UserProvider>
  );

  const inputs = screen.getAllByRole('textbox');
  const buttons = screen.getAllByRole('button');

  expect(inputs).toHaveLength(2);
  expect(buttons).toHaveLength(1);
});
