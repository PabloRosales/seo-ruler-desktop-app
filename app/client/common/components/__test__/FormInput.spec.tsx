import { render, updateInput } from 'test-client';
import { FormInput } from '../FormInput';

describe('FormInput', () => {
  it('should update value', async () => {
    const setValue = jest.fn();
    const { container } = render(
      <FormInput
        name="email"
        placeholder="Email"
        fullWidth
        onChange={(e) => setValue(e.currentTarget.value)}
        id="email"
        type="text"
        disabled={false}
        value=""
        hasError={false}
      />,
    );
    updateInput(container, 'email', 'pass');
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith('pass');
  });

  it('should highlight email on email error', () => {
    const { container } = render(<FormInput name="input" hasError={true} onChange={() => {}} />);
    const input = container.querySelector('input[name="input"]');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});
