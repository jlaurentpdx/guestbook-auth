import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntryContext';
import GuestForm from './GuestForm';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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
