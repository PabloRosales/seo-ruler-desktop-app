import React, { ReactElement } from 'react';
import { fireEvent, render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import axios from 'axios';

jest.mock('axios');
const ax = axios as jest.Mocked<typeof axios>;

interface WrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    error: () => {},
  },
});

const AppMockWrapper = ({ children }: WrapperProps) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  </RecoilRoot>
);

class FakeAxiosError extends Error {
  response: { status: number | undefined } | undefined;
  constructor(message: string, status: number | undefined) {
    super(message);
    this.response = { status };
  }
}

export const getSelectInput = (container: HTMLElement, name: string) => {
  return container.querySelector(`div#select-${name} input[name="${name}"]`);
};

export const openSelect = (container: HTMLElement, name: string) => {
  const button = container.querySelector(`div#select-${name} button[name="button-${name}"]`);
  fireEvent.click(button as HTMLButtonElement);
};

export const clickSelectOption = (container: HTMLElement, name: string, optionValue: string) => {
  const option = container.querySelector(`div#select-${name} li.option-${optionValue}`);
  fireEvent.click(option as HTMLLIElement);
};

export const getMultiSelect = (container: HTMLElement, name: string, num: number) => {
  return container.querySelector(`div#multi-select-${name} input[name="${name}[${num}]"]`);
};

export const openMultiSelect = (container: HTMLElement, name: string) => {
  const button = container.querySelector(`div#multi-select-${name} button[name="button-${name}"]`);
  fireEvent.click(button as HTMLButtonElement);
};

export const clickMultiSelectOption = (container: HTMLElement, name: string, optionValue: string) => {
  const option = container.querySelector(`div#multi-select-${name} li.option-${optionValue}`);
  fireEvent.click(option as HTMLLIElement);
};

export const updateInput = (container: HTMLElement, name: string, value: string) => {
  const input = container.querySelector(`input[name="${name}"]`);
  fireEvent.change(input as HTMLInputElement, { target: { value } });
};

export * from '@testing-library/react';
export { AppMockWrapper, ax, FakeAxiosError };
