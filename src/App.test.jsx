import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ThemeProvider } from './context/ThemeContext';

const entries = [
  {
    id: 1,
    name: 'Mock',
    comment: 'I am mock test.',
    date: 'Dates are merely a construct.',
  },
  {
    id: 2,
    name: 'Mock',
    comment: 'I am not real test.',
    date: 'Not in your calendar.',
  },
];

const entry = {
  id: 3,
  name: 'TEST',
  comment: 'Are you mocking me?',
  date: '2023',
};

const server = setupServer(
  rest.post(`http://localhost:7891/rest/v1/entries`, (req, res, ctx) => {
    return res(ctx.json([entry]));
  }),

  rest.get(`http://localhost:7891/rest/v1/entries`, (req, res, ctx) => {
    const select = req.url.searchParams.get('select');
    if (select === '*') {
      return res(ctx.json(entries));
    }
    return res(ctx.json());
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('should allow users to add a guestbook entry', async () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  // Component testing - by default, the app should render the following...
  const entriesList = await screen.findAllByRole('listitem');
  const header = screen.getByRole('heading', { name: /guestbook/i });
  const inputName = screen.getByRole('textbox', { name: /your name/i });
  const inputComment = screen.getByRole('textbox', { name: /your comment/i });
  const signButton = screen.getByRole('button', { name: /sign/i });

  expect(entriesList).toHaveLength(2);
  expect(header).toBeInTheDocument();
  expect(inputName).toBeInTheDocument();
  expect(inputComment).toBeInTheDocument();
  expect(signButton).toBeInTheDocument();

  // Behavioral testing - user inputs a name and comment, then submits the form...
  userEvent.type(inputName, 'TEST');
  userEvent.type(inputComment, "It's me, I'm a real test");
  userEvent.click(signButton);

  const testHeaders = await screen.findAllByRole('heading', { name: /test/i });

  expect(testHeaders).toHaveLength(2);
  expect(screen.getByText(/mocking/i)).toBeInTheDocument();
  expect(screen.getByText(/2023/i)).toBeInTheDocument();
});
