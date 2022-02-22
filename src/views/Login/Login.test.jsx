import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../../context/UserContext';

import Login from './Login';

test('should render a Login form', () => {
  const container = render(
    <UserProvider>
      <Router>
        <Login />
      </Router>
    </UserProvider>
  );

  //   screen.getByRole('textbox', { name: /password/i }); <-- Not sure why this did not work
  const email = screen.getByRole('textbox', { name: /email/i });
  const password = screen.getByLabelText(/password/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  userEvent.type(email, 'test@example.com');
  userEvent.type(password, 'test1234');

  expect(email).toHaveValue('test@example.com');
  expect(password).toHaveValue('test1234');
  expect(submit).toBeEnabled();

  expect(container).toMatchSnapshot();
});
