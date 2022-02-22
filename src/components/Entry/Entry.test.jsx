import { render, screen } from '@testing-library/react';
import Entry from './Entry';
import { rest } from 'msw';

const entry = { date: 'Wed Feb 09 2022', comment: 'i love test' };

test('should render an entry with a name, comment, and id', () => {
  render(<Entry {...entry} />);

  const comment = screen.getByText(/i love test/i);
  const date = screen.getByText(/wed feb 09 2022/i);

  expect(comment).toBeInTheDocument();
  expect(date).toBeInTheDocument();
});
