import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('should render', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render with className', () => {
    render(<Card className="test-class">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('test-class');
  });
});
