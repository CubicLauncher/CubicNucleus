// downloadManager.js
class DownloadManager {
    constructor() {
      this._downloadPercentage = 0;
      this._listeners = new Set();
    }
  
    get downloadPercentage() {
      return this._downloadPercentage;
    }
  
    set downloadPercentage(value) {
      this._downloadPercentage = value;
      this._notifyListeners();
    }
  
    addListener(callback) {
      this._listeners.add(callback);
    }
  
    removeListener(callback) {
      this._listeners.delete(callback);
    }
  
    _notifyListeners() {
      for (const listener of this._listeners) {
        listener(this._downloadPercentage);
      }
    }
  }
  
  // Creamos una única instancia que será compartida en toda la aplicación
  const downloadManager = new DownloadManager();
  module.exports = downloadManager;