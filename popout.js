const { ipcRenderer } = require('electron');

const button = document.getElementById('btn');


button.addEventListener('click', () => {
  ipcRenderer.send('Popup', {user: "jdog787", replname: "ot-catchup"})
});