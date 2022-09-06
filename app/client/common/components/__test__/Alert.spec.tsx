import { Alert } from '../Alert';
import { cleanup, render, screen } from 'test-client';

describe('Alert', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the provided message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Alert onClose={() => console.log('closed')}>Message...</Alert>);
    expect(screen.getByText('Message...')).toBeInTheDocument();
    expect(logSpy).not.toHaveBeenCalled();
  });

  it('runs the provided onClose function', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const fn = jest.fn((message) => console.log(message));
    render(<Alert onClose={() => fn('closed')}>Another Message...</Alert>);
    expect(screen.getByText('Another Message...')).toBeInTheDocument();
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('closed');
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledTimes(2);
  });

  it('adds the className provided', () => {
    const { container } = render(<Alert className="test-class">Message...</Alert>);
    expect(container.querySelector('.alert')).toHaveClass('test-class');
  });

  it('adds the id provided', () => {
    const { container } = render(<Alert id="test-id">Message...</Alert>);
    expect(container.querySelector('.alert')).toHaveAttribute('id', 'test-id');
  });
});
