const { app, BrowserWindow } = require('electron');
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');
const path = require('path');

setupTitlebar();

// Create window to host our vue app
const createWindow = () => {
  // Create window with options
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load up the generated html file that vue cli creates. NOTE: You must build
  // the app first using npm run build or npm run build-dev in order to create
  // this file.
  win.loadFile('dist/index.html');

  // Attach fullscreen(f11 and not 'maximized') && focus listeners
  attachTitlebarToWindow(win);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
});
