const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    toggleMaximizeRestore: () => ipcRenderer.send('toggle-maximize-restore')
})

console.log("preload.js loaded ok")