import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '../errors/ErrorResponse';

export const postApi = async <TInput, TOutput>(path: string, data: TInput): Promise<undefined | TOutput> => {
  const response = await axios.post<any, { data: TOutput }, TInput>(path, data);
  if (!response.data) {
    return undefined;
  }
  return response.data;
};

export const getApi = async <TOutput>(path: string): Promise<undefined | TOutput> => {
  const response = await axios.get<any, { data: TOutput }>(path);
  if (!response.data) {
    return undefined;
  }
  return response.data;
};

type TOnSuccess<T> = (data: T | undefined) => void;
type TOnError<TError> = (error: TError | undefined) => void;

export const useGetApi = <TOutput>(
  name: string,
  options: {
    retry?: number | boolean;
    path: string;
    onSuccess?: TOnSuccess<TOutput>;
    onError?: TOnError<Error>;
    validateOutput?: (response: TOutput | undefined) => void;
    refetchOnWindowFocus?: boolean;
  },
) => {
  return useQuery(
    [name],
    async () => {
      const data = await getApi<TOutput>(options.path);
      if (options.validateOutput) {
        options.validateOutput(data);
      }
      return data;
    },
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
      retry: options.retry !== undefined ? options.retry : true,
      refetchOnWindowFocus: options.refetchOnWindowFocus === undefined ? true : options.refetchOnWindowFocus,
    },
  );
};

export const usePostApi = <TInput, TOutput, TError = Error>(
  name: string,
  options: {
    path: string;
    validateInput?: (input: TInput) => void;
    validateOutput?: (response: TOutput | undefined) => void;
    onSuccess?: TOnSuccess<TOutput>;
    onError?: TOnError<TError>;
    onRequestError?: TOnError<AxiosError<ErrorResponse>>;
  },
) => {
  return useMutation<TOutput | undefined, TError | undefined, TInput>(
    [name],
    async (args) => {
      if (options.validateInput) {
        options.validateInput(args);
      }

      let data: TOutput | undefined;
      try {
        data = await postApi<TInput, TOutput>(options.path, args);
      } catch (err: any) {
        if (options.onRequestError && err?.response?.status) {
          options.onRequestError(err);
        } else {
          throw err;
        }
      }

      if (options.validateOutput) {
        options.validateOutput(data);
      }

      return data;
    },
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    },
  );
};
