import { render, screen } from '@testing-library/react';
import Entry from './Entry';

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
