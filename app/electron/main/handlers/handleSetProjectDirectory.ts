import { z } from 'zod';
import { dialog } from 'electron';
import trpc from '@trpc/server';

const handler = trpc.router().mutation('set-project-directory', {
  input: z.object({ defaultPath: z.string().optional() }),
  async resolve(req) {
    const selected = await dialog.showOpenDialog({
      title: 'Open directory',
      defaultPath: req.input.defaultPath,
      properties: ['openDirectory'],
    });
    return { filePaths: selected.filePaths, canceled: selected.canceled };
  },
});

export default handler;
