import { render, screen } from '@testing-library/react';
import Home from './Home';
import { UserProvider } from '../../context/UserContext';
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

test('should display a guest form and an empty list of entries', () => {
  render(
    <UserProvider>
      <Home />
    </UserProvider>
  );

  const inputs = screen.getAllByRole('textbox');
  const buttons = screen.getAllByRole('button');

  expect(inputs).toHaveLength(2);
  expect(buttons).toHaveLength(1);
});
