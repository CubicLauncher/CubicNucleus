const { launchMinecraft } = require('adlauncher-core');

launchMinecraft({
  user: {
    username: 'dani_adbg', // NOMBRE DE USUARIO,
  },
  version: '1.16.5', // VERSION DE JUEGO
  type: 'release', // TIPO DE VERSION
  gameDirectory: './minecraft', // RUTA DE JUEGO
  memory: {
    min: '2G', // MINIMO DE MEMORIA PARA USAR
    max: '6G', // MAXIMO DE MEMORIA PARA USAR
  },
  java: 'C:/Program Files/Bellsoft/LibericaJDK-8/bin/java.exe', // [OPCIONAL] POR DEFECTO USARÁ LA VERSION DEFAULT DE JAVA INSTALADA
  usersConfig: './users.json', // [OPCIONAL] POR DEFECTO BUSCARA EL ARCHIVO `usercache.json`
});