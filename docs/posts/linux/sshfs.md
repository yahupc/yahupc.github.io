# sshfs  

+ En informática, SSHFS (SSH Filesystem) es un cliente de sistema de archivos para montar e interactuar con directorios y archivos ubicados en un servidor remoto o estación de trabajo a través de una conexión ssh normal. El cliente interactúa con el sistema de archivos remoto a través del Protocolo de transferencia de archivos SSH (SFTP), un protocolo de red que brinda acceso a archivos, transferencia de archivos y funcionalidad de administración de archivos sobre cualquier flujo de datos confiable que fue diseñado como una extensión de Secure Shell. protocolo (SSH) versión 2.0. La implementación actual de SSHFS usando FUSE es una reescritura de una versión anterior. La reescritura fue realizada por Miklos Szeredi, quien también escribió FUSE.

[Fuente](https://en.wikipedia.org/wiki/SSHFS)

> Esto es muy importante por que al tener una ruta de nuestro servidor remoto como si estuviera en local (montada) , podemos tratarla como tal, como por ejemplo: Intercambiar archivos, aprovechar las configuraciones locales de nuestros Editores de texto para modificar nuestro codigo fuente, etc.

## Instalación: 
```sh
sudo apt install sshfs
```
## Montar archivos remotos: 
```sh
# Crear la carpeta donde montaremos nuestra ruta remota: 
# (Puedes elegir cualquier ruta de tu computador)
mkdir /mnt/remote_server

# Montando la ruta remota en la carpeta creada:
sshfs <usuario>@XX.XX.XX.XXX:/<ruta a montar> /mnt/remote_server

# Te pedira clave del servidor remoto y Listo!.

```

> En este momento puedes acceder a la ruta local /mnt/remote_server y veras el contenido de tu servidor remoto.

## Desmontar archivos remotos :

```sh
# Para desmontar la carpeta remota
fusermount -u /mnt/remote_server

# Con ello dejaras de tener acceso localmente a tu servidor remoto.
```

[Video de Referencia](https://www.youtube.com/watch?v=SY2AAQlnk2E&t=692s)

