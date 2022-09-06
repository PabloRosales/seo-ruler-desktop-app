import * as fs from 'fs';
import * as path from 'path';
import { app } from 'electron';
import { DataSource } from 'typeorm';

export let conn: undefined | DataSource;

export const setupDb = () => {
  let PATH: string;

  if (process.platform === 'darwin') {
    PATH = path.join(app.getPath('userData'));
  } else {
    PATH = path.join(app.getPath('documents'), '/', 'seoruler-desktop');
  }

  const loadDb = () => {
    conn = new DataSource({
      type: 'sqlite',
      database: path.join(PATH, 'db.sqlite'),
      logging: process.env.NODE_ENV === 'development' ? ['error', 'schema', 'warn', 'migration'] : false,
    });

    conn
      .initialize()
      .then(() => {
        console.log('Database initialized');
      })
      .catch((err) => {
        console.error('Database initialization error', err);
      });
  };

  if (fs.existsSync(PATH)) {
    loadDb();
  } else {
    fs.mkdir(PATH, () => {
      loadDb();
    });
  }
};
