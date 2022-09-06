import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App';
import { RecoilRoot } from 'recoil';
import { Router } from './common/components/Router';

const queryClient = new QueryClient();

export const Wrapper = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
