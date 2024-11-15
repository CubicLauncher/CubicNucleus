const downloadMinecraft = require('./Launcher/downloader.js');
const launchMinecraft = require('./Launcher/launcher.js');
const downloadManager = require('./Utils/downloadManager'); // Usamos la ruta correcta

module.exports = { 
    downloadMinecraft, 
    launchMinecraft,
    downloadManager 
};