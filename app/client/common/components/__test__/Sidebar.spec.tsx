import { act, cleanup, screen } from '@testing-library/react';
import { render, AppMockWrapper } from 'test-client';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
  afterEach(() => {
    cleanup();
  });

  it('throws error if no options are provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(<Sidebar navigation={[]} onChange={() => {}} />, {
        wrapper: AppMockWrapper,
      });
    }).toThrowErrorMatchingInlineSnapshot(`"No navigation options provided"`);
  });

  it('throws error if duplicate "to" options are provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(
        <Sidebar
          navigation={[
            { to: '/', key: 'option1', name: 'Option 1' },
            { to: '/', key: 'option2', name: 'Option 2' },
          ]}
          onChange={() => {}}
        />,
        {
          wrapper: AppMockWrapper,
        },
      );
    }).toThrowErrorMatchingInlineSnapshot(`"Duplicate paths found"`);
  });

  it('throws error if duplicate "key" options are provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(
        <Sidebar
          navigation={[
            { to: '/option1', key: 'option1', name: 'Option 1' },
            { to: '/option2', key: 'option1', name: 'Option 2' },
          ]}
          onChange={() => {}}
        />,
        {
          wrapper: AppMockWrapper,
        },
      );
    }).toThrowErrorMatchingInlineSnapshot(`"Duplicate keys found"`);
  });

  it('should show menu options', () => {
    render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2' },
        ]}
        onChange={() => {}}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('should disable menu option', () => {
    const { container } = render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2', disabled: true },
        ]}
        onChange={() => {}}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    expect(screen.getByLabelText('Option 2')).toHaveClass('disabled');
    expect(container.querySelector('.disabled')?.nodeName).toBe('DIV');
  });

  it('should show active menu option', () => {
    const { container } = render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2', active: true },
        ]}
        onChange={() => {}}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    expect(screen.getByLabelText('Option 2')).toHaveClass('active');
    expect(container.querySelector('.active')?.nodeName).toBe('A');
  });

  it('should execute onChange callback', () => {
    const onChange = jest.fn();
    render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2' },
        ]}
        onChange={onChange}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    act(() => {
      screen.getByLabelText('Option 2').click();
    });
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('option2');
  });

  it('should not execute onChange callback if disabled', () => {
    const onChange = jest.fn();
    render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2', disabled: true },
        ]}
        onChange={onChange}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    screen.getByLabelText('Option 2').click();
    expect(onChange).toBeCalledTimes(0);
  });

  it('should show count', () => {
    render(
      <Sidebar
        navigation={[
          { to: '/option1', key: 'option1', name: 'Option 1' },
          { to: '/option2', key: 'option2', name: 'Option 2', count: 10, active: true },
          { to: '/option3', key: 'option3', name: 'Option 2', count: 20 },
        ]}
        onChange={() => {}}
      />,
      {
        wrapper: AppMockWrapper,
      },
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });
});
