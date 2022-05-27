const { app, BrowserWindow } = require('electron');

// Create window to host our vue app
const createWindow = () => {
  
  // Create window with options
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load up the generated html file that vue cli creates. NOTE: You must build
  // the app first using npm run build or npm run build-dev in order to create
  // this file.
  win.loadFile('dist/index.html');
};

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
