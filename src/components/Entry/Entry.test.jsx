import { render, screen } from '@testing-library/react';
import Entry from './Entry';

const entry = { id: 'Wed Feb 09 2022', name: 'test', comment: 'i love test' };

test('should render an entry with a name, comment, and id', () => {
  render(<Entry {...entry} />);

  const id = screen.getByText(/wed feb 09 2022/i);
  const name = screen.getByRole('heading', { name: /test/i });
  const comment = screen.getByText(/i love test/i);

  expect(id).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(comment).toBeInTheDocument();
});
