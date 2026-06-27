const { app, BrowserWindow } = require('electron');

if (!app.isPackaged) {
  require('electron-reload')(__dirname); // electron-reload
}

function createWindow() {
  const win = new BrowserWindow({
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    frame: false,
    transparent: true,
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(createWindow);