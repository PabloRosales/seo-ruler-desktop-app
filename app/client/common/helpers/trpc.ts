import type { AppRouter } from '../../../electron/main';
import { createReactQueryHooks } from '@trpc/react';

export const trpc = createReactQueryHooks<AppRouter>();
