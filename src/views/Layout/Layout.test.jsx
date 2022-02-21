import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { UserProvider } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';

test('should display a single heading when no user is signed in', () => {
  render(
    <ThemeProvider>
      <UserProvider>
        <Layout />
      </UserProvider>
    </ThemeProvider>
  );

  const header = screen.getByRole('heading', { name: /guestbook/i });
  expect(header).toBeInTheDocument();
});
