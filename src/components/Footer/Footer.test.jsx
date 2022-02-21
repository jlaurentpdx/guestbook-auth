import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Footer from './Footer';

test('should display a popular tagline', () => {
  render(
    <UserProvider>
      <Footer />
    </UserProvider>
  );

  const tagline = screen.getByText(/-codo by jojo/i);
  expect(tagline).toBeInTheDocument();
});
