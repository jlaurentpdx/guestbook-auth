import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('should allow users to add a guestbook entry', async () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  // Login Page
  const email = screen.getByRole('textbox', { name: /email/i });
  const password = screen.getByLabelText(/password/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  userEvent.type(email, 'test@example.com');
  userEvent.type(password, 'test1234');

  expect(email).toHaveValue('test@example.com');
  expect(password).toHaveValue('test1234');
  expect(submit).toBeEnabled();

  userEvent.click(submit);

  // Component testing - by default, the app should render the following...
  const header = screen.getByRole('heading', { name: /guestbook/i });
  const inputComment = screen.getByRole('textbox', { name: /your comment/i });
  const signButton = screen.getByRole('button', { name: /sign/i });

  expect(header).toBeInTheDocument();
  expect(inputComment).toBeInTheDocument();
  expect(signButton).toBeInTheDocument();

  // Behavioral testing - user inputs a name and comment, then submits the form...
  userEvent.type(inputComment, "It's me, I am Jordan.");
  userEvent.click(signButton);

  const testHeaders = await screen.findAllByRole('heading', {
    name: /jordan/i,
  });

  expect(testHeaders).toHaveLength(2);
  expect(screen.getByText(/am jordan/i)).toBeInTheDocument();
});
