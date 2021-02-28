const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        center: true,
        closable: true
    });

    mainWindow.setTitle('pgAdmin4');
    mainWindow.setMenuBarVisibility(false);
	
	// TODO: Make this configurable (with default) before the url is loaded.
    mainWindow.loadURL('http://localhost:5050/browser/');
    
	// FIXME: This does not work properly. When attempting to close the webpage, 
	//        a popup is created to confirm. This popup is not visible in the 
	//        electron app, therefore the app cannot be closed without a hard exit().
    mainWindow.on('close', (event) => {
        event.preventDefault();
        win = null;
        app.exit();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});