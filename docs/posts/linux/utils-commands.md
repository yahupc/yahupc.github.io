---
icon: code
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
De local a Remoto:
```sh
scp nombre_archivo usuario@servidor:ruta_servidor_donde_colocar_archivo
```
+ Para transferencia de un archivo de un computador local a otro remoto via SSH:<br>
`scp  archivo_a_enviar root@192.168.3.0:/var/www/ejemplo.com/storage/`
+ Para transferencia de una carpeta completa de un computador local a otro remoto via SSH:<br>
`scp -r file root@192.168.3.0:/var/www/ejemplo.com/storage/`
Donde "file" es la carpeta a compartir y el parametro "-r" indica recursividad, hara que se envie toda la carpeta y su contenido por completo.

De Remoto a local:
```sh
scp usuario@servidor:ruta_servidor_donde_esta_el_archivo ruta_de_destino_local
```
+ Para transferencia de un archivo de un computador remoto a otro local via SSH:<br>
`scp root@192.168.3.0:/var/www/ejemplo.com/storage/archivo_a_enviar /home/user/documents/`
+ Para transferencia de una carpeta completa de un computador remoto a otro local via SSH:<br>
`scp -r root@192.168.3.0:/var/www/ejemplo.com/storage/file /home/user/documents/`
Donde "file" es la carpeta a compartir y el parametro "-r" indica recursividad, hara que se envie toda la carpeta y su contenido por completo.

## Analizar logs:
+ journald es el demonio de systemd que recopila los registros de varias fuentes de registro como syslog.
`journalctl --since "2020-07-10 15:10:00" --until "2020-07-12" >> test.log`

## Borrar la extension de los archivos:
+ En este caso si en un directorio tenemos todos los archivos con la extension .old  podemos quitarsela con el comando anterior.
```sh
ls *.old | sed 's/\(.*\).old$/mv & \1/' |sh
```

