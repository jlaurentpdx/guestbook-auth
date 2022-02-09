import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

test('should display a single heading when no user is signed in', () => {
  render(
    <UserProvider>
      <Header />
    </UserProvider>
  );

  const header = screen.getByRole('heading', { name: /guestbook/i });
  expect(header).toBeInTheDocument();
});
