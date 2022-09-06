import { clickSelectOption, getSelectInput, openSelect, render } from 'test-client';
import { Select } from '../Select';

describe('Select', () => {
  it('throws error if default selection is not on options', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(<Select onChange={() => {}} name="select" label="Select" defaultSelected="X" options={['A', 'B']} />);
    }).toThrowErrorMatchingInlineSnapshot(`"Invalid default selected value: X"`);
  });

  it('throws error if no options are provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(<Select onChange={() => {}} name="select" label="Select" options={[]} />);
    }).toThrowErrorMatchingInlineSnapshot(`"No options provided"`);
  });

  it('should start with default value and update selected value', () => {
    const setValue = jest.fn();
    const name = 'role';
    const { container } = render(
      <Select options={['A', 'B']} defaultSelected={'B'} name={name} label="Select" onChange={(e) => setValue(e)} />,
    );
    const input = getSelectInput(container, name);
    expect(input).toHaveValue('B');
    expect(setValue).toHaveBeenCalledTimes(0);
    openSelect(container, name);
    clickSelectOption(container, name, 'A');
    expect(setValue).toHaveBeenCalledWith('A');
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('A');
  });

  it.todo('should clear selection');
  it.todo('should close on escape');
});
