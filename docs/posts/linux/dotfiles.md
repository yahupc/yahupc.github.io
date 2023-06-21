# dotfiles
+ Los archivos dotfiles, son los archivos que utilizan algunos programas para su configuracion y personalización. Estos estan ocultos y comienzan con la extension . ("punto")  
+ Si queremos pasar nuestra configuracion de un computador a otro. Podemos guardar estos archivos en algun gestor de versiones como github, gitlab, etc.
+ Antes de respaldar nuestros dotfiles , podriamos utilizar el programa llamado *stow*. El cual centraliza todos nuestros dotfiles en una sola carpeta para una mejor administración.

## Stow
```shell
#Instalar stow
sudo apt-get install -y stow
# Crear carpeta donde guardaremos nuestros dotfiles.
mkdir .dotfiles
# Mover todos los archivos de configuracion a la carpeta creada.
mv [archivo_de_configuracion] ~/.dotfiles/
# Dirigirse al directorio creado (.dotfiles)
cd .dotfile
# Ya ubicados en el directorio ejecutamos el comando.
stow .
```
+ Esto creará los enlaces directos de todos los archivos de configuracion, guardados en nuestra carpeta .dotfiles a nuestro home (/home/[username]). 
> De esta manera la configuración de nuestros programas no sufriran modificación alguna.
