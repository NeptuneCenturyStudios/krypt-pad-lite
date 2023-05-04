const { contextBridge, ipcRenderer } = require('electron')

// Called when window is restored
let _onUnmaximized = null;
// Called when window is maximized
let _onMaximized = null;

contextBridge.exposeInMainWorld('electronAPI', {
    toggleMaximizeRestore: () => ipcRenderer.send('toggle-maximize-restore'),
    minimize: () => ipcRenderer.send('minimize'),
    close: () => ipcRenderer.send('close'),
    onUnmaximized: (callback) => { _onUnmaximized = callback },
    onMaximized: (callback) => { _onMaximized = callback }
})

// When the window is unmaximized, an event in the main process is raised that sends a message
// via IPC. This handler processes that message and raises a registered callback from the vue app.
ipcRenderer.on('unmaximized', () => {
    if (typeof _onUnmaximized === "function")
    {
        // Call the maximized callback so our vue app's titlebar knows it's been maximized.
        _onUnmaximized()
    }
})

// When the window is maximized, an event in the main process is raised that sends a message
// via IPC. This handler processes that message and raises a registered callback from the vue app.
ipcRenderer.on('maximized', () => {
    if (typeof _onMaximized === "function")
    {
        // Call the maximized callback so our vue app's titlebar knows it's been maximized.
        _onMaximized()
    }
})



console.log("preload.js loaded ok")