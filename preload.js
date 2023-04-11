const { Titlebar, Color } = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
    // Title bar implemenation
    const titlebar = new Titlebar({
        backgroundColor: Color.BLUE
    });

    titlebar.updateTitle("Krypt Pad Lite");
});