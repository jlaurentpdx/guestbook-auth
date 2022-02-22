import { render, screen } from '@testing-library/react';
import { EntriesProvider } from '../../context/EntryContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

test('should display a single heading when no user is signed in', () => {
  render(
    <ThemeProvider>
      <UserProvider>
        <EntriesProvider>
          <Header />
        </EntriesProvider>
      </UserProvider>
    </ThemeProvider>
  );

  const header = screen.getByRole('heading', { name: /guestbook/i });
  expect(header).toBeInTheDocument();
});
