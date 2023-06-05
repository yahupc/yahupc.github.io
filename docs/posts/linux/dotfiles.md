Los archivos dotfiles, son los archivos que en sistemas unix, comienzan con un punto (.) , estos archivos , son archivos ocultos y sirven para configurar al programa que hace referencia.
Para ello hago uso del programa stow.
+ Esto me permite manejar todos mis dotfiles en una carpeta aperte y solo proporcionar enlaces directos de estos al directorio home
```shell
# Crear carpeta 
mkdir dotfiles
# Dirigirse al archivo creado (.dotfiles)
cd dotfile
# Ya en la carpeta ejecutamos el comando.
stow .
```
>Esto creará los enlaces directos.
