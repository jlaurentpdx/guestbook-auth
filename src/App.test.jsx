import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should allow users to add a guestbook entry', () => {
  render(<App />);

  // Component testing - by default, the app should render the following...
  const header = screen.getByRole('heading', { name: /guestbook/i });
  const inputName = screen.getByRole('textbox', { name: /your name/i });
  const inputComment = screen.getByRole('textbox', { name: /your comment/i });
  const signButton = screen.getByRole('button', { name: /sign/i });
  const clearButton = screen.getByRole('button', {
    name: /clear guestbook entries/i,
  });

  expect(header).toBeInTheDocument();
  expect(inputName).toBeInTheDocument();
  expect(inputComment).toBeInTheDocument();
  expect(signButton).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();

  // Behavioral testing - user inputs a name and comment, then submits the form...
  userEvent.type(inputName, 'TEST');
  userEvent.type(inputComment, "It's me, I'm a test");
  userEvent.click(signButton);

  expect(screen.getAllByRole('heading', { name: /test/i })).toHaveLength(2);
  expect(screen.getByText(/it's me, i'm a test/i)).toBeInTheDocument();
  expect(screen.getByText(/2022/i)).toBeInTheDocument();

  // TODO: Test whether a user can exit, then log a new entry
  //    Previous efforts to run this test resulted in a return to
  //    the default App state as expected on lines 18-22, but did not
  //    render a new user's information
});
