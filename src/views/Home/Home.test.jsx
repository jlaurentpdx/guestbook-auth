import { render, screen } from '@testing-library/react';
import Home from './Home';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntryContext';

test('should display a guest form and an empty list of entries', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <Home />
      </EntriesProvider>
    </UserProvider>
  );

  const input = screen.getByRole('textbox', { name: /your comment/i });
  const button = screen.getByRole('button', { name: /sign/i });

  expect(input).toHaveValue('');
  expect(button).toBeEnabled();
});
