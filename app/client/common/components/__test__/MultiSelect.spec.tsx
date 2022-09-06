import { clickMultiSelectOption, getMultiSelect, openMultiSelect, render } from 'test-client';
import { MultiSelect } from '../MultiCombobox';

describe('MultiSelect', () => {
  it('throws error if default selection is not on options', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(
        <MultiSelect onChange={() => {}} name="select" label="Select" defaultSelected={['X']} options={['A', 'B']} />,
      );
    }).toThrowErrorMatchingInlineSnapshot(`"Invalid default selected values: X"`);

    expect(() => {
      render(
        <MultiSelect
          onChange={() => {}}
          name="select"
          label="Select"
          defaultSelected={['X', 'Z']}
          options={['A', 'B']}
        />,
      );
    }).toThrowErrorMatchingInlineSnapshot(`"Invalid default selected values: X,Z"`);
  });

  it('throws error if no options are provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(<MultiSelect onChange={() => {}} name="select" label="Select" options={[]} />);
    }).toThrowErrorMatchingInlineSnapshot(`"No options provided"`);
  });

  it('should start with default selection and select option when chosen', () => {
    const setValues = jest.fn();
    const name = 'multi';
    const { container } = render(
      <MultiSelect
        options={['Planning', 'EventTracker']}
        defaultSelected={['Planning']}
        name={name}
        onChange={(e) => setValues(e)}
        label="Select"
      />,
    );
    const input0 = getMultiSelect(container, name, 0);
    expect(input0).toHaveValue('Planning');
    expect(setValues).toHaveBeenCalledTimes(0);
    openMultiSelect(container, name);
    clickMultiSelectOption(container, name, 'EventTracker');
    expect(setValues).toHaveBeenCalledWith(['Planning', 'EventTracker']);
    expect(setValues).toHaveBeenCalledTimes(1);
    const input1 = getMultiSelect(container, name, 1);
    expect(input1).toHaveValue('EventTracker');
  });

  it.todo('should remove selected values');
  it.todo('should clear selection');
  it.todo('should close on escape');
});
