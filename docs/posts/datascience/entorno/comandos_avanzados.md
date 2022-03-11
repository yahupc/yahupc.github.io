---
icon: python
category :
  - data science
star: true
---
# Anaconda: Comandos Avanzados
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

## Revisiones
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

## Exportando ambientes (env)
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
## Restaurar un ambiente a partir de una archivo
+ Con el archivo creado anteriormente podemos replicar un ambiente.
```sh
conda env create --file environment.yml
```
