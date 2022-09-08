import { join } from 'path';
import { setupDb } from './db';
import { app, BrowserWindow, dialog, Menu } from 'electron';
import log from 'electron-log';

export const ROOT_PATH = {
  dist: join(__dirname, '..'),
  public: join(__dirname, app.isPackaged ? '../..' : '../../../public'),
};

let win: BrowserWindow | null;
const preload = join(__dirname, '../preload/index.js');
const url = process.env['VITE_DEV_SERVER_URL'] as string;

log.catchErrors({
  showDialog: false,
  onError(error, versions) {
    log.log(`Error on version APP: ${versions?.app}, OS: ${versions?.os}`);
    log.error(error);
  },
});

setupDb();

const createWindow = async () => {
  win = new BrowserWindow({
    icon: join(ROOT_PATH.public, 'logo.png'),
    minWidth: 1250,
    minHeight: 800,
    autoHideMenuBar: true,
    backgroundColor: '#ffffff',
    frame: true,
    webPreferences: {
      webviewTag: true,
      spellcheck: false,
      nodeIntegration: true,
      contextIsolation: false,
      preload,
    },
  });

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (import.meta.env.DEV) {
    win.webContents.openDevTools({
      mode: 'right',
    });
  }

  win.webContents.on('devtools-opened', () => {
    win?.focus();
    setImmediate(() => {
      win?.focus();
    });
  });

  const selectionMenu = Menu.buildFromTemplate([{ role: 'copy' }, { type: 'separator' }, { role: 'selectAll' }]);

  const inputMenu = Menu.buildFromTemplate([
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { type: 'separator' },
    { role: 'selectAll' },
  ]);

  win.webContents.on('context-menu', (e, props) => {
    const { selectionText, isEditable } = props;
    if (isEditable) {
      inputMenu.popup();
    } else if (selectionText && selectionText.trim() !== '') {
      selectionMenu.popup();
    }
  });

  win.on('close', async (e) => {
    if (!win || import.meta.env.DEV) {
      app.quit();
      return;
    }

    const choice = dialog.showMessageBoxSync(win, {
      type: 'question',
      buttons: ['Yes', 'No'],
      title: 'Confirm',
      message: 'Do you really want to close the app?',
    });

    if (choice === 1) {
      e.preventDefault();
    } else {
      app.exit();
    }
  });

  if (app.isPackaged) {
    await win.loadFile(join(ROOT_PATH.dist, 'index.html'));
  } else {
    await win.loadURL(url);
  }
};

app.on('window-all-closed', () => {
  win = null;
});

app.whenReady().then(createWindow);
