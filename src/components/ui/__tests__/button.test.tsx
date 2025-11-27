import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders loading state correctly', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    // Check for the loader icon. Since it's an SVG, we can check for a class or just presence.
    // The Loader2 component from lucide-react renders an svg.
    // We can check if there's an svg with the animate-spin class.
    const loader = button.querySelector('.animate-spin');
    expect(loader).toBeInTheDocument();
  });

  it('renders children when loading', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('passes through other props', () => {
    render(<Button className="test-class" data-testid="test-button">Click me</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveClass('test-class');
  });

  it('renders as child', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders destructive variant', () => {
    render(<Button variant="destructive">Destructive</Button>);
    const button = screen.getByRole('button', { name: /destructive/i });
    expect(button).toHaveClass('bg-destructive');
  });
});
