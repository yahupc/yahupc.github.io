---
icon: python
date: 
category :
  -  data science
star: true
---

# Configuración de entorno para analisis de Datos
## 1. Extensiones VSCode
+ Python
+ Magic Python
+ Material Icon Theme
+ Rainbow Brackets
+ Remote Development

### 1.1. Notebook dentro de VSCode
+ Crea una carpeta , añade un archivo en ella con la siguiente extension ".ipynb"
> Visual Studio Code te recomendará instalar las extensiones necesarias para ejecutar tu Jupyter Notebook.
![Jupyter Notebook](/datascience/jupiter_notebook1.png)

+ Puedes obtener el mismo resultado ejecutando los siguientes comandos desde el terminal.

``` sh
pip3 install ipykernel
pip3 install jupyter
pip3 install notebook
```
> Si despues de instalar estos programas tienes problemas que no te reconoce los comnandos.
`command not found: jupyter` al ejecutar  `jupyter notebook`. Puedes utilizar el siguiente comando.

```sh
sudo -H pip install jupyter
 ```
Execute a command as another user -H
 The -H (HOME) option requests that the security policy set the HOME environment variable to the home directory of the target user (root by default) as specified by the password database. Depending on the policy, this may be the default behavior.

+ Para  comprobar que tienes instalado correctamente Jupyter ejecuta en consola el siguiente comando:
```sh
jupyter --version
```
```
# resultado (ejemplo):
Selected Jupyter core packages...
IPython          : 8.1.1
ipykernel        : 6.9.1
ipywidgets       : 7.6.5
jupyter_client   : 7.1.2
jupyter_core     : 4.9.2
jupyter_server   : 1.13.5
jupyterlab       : 3.3.0
nbclient         : 0.5.11
nbconvert        : 6.4.2
nbformat         : 5.1.3
notebook         : 6.4.8
qtconsole        : 5.2.2
traitlets        : 5.1.1

```
 >Puedes usar Jupyter Notebook fuera de Vscode con env
[How to Install Jupyter Notebook on Ubuntu 20.04 via env](https://linuxways.net/ubuntu/how-to-install-jupyter-notebook-on-ubuntu-20-04/)


## 2. Instalacion de Anaconda
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
```
```
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
```
```
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

## 3. Anaconda: Creacion, clonacion y eliminacion de ambientes

+ Revisar nuestros ambientes conda en nuestra computadora.
```sh
conda env list
```
```
#resultado (ejemplo)
base                  *  /home/yahupc/anaconda3
```
### 3.1. Crear ambiente (env)
```sh
#Sintaxis
#$ conda create --name [nombre] [paquete]=[versión]
create --name py35 python=3.5 pandas
```
```
#Al finalizar nos aparecerá un mensaje como este:

# To activate this environment, use
#
#     $ conda activate py35
#
# To deactivate an active environment, use
#
#     $ conda deactivate
```
### 3.2. Activar ambiente
+ Ejecutamos el comando activate para activar nuestro ambiente creado (py35)

```sh
conda activate py35
```
```
#resultado (ejemplo). Ahora en una esquina tu terminal ya tendra un nuevo entorno
(py35) λ
```
+ Con ello ya tenemos instalado un ambiente (env) de python en la version 3.5 y la libreria pandas instalada. Podemos comprobarlo con el comando `conda list`
```sh
# packages in environment at d:\Installer\anaconda3\envs\py35:
#
# Name                    Version                   Build  Channel
blas                      1.0                         mkl
certifi                   2020.6.20          pyhd3eb1b0_3
icc_rt                    2019.0.0             h0cc432a_1
intel-openmp              2022.0.0          haa95532_3663
mkl                       2022.0.0           haa95532_115
numpy                     1.14.2           py35h5c71026_0
pandas                    0.23.4           py35h830ac7b_0
pip                       10.0.1                   py35_0
python                    3.5.6                he025d50_0
python-dateutil           2.8.2              pyhd3eb1b0_0
pytz                      2021.3             pyhd3eb1b0_0
setuptools                40.2.0                   py35_0
six                       1.16.0             pyhd3eb1b0_1
vc                        14.2                 h21ff451_1
vs2015_runtime            14.27.29016          h5e58377_2
wheel                     0.37.1             pyhd3eb1b0_0
wincertstore              0.2              py35hfebbdb8_0
```
+ Puedes hacer un filtrado con `conda panda list`
```sh 
# resultado (ejemplo)
# Name                    Version                   Build  Channel
pandas                    0.23.4           py35h830ac7b_0
```

### 3.4. Actualizando paquetes del ambiente.
```sh
conda updates pandas
```
```
#resultado (ejemplo)
Collecting package metadata (current_repodata.json): done
Solving environment: done


==> WARNING: A newer version of conda exists. <==
  current version: 4.10.3
  latest version: 4.11.0

Please update conda by running

    $ conda update -n base -c defaults conda

# All requested packages already installed.
```
+ Si conoces una version en especifico la puedes instalar
```sh
conda install pandas=1.2
```
```
#El resultado te indicara si tu ambiente es apto para la instalacion o si 
#tendras que hacer algun cambio :

Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: /
Found conflicts! Looking for incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed

UnsatisfiableError: The following specifications were found
to be incompatible with the existing python installation in your environment:

Specifications:

  - pandas=1.2 -> python[version='>=3.7,<3.8.0a0|>=3.8,<3.9.0a0|>=3.9,<3.10.0a0']

Your python: python=3.5

If python is on the left-most side of the chain, that's the version you've asked for.
When python appears to the right, that indicates that the thing on the left is somehow
not available for the python version you are constrained to. Note that conda will not
change your python version to a different minor version unless you explicitly specify
```

+ En este caso nos indica que la version de pandas que deseo instalar, necesita previamente que la version del python de mi ambiente sea >= 3.7.
+ Podrias hacer un `conda update python` o tambien podrias instalar una version en especifico:
```sh
conda install python=3.9 pandas=1.2
```
```
#Despues de la instalacion puedes comprobar que las versiones se actualizaron:

#resultado (ejemplo)
# Name                    Version                   Build  Channel
blas                      1.0                         mkl
ca-certificates           2022.2.1             haa95532_0
certifi                   2021.10.8        py39haa95532_2
icc_rt                    2019.0.0             h0cc432a_1
intel-openmp              2022.0.0          haa95532_3663
mkl                       2020.2                      256
mkl-service               2.3.0            py39h196d8e1_0
mkl_fft                   1.3.0            py39h46781fe_0
mkl_random                1.0.2            py39h848d8c7_0
numpy                     1.19.2           py39h729668d_0
numpy-base                1.19.2           py39hbd0edd7_0
openssl                   1.1.1m               h2bbff1b_0
pandas                    1.2.4            py39hd77b12b_0
pip                       21.2.4           py39haa95532_0
python                    3.9.7                h6244533_1
python-dateutil           2.8.2              pyhd3eb1b0_0
pytz                      2021.3             pyhd3eb1b0_0
setuptools                58.0.4           py39haa95532_0
six                       1.16.0             pyhd3eb1b0_1
sqlite                    3.37.2               h2bbff1b_0
tzdata                    2021e                hda174b7_0
vc                        14.2                 h21ff451_1
vs2015_runtime            14.27.29016          h5e58377_2
wheel                     0.37.1             pyhd3eb1b0_0
wincertstore              0.2              py39haa95532_2

```
:::tip
Nuestro entorno de trabajo (py35) ahora tiene la version 3.9 de python. 
Para mantener un orden podriamos cambiar al nombre a "py39"
```sh
conda create --name py39 --copy --clone py35
```
```
#resultado (ejemplo)
Source:      d:\Installer\anaconda3\envs\py35
Destination: d:\Installer\anaconda3\envs\py39
Packages: 25
Files: 3
Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate py39
#
# To deactivate an active environment, use
#
#     $ conda deactivate

```
:::

### 3.5. Eliminar librerias
```sh
conda remove pandas
```
```sh
# comprobando 
conda list pandas
```
```
#No encontraras resultados
# Name                    Version                   Build  Channel
```
### 3.6. Eliminar ambientes
```sh
conda env remove --name py35
```
:::tip
+ Para eliminar un ambiente tiene que tener presente que No debes estar actualmente en el.
Ejemplo:
```sh
#Si deseas eliminar el ambiente py39
conda env remove --name py39

#Te aparecera un mensaje como este 
CondaEnvironmentError: cannot remove current environment. deactivate and run conda remove again

#Primero debes desactivarlo con el comando
conda deactivate
 
#Te dirigira al ambiente base (py base). Ya luego podras remove dicho ambiente
conda env remove --name py39

#resultado (ejemplo)
Remove all packages in environment d:\Installer\anaconda3\envs\py39:
```
:::

> De esta forma podras crear, copiar, activar , eliminar desactivar ambientes de trabajo y librerias con Anaconda

## 4. Anaconda: Comandos Avanzados
+ Creamos un ambiente virtual (py39)
```sh
conda create --name py39 python=3.9 pandas=1.2
```
+ Podemos instalar algun paquete que desearamos.
```sh
conda install boltons
```
> No se instaló correctamente, muestra el siguiente mensaje
```sh
Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.

PackagesNotFoundError: The following packages are not available from current channels:

  - boltons

Current channels:

  - https://repo.anaconda.com/pkgs/main/win-64
  - https://repo.anaconda.com/pkgs/main/noarch
  - https://repo.anaconda.com/pkgs/r/win-64
  - https://repo.anaconda.com/pkgs/r/noarch
  - https://repo.anaconda.com/pkgs/msys2/win-64
  - https://repo.anaconda.com/pkgs/msys2/noarch

To search for alternate channels that may provide the conda package you're
looking for, navigate to

    https://anaconda.org

and use the search bar at the top of the page.
```
+ Nos dirigimos a la pagina indicada y buscamos informacion del paquete. [anaconda.org](https://anaconda.org).
![boltons](/datascience/anaconda-boltons.png)
+ De esta forma encontraremos diversos canales con su respectivo Sistema operativo, donde podremos instalar dicho paquete.
![boltons](/datascience/anaconda-boltons-channel.png)
```sh
conda install --channel conda-forge boltons
```
+ Podemos comprar la correcta instalacion con el comando `conda list boltons`

### 4.1. Revisiones
+ Cada vez que hacemos una instalacion de algun paquete siempre se genera una **revision** de este. Por tanto podemos regresar en el tiempo a una revsion anterior si asi lo desearamos.
```sh
conda list --revision
```
```
#resultado(ejemplo)
2022-03-09 18:52:30  (rev 0)
    +blas-1.0 (defaults/win-64)
    +bottleneck-1.3.2 (defaults/win-64)
    +ca-certificates-2022.2.1 (defaults/win-64)
    +certifi-2021.10.8 (defaults/win-64)
    +intel-openmp-2021.4.0 (defaults/win-64)
    +mkl-2021.4.0 (defaults/win-64)
    +mkl-service-2.4.0 (defaults/win-64)
    +mkl_fft-1.3.1 (defaults/win-64)
    +mkl_random-1.2.2 (defaults/win-64)
    +numexpr-2.8.1 (defaults/win-64)
    +numpy-1.21.5 (defaults/win-64)
    +numpy-base-1.21.5 (defaults/win-64)
    +openssl-1.1.1m (defaults/win-64)
    +packaging-21.3 (defaults/noarch)
    +pandas-1.2.5 (defaults/win-64)
    +pip-21.2.4 (defaults/win-64)
    +pyparsing-3.0.4 (defaults/noarch)
    +python-3.9.7 (defaults/win-64)
    +python-dateutil-2.8.2 (defaults/noarch)
    +pytz-2021.3 (defaults/noarch)
    +setuptools-58.0.4 (defaults/win-64)
    +six-1.16.0 (defaults/noarch)
    +sqlite-3.37.2 (defaults/win-64)
    +tzdata-2021e (defaults/noarch)
    +vc-14.2 (defaults/win-64)
    +vs2015_runtime-14.27.29016 (defaults/win-64)
    +wheel-0.37.1 (defaults/noarch)
    +wincertstore-0.2 (defaults/win-64)

2022-03-10 23:38:18  (rev 1)
     ca-certificates  {2022.2.1 (defaults/win-64) -> 2021.10.8 (conda-forge/win-64)}
     certifi  {2021.10.8 (defaults/win-64) -> 2021.10.8 (conda-forge/win-64)}
     openssl  {1.1.1m (defaults/win-64) -> 1.1.1l (conda-forge/win-64)}
    +boltons-21.0.0 (conda-forge/noarch) 
    +python_abi-3.9 (conda-forge/win-64)
```
+ Como vemos en el resultado , tenemos dos revisiones *rev 0 y rev 1* . Podemos regresar a la revision que queramos.
```sh
conda install --revision 0 
```
+ Con esto habremos desinstalado el paquete *boltons* ya que en la *rev 0* no existia dicho paquete. Comprobamos con `conda list boltons` veras que ya no esta el paquete. Ademas podras revisar la lista de revisiones nuevamente con `conda list --revision`

### 4.2. Exportando ambientes (env)
+ Para exportar tu ambientes conda, podrias utilizar cualquiera de los siguientes comandos. Te recomiendo el 3ero.
```sh
conda env export
```
```sh
#Removera el texto añadido a las versiones
conda env export --no-builds
```
```sh
#Exportará las dependencias que indicamos manualmente
conda env export --from-history
```
```sh
#Este comando te permitirá crear un archivo yml
conda env export --from-history --file environment.yml
```
### 4.3. Restaurar un ambiente a partir de una archivo
+ Con el archivo creado anteriormente podemos replicar un ambiente.
```sh
conda env create --file environment.yml
```
## 5. Anaconda: Acelerar ambientes virtuales con Mamba
+ Pueda que al crear tus ambientes de trabajo para tus proyectos, estos sean muy grandes y un poco dificiles de mantener, para existe *Mamba* que te puede ayudar.
```sh
conda install --channel conda-forge mamba
```
+ Al finalizar la instalacion veras que podras utilizar casi los mismos comandos que *conda* , pero ahora con *mamba*
```sh
conda env info
```

### Divide y vencerás.
