import { App } from './App';
import { RecoilRoot } from 'recoil';
import { Router } from './common/components/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTRPCClient } from '@trpc/react';
import type { AppRouter } from '../electron/main';
import { trpcLink } from './common/helpers/trpc-link';
import { useState } from 'react';
import { trpc } from './common/helpers/trpc';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

export const Wrapper = () => {
  const [trpcClient] = useState(() => {
    return createTRPCClient<AppRouter>({ links: [trpcLink] });
  });

  return (
    <RecoilRoot>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </trpc.Provider>
    </RecoilRoot>
  );
};
