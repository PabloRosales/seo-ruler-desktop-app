import { render, screen } from '@testing-library/react';
import { SearchInput } from '../SearchInput';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

const setup = (defaultValue: string) => {
  const Comp = () => {
    const [value, setValue] = useState(defaultValue);
    return (
      <SearchInput
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e);
          console.log(e);
        }}
      />
    );
  };
  render(<Comp />);
  const input = screen.getByRole('textbox') as HTMLInputElement;
  const clear = screen.queryByRole('button') as HTMLDivElement;
  return { input, clear };
};

describe('SearchInput', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('renders default value', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { input } = setup('s');
    expect(input).toHaveValue('s');
    expect(logSpy).toHaveBeenCalledTimes(0);
  });

  it('updates input value without default value', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { input } = setup('');

    expect(input).toHaveValue('');

    await userEvent.type(input, 's');
    expect(input).toHaveValue('s');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenLastCalledWith('s');
  });

  it('updates input value with default value', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { input } = setup('s');

    expect(input).toHaveValue('s');

    await userEvent.type(input, 's');
    expect(input).toHaveValue('ss');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenLastCalledWith('ss');
  });

  it('clears input value', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { input, clear } = setup('s');
    expect(input).toHaveValue('s');
    await userEvent.click(clear);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
  });

  it('clears input value after writing', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { input, clear } = setup('s');
    expect(input).toHaveValue('s');
    expect(logSpy).toHaveBeenCalledTimes(0);

    await userEvent.type(input, 's');
    expect(input).toHaveValue('ss');
    expect(logSpy).toHaveBeenLastCalledWith('ss');
    expect(logSpy).toHaveBeenCalledTimes(1);

    await userEvent.click(clear);
    expect(input).toHaveValue('');
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenLastCalledWith('');
  });
});
