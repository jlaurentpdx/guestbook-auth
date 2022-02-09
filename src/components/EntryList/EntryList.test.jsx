import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntryContext';
import EntryList from './EntryList';

test('should render an empty list of entries and a clear button', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <EntryList />
      </EntriesProvider>
    </UserProvider>
  );

  const clearButton = screen.getByRole('button', {
    name: /clear guestbook entries/i,
  });
  expect(clearButton).toBeInTheDocument();

  // TODO: Currently, this test will always render an empty div.
  //    Read into how to test for context via EntriesProvider.
});
