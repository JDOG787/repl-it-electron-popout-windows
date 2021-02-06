const { app, BrowserWindow, ipcMain } = require('electron')
let Main;

app.whenReady().then(() => {
  Main = new BrowserWindow({ 
    width: 800, height: 500, webPreferences: {
      preload: "./popout.js",
      nodeIntegration: true
    }
  })
  Main.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('Popup', (event, status) => {
  console.log(status)
  let Terminal = new BrowserWindow({ width: 500, height: 500 });
  Terminal.loadURL(`https://${status.replname}.${status.user}.repl.co/__logs`)
  // Terminal.loadURL(`file://${__dirname}/test.html`)
})