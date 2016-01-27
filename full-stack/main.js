//----------------------------------------------------------------------------------------------------------------------
/// Main Electron Application
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

//----------------------------------------------------------------------------------------------------------------------

crashReporter.start({
  productName: 'Freelancers',
  companyName: 'Skewed Aspect Studios',
  submitURL: 'http://skewedaspect.com/crash-report',
  autoSubmit: true
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // Load the main window
    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

    // Open the devtools.
    mainWindow.openDevTools();
});

app.on('window-all-closed', () => {
    app.quit();
});

//----------------------------------------------------------------------------------------------------------------------

