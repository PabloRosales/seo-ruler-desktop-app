import { cleanup, render } from 'test-client';
import { Button } from '../Button';
import { Form } from '../Form';
import { FormInput } from '../FormInput';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  afterEach(() => {
    cleanup();
  });

  it('should submit form on input enter', async () => {
    const handleSubmit = jest.fn();
    const setValue = jest.fn();
    const { container } = render(
      <Form id="form" onSubmit={handleSubmit}>
        <FormInput onChange={setValue} name="input" />
        <Button type="submit">Submit</Button>
      </Form>,
    );
    const form = container.querySelector('#form');
    const input = container.querySelector('#form input[name="input"]');
    const submitButton = container.querySelector('#form button[type="submit"]');
    fireEvent.submit(form as HTMLFormElement);
    await userEvent.type(input as HTMLInputElement, '{enter}');
    fireEvent.click(submitButton as HTMLButtonElement);
    expect(handleSubmit).toHaveBeenCalledTimes(3);
  });
});
