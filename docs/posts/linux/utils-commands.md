---
icon: code
date: 
sticky: true
category :
  -  linux
star: true
---
# Comandos Utiles
Cuando uses Linux , una de las maravillas que tiene este sistema operativo, es su terminal.  
Puedes realizar practicamente lo que quieras con el.  
Aqui te daré algunos comandos que utilizaras con frecuencia, en este sistema.

## Transferencia de archivos
```sh
scp nombre_archivo usuario@servidor:ruta_servidor_donde_colocar_archivo
```
+ Para transferencia de un archivo de un computador a otro via SSH:<br>
`scp  archivo_a_enviar root@192.168.3.0:/var/www/ejemplo.com/storage/`  
+ Para transferencia de una carpeta completa de un computador a otro via SSH:<br>
`scp -r file root@192.168.3.0:/var/www/ejemplo.com/storage/`  
Donde "file" es la carpeta a compartir y el parametro "-r" indica recursividad, hara que se envie toda la carpeta y su contenido por completo.