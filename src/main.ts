import { app, BrowserWindow, TouchBarColorPicker } from 'electron';

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#0A0903",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    }
  });

  win.loadFile('./index.html');
}

app.on('ready', createWindow);