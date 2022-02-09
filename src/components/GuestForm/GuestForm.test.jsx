import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntryContext';
import GuestForm from './GuestForm';

test('should display an empty form', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <GuestForm />
      </EntriesProvider>
    </UserProvider>
  );

  const inputName = screen.getByRole('textbox', { name: /your name/i });
  const inputComment = screen.getByRole('textbox', { name: /your comment/i });
  const signButton = screen.getByRole('button', { name: /sign/i });

  expect(inputName).toBeInTheDocument();
  expect(inputComment).toBeInTheDocument();
  expect(signButton).toBeInTheDocument();
});
