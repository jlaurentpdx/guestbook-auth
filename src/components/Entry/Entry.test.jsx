import { render, screen } from '@testing-library/react';
import Entry from './Entry';
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

const entry = { date: 'Wed Feb 09 2022', name: 'test', comment: 'i love test' };

test('should render an entry with a name, comment, and id', () => {
  render(<Entry {...entry} />);

  const name = screen.getByRole('heading', { name: /test/i });
  const comment = screen.getByText(/i love test/i);
  const date = screen.getByText(/wed feb 09 2022/i);

  expect(name).toBeInTheDocument();
  expect(comment).toBeInTheDocument();
  expect(date).toBeInTheDocument();
});
