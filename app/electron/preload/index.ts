import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('trpc', {
  rpc: (op: { type: 'query' | 'mutation' | 'subscription'; input: unknown; path: string }) => {
    return ipcRenderer.invoke('rpc', op);
  },
});

export default {};
