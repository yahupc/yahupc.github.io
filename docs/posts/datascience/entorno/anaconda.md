---
icon: python
category :
  - data science
star: true
---
# Instalando Anaconda
![Anaconda](/datascience/anaconda.png)

+ Nos dirigimos a la pagina oficial de [Anaconda](https://www.anaconda.com/)
+ Descargamos el instalador dependiendo de nuestro sistema operativo.
> Si estas en Linux podrias usar el siguiente codigo en una terminal
```sh
wget -0 anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh
```
+ Nos dirigimos a la carpeta de descarga y ejecutamos en la terminal:
```sh
bash Anaconda3-2021.11-Linux-x86_64.sh
```
+ Das enter para revisar los Terminos y condiciones . Cuando te pida elegir el lugar de destino del programa. Dejas por defecto el que te indica, dando Enter otra vez.
+ Para finalizar te preguntará si deseas que el instalador inicie Anaconda3 al correr conda init? . Das "yes"
+ Al abir nuevamente una terminal veras en una esquina "Py base". El cual indica que Anaconda se ha instalado correctamente
+ Si quieres asegurarte puedes utilizar el comando
```sh
conda info

#resultado (ejemplo):
 active environment : base
    active env location : /home/yahupc/anaconda3
            shell level : 1
       user config file : /home/yahupc/.condarc
 populated config files : 
          conda version : 4.10.3
    conda-build version : 3.21.5
         python version : 3.9.7.final.0
       virtual packages : __linux=5.13.0=0
                          __glibc=2.34=0
                          __unix=0=0
                          __archspec=1=x86_64
       base environment : /home/yahupc/anaconda3  (writable)
      conda av data dir : /home/yahupc/anaconda3/etc/conda
  conda av metadata url : None
           channel URLs : https://repo.anaconda.com/pkgs/main/linux-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/linux-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache : /home/yahupc/anaconda3/pkgs
                          /home/yahupc/.conda/pkgs
       envs directories : /home/yahupc/anaconda3/envs
                          /home/yahupc/.conda/envs
               platform : linux-64
             user-agent : conda/4.10.3 requests/2.26.0 CPython/3.9.7 Linux/5.13.0-30-generic ubuntu/21.10 glibc/2.34
                UID:GID : 1000:1000
             netrc file : /home/yahupc/.netrc
           offline mode : False

```
Para iniciar Anaconda ejecuta el siguiente comando
```sh
jupyter-notebook

#resultado (ejemplo)
[I 2022-03-06 01:43:11.210 LabApp] JupyterLab extension loaded from /home/yahupc/.local/lib/python3.9/site-packages/jupyterlab
[I 2022-03-06 01:43:11.211 LabApp] JupyterLab application directory is /home/yahupc/.local/share/jupyter/lab
[I 01:43:11.217 NotebookApp] The port 8888 is already in use, trying another port.
[I 01:43:11.217 NotebookApp] Serving notebooks from local directory: /home/yahupc
[I 01:43:11.217 NotebookApp] Jupyter Notebook 6.4.8 is running at:
[I 01:43:11.218 NotebookApp] http://localhost:8888/?token=285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
[I 01:43:11.218 NotebookApp]  or http://127.0.0.1:8888/?token=285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
[I 01:43:11.218 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
```
> Elige alguno de los enlaces para abrir Anaconda en el navegador web
+ Ya podrias comenzar a crear tu primer notebook con Anaconda
![Jupyter Notebook](/datascience/jupyter-anaconda.png)
+ Creas tu primer Notebook con Anaconda y elegiste el env de python.
![Notebook con Anaconda](/datascience/anaconda1.png)
> ctrl + C, para detener jupyter-notebook.
+ Ahora al abrir el mismo archivo con VSCode. Podremos ver que se ha creado un "env conda".
![Anaconda en VSCode](/datascience/anaconda2.png)

