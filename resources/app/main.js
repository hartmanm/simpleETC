'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function()
{
  if (process.platform != 'darwin')
  {
      app.quit();
  }
});

app.on('ready', function()
{
    mainWindow = new BrowserWindow(
    {
        width: 150,
        height: 47,
        icon: __dirname + '/icon.png',
        frame: false,
        resizable: false,
        x: 1300,
        y: 2
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function()
    {
        mainWindow = null;
    });

});
