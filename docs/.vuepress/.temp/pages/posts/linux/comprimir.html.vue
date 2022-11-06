<template><h1 id="compresion-de-archivos" tabindex="-1"><a class="header-anchor" href="#compresion-de-archivos" aria-hidden="true">#</a> Compresión de Archivos</h1>
<h2 id="comprimir-y-descomprimir-tar-tar" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-tar-tar" aria-hidden="true">#</a> Comprimir y descomprimir .tar (tar)</h2>
<ul>
<li>
<p>Para comprimir archivos .tar, debemos utilizar:<br>
<code>tar cvf archivo.tar /archivo/carpeta/*</code></p>
</li>
<li>
<p>Para descomprimir archivos .tar, debemos utilizar:
<code>tar xvf archivo.tar</code></p>
</li>
</ul>
<h2 id="comprimir-y-descomprimir-tar-gz-tar-z-tgz-tar-con-gzip" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-tar-gz-tar-z-tgz-tar-con-gzip" aria-hidden="true">#</a> Comprimir y descomprimir .tar.gz .tar.z .tgz (tar con gzip)</h2>
<ul>
<li>
<p>Para comprimir .tar.gz o .tar.z o .tgz, debemos utilizar:
<code>tar czvf archivo.tar.gz /archivo/carpeta/*</code></p>
</li>
<li>
<p>Para descomprimir .tar.gz o .tar.z o .tgz, debemos utilizar:
<code>tar xzvf archivo.tar.gz</code></p>
</li>
</ul>
<h2 id="comprimir-y-descomprimir-gz-gzip" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-gz-gzip" aria-hidden="true">#</a> Comprimir y descomprimir .gz (gzip)</h2>
<ul>
<li>
<p>Lo primero a tener en cuenta, es que gzip solo comprime archivos, no directorios.</p>
</li>
<li>
<p>Para comprimir .gz, debemos utilizar:<br>
<code>gzip -q archivo</code><br>
(El archivo comprime, y lo renombra como archivo.gz)</p>
</li>
<li>
<p>Para descomprimir .gz, debemos utilizar:<br>
<code>zip -d archivo.gz</code></p>
</li>
</ul>
<h2 id="comprimir-y-descomprimir-bz2-bzip2" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-bz2-bzip2" aria-hidden="true">#</a> Comprimir y descomprimir .bz2 (bzip2)</h2>
<ul>
<li>Lo primero a tener en cuenta, es que bzip2 solo comprime archivos, no directorios.</li>
<li>Para comprimir .bz2, debemos utilizar:<br>
<code>bzip2 archivo</code></li>
<li>Para descomprimir .bz2, debemos utilizar:<br>
<code>bzip2 -d archivo.bz2</code></li>
</ul>
<h2 id="comprimir-y-descomprimir-zip-zip" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-zip-zip" aria-hidden="true">#</a> Comprimir y descomprimir .zip (zip)</h2>
<ul>
<li>Para comprimir .zip, debemos utilizar:<br>
<code>zip archivo.zip /carpeta/archivos</code></li>
<li>Para descomprimir .zip, debemos utilizar:<br>
<code>unzip archivo.zip</code></li>
</ul>
<h2 id="comprimir-y-descomprimir-rar-rar" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-rar-rar" aria-hidden="true">#</a> Comprimir y descomprimir .rar (rar)</h2>
<ul>
<li>Para comprimir .rar, debemos utilizar:<br>
<code>rar -a archivo.rar /carpeta/archivos</code></li>
<li>Para descomprimir .rar, debemos utilizar:<br>
<code>rar -x archivo.rar</code></li>
</ul>
</template>
