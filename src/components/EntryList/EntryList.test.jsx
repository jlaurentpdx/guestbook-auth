import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntryContext';
import EntryList from './EntryList';
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

test('should render an empty list of entries and a clear button', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <EntryList />
      </EntriesProvider>
    </UserProvider>
  );

  const list = screen.getByRole('list');
  expect(list.children).toHaveLength(0);

  // TODO: Currently, this test will always render an empty div.
  //    Read into how to test for context via EntriesProvider.
});
