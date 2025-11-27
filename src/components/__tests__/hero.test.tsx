import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Hero } from '../hero';
import { useWaitlist } from '../../hooks/use-waitlist';
import { useRouter } from 'next/navigation';
import posthog from 'posthog-js';

// Mock hooks and libraries
jest.mock('../../hooks/use-waitlist');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
jest.mock('posthog-js', () => ({
  capture: jest.fn(),
}));

describe('Hero Component', () => {
  const mockSubscribe = jest.fn();
  const mockOnChangeEmail = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useWaitlist as jest.Mock).mockReturnValue({
      email: '',
      onChangeEmail: mockOnChangeEmail,
      isLoading: false,
      subscribe: mockSubscribe,

    });
  });

  it('renders correctly', () => {
    render(<Hero />);
    expect(screen.getByText('Own')).toBeInTheDocument();
    expect(screen.getByText('your')).toBeInTheDocument();
    expect(screen.getByText('code.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your email address/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Join waitlist/i })[0]).toBeInTheDocument();
  });

  it('handles email input', () => {
    render(<Hero />);
    const input = screen.getByPlaceholderText(/Your email address/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(mockOnChangeEmail).toHaveBeenCalled();
  });

  it('submits form and redirects on success', async () => {
    mockSubscribe.mockResolvedValue({ error: null });
    (useWaitlist as jest.Mock).mockReturnValue({
      email: 'test@example.com',
      onChangeEmail: mockOnChangeEmail,
      isLoading: false,
      subscribe: mockSubscribe,
    });

    render(<Hero />);
    const buttons = screen.getAllByRole('button', { name: /Join waitlist/i });
    const button = buttons[1];
    fireEvent.click(button);

    await waitFor(() => {
      expect(posthog.capture).toHaveBeenCalledWith('new waitlist signup', { email: 'test@example.com' });
      expect(mockSubscribe).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith('/thanks');
    });
  });

  it('does not redirect on error', async () => {
    mockSubscribe.mockResolvedValue({ error: 'Something went wrong' });
    (useWaitlist as jest.Mock).mockReturnValue({
      email: 'test@example.com',
      onChangeEmail: mockOnChangeEmail,
      isLoading: false,
      subscribe: mockSubscribe,
    });

    render(<Hero />);
    const buttons = screen.getAllByRole('button', { name: /Join waitlist/i });
    const button = buttons[1];
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSubscribe).toHaveBeenCalled();
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
