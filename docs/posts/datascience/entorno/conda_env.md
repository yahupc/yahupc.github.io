---
icon: python
category :
  - data science
star: true
---

# Crear , actualizar y eliminar ambientes y librerias

+ Revisar nuestros ambientes conda en nuestra computadora.
```sh
conda env list

#resultado (ejemplo)
base                  *  /home/yahupc/anaconda3
```
## Crear ambiente (env)
```sh
#Sintaxis
#$ conda create --name [nombre] [paquete]=[versión]
create --name py35 python=3.5 pandas

#Al finalizar nos aparecerá un mensaje como este:

# To activate this environment, use
#
#     $ conda activate py35
#
# To deactivate an active environment, use
#
#     $ conda deactivate
```
## Activar ambiente
+ Ejecutamos el comando activate para activar nuestro ambiente creado (py35)

```sh
conda activate py35

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

## Actualizando paquetes del ambiente.
```sh
conda updates pandas

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

## Eliminar librerias
```sh
conda remove pandas

# comprobando 
conda list pandas

#No encontraras resultados
# Name                    Version                   Build  Channel
```
## Eliminar ambientes
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