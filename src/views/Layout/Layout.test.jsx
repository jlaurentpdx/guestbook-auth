import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { UserProvider } from '../../context/UserContext';

test('should display a single heading when no user is signed in', () => {
  render(
    <UserProvider>
      <Layout />
    </UserProvider>
  );

  const header = screen.getByRole('heading', { name: /guestbook/i });
  expect(header).toBeInTheDocument();
});
