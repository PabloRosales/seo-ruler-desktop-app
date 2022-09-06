import { render, screen } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
  it('should not show if show is false', () => {
    const { container } = render(
      <Modal show={false} onClose={() => {}}>
        <div>Content...</div>
        <button></button>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
    expect(screen.queryByText('Content...')).not.toBeInTheDocument();
  });

  it('should show modal with content if show is true', () => {
    render(
      <Modal show onClose={() => {}}>
        <div>Content...</div>
        <button></button>
      </Modal>,
    );
    const modal = screen.getByText('Content...');
    expect(modal).toBeInTheDocument();
    expect(modal).toBeVisible();
  });
});
