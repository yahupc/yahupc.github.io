# Compresión de Archivos 
## Comprimir y descomprimir .tar (tar)
+ Para comprimir archivos .tar, debemos utilizar:  
`tar cvf archivo.tar /archivo/carpeta/*`  

+ Para descomprimir archivos .tar, debemos utilizar: 
`tar xvf archivo.tar`

## Comprimir y descomprimir .tar.gz .tar.z .tgz (tar con gzip)
+ Para comprimir .tar.gz o .tar.z o .tgz, debemos utilizar: 
`tar czvf archivo.tar.gz /archivo/carpeta/*`

+ Para descomprimir .tar.gz o .tar.z o .tgz, debemos utilizar: 
`tar xzvf archivo.tar.gz`

## Comprimir y descomprimir .gz (gzip)  
+ Lo primero a tener en cuenta, es que gzip solo comprime archivos, no directorios.  
+ Para comprimir .gz, debemos utilizar:  
`gzip -q archivo`  
(El archivo comprime, y lo renombra como archivo.gz)

+ Para descomprimir .gz, debemos utilizar:  
`zip -d archivo.gz`  

## Comprimir y descomprimir .bz2 (bzip2)  
+ Lo primero a tener en cuenta, es que bzip2 solo comprime archivos, no directorios.  
+ Para comprimir .bz2, debemos utilizar:  
`bzip2 archivo`  
+ Para descomprimir .bz2, debemos utilizar:  
`bzip2 -d archivo.bz2`  

## Comprimir y descomprimir .zip (zip)  
+ Para comprimir .zip, debemos utilizar:  
`zip archivo.zip /carpeta/archivos`  
+ Para descomprimir .zip, debemos utilizar:  
`unzip archivo.zip`  

## Comprimir y descomprimir .rar (rar)  
+ Para comprimir .rar, debemos utilizar:  
`rar -a archivo.rar /carpeta/archivos`  
+ Para descomprimir .rar, debemos utilizar:  
`rar -x archivo.rar`  


