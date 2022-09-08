import { transformRPCResponse, TRPCAbortError, TRPCClientError, TRPCLink } from '@trpc/react';
import { AppRouter } from '../../../electron/main';
import { TRPCResponse } from '@trpc/server/rpc';

async function ipcRequest(op: {
  type: 'query' | 'mutation' | 'subscription';
  input: unknown;
  path: string;
}): Promise<TRPCResponse> {
  return (window as any).trpc.rpc(op);
}

export const trpcLink: TRPCLink<AppRouter> = (runtime) => {
  return ({ op, prev, onDestroy }) => {
    const promise = ipcRequest(op);

    let done = false;
    const once: typeof prev = (result) => {
      if (done) {
        return;
      }
      done = true;
      prev(result);
    };

    onDestroy(() => once(TRPCClientError.from(new TRPCAbortError(), { isDone: true })));

    promise
      .then((envelope) => once(transformRPCResponse({ envelope, runtime })))
      .catch((cause) => once(TRPCClientError.from(cause)));
  };
};
