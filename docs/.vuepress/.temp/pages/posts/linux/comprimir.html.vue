<template><h1 id="compresion-de-archivos" tabindex="-1"><a class="header-anchor" href="#compresion-de-archivos" aria-hidden="true">#</a> Compresión de Archivos</h1>
<h2 id="comprimir-y-descomprimir-tar-tar" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-tar-tar" aria-hidden="true">#</a> Comprimir y descomprimir .tar (tar)</h2>
<ul>
<li>Para comprimir archivos .tar, debemos utilizar:</li>
</ul>
<p><code>tar cvf archivo.tar /archivo/carpeta/*</code></p>
<ul>
<li>Para descomprimir archivos .tar, debemos utilizar:
<code>tar xvf archivo.tar</code></li>
</ul>
<h2 id="comprimir-y-descomprimir-tar-gz-tar-z-tgz-tar-con-gzip" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-tar-gz-tar-z-tgz-tar-con-gzip" aria-hidden="true">#</a> Comprimir y descomprimir .tar.gz .tar.z .tgz (tar con gzip)</h2>
<ul>
<li>Para comprimir .tar.gz o .tar.z o .tgz, debemos utilizar:</li>
</ul>
<p><code>tar czvf archivo.tar.gz /archivo/carpeta/*</code></p>
<ul>
<li>Para descomprimir .tar.gz o .tar.z o .tgz, debemos utilizar:</li>
</ul>
<p><code>tar xzvf archivo.tar.gz</code></p>
<p>Comprimir y descomprimir .gz (gzip)
Lo primero a tener en cuenta, es que gzip solo comprime archivos, no directorios.</p>
<p>Para comprimir .gz, debemos utilizar:</p>
<p>1
gzip -q archivo
(El archivo comprime, y lo renombra como archivo.gz)</p>
<p>Para descomprimir .gz, debemos utilizar:</p>
<p>1
gzip -d archivo.gz
Comprimir y descomprimir .bz2 (bzip2)
Lo primero a tener en cuenta, es que bzip2 solo comprime archivos, no directorios.</p>
<p>Para comprimir .bz2, debemos utilizar:</p>
<p>1
bzip2 archivo
Para descomprimir .bz2, debemos utilizar:</p>
<p>1
bzip2 -d archivo.bz2
Comprimir y descomprimir .zip (zip)
Para comprimir .zip, debemos utilizar:</p>
<p>1
zip archivo.zip /carpeta/archivos
Para descomprimir .zip, debemos utilizar:</p>
<p>1
unzip archivo.zip
Comprimir y descomprimir .rar (rar)
Para comprimir .rar, debemos utilizar:</p>
<p>1
rar -a archivo.rar /carpeta/archivos
Para descomprimir .rar, debemos utilizar:</p>
<p>1
rar -x archivo.rar</p>
</template>
