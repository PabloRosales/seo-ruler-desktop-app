import { Button } from '../Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders the default style button with provided text', () => {
    render(<Button>Button Text</Button>);
    expect(screen.getByText('Button Text')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('default');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('renders disables the button if disabled provided', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('disabled');
  });

  it('renders the button with danger style with provided text', () => {
    render(<Button buttonStyle="danger">Danger Button</Button>);
    expect(screen.getByText('Danger Button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('danger');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('renders the button with primary style with provided text', () => {
    render(<Button buttonStyle="primary">Primary Button</Button>);
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('primary');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('renders the button with the icon component provided', () => {
    render(<Button icon={<span>Icon...</span>}>Button With Icon</Button>);
    expect(screen.getByText('Button With Icon')).toBeInTheDocument();
    expect(screen.getByText('Icon...')).toBeInTheDocument();
  });

  it('renders the button as button when type is not provided', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container.querySelector('button')).toHaveAttribute('type', 'button');
  });

  it('renders the button as submit button when type is submit', () => {
    const { container } = render(<Button type="submit">Submit Button</Button>);
    expect(container.querySelector('button')).toHaveAttribute('type', 'submit');
  });

  it('calls the onClick event if provided when clicked', () => {
    const fn = jest.fn();
    render(<Button onClick={() => fn('clicked')}>Click Me</Button>);
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('clicked');
    screen.getByRole('button').click();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith('clicked');
  });

  it('adds className to the button if provided', () => {
    render(<Button className="test-class">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('test-class');
  });
});
