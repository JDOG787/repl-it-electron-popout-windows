const { ipcRenderer } = require('electron');

const terminalBtn = document.getElementById('terminal');


terminalBtn.addEventListener('click', () => {
  ipcRenderer.send('Popup', {user: "jdog787", replname: "OT-Catchup"})
  console.log("clicked")
});