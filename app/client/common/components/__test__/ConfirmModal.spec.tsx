import { render, screen, cleanup } from 'test-client';
import { ConfirmModal } from '../ConfirmModal';

describe('ConfirmModal', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not render if show is false', () => {
    render(
      <ConfirmModal
        show={false}
        onConfirm={() => {}}
        onCancel={() => {}}
        title="Delete User"
        message="Are you sure?"
      />,
    );
    expect(screen.queryByText('Delete User')).toBeNull();
  });

  it('should run onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    render(<ConfirmModal show onConfirm={onConfirm} onCancel={() => {}} title="Delete User" message="Are you sure?" />);
    const confirmButton = screen.getByText('OK');
    confirmButton.click();
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should run onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    render(<ConfirmModal show onConfirm={() => {}} onCancel={onCancel} title="Delete User" message="Are you sure?" />);
    const cancelButton = screen.getByText('Cancel');
    cancelButton.click();
    expect(onCancel).toHaveBeenCalled();
  });
});
