<template><h1 id="sshfs" tabindex="-1"><a class="header-anchor" href="#sshfs" aria-hidden="true">#</a> sshfs</h1>
<ul>
<li>En informática, SSHFS (SSH Filesystem) es un cliente de sistema de archivos para montar e interactuar con directorios y archivos ubicados en un servidor remoto o estación de trabajo a través de una conexión ssh normal. El cliente interactúa con el sistema de archivos remoto a través del Protocolo de transferencia de archivos SSH (SFTP), un protocolo de red que brinda acceso a archivos, transferencia de archivos y funcionalidad de administración de archivos sobre cualquier flujo de datos confiable que fue diseñado como una extensión de Secure Shell. protocolo (SSH) versión 2.0. La implementación actual de SSHFS usando FUSE es una reescritura de una versión anterior. La reescritura fue realizada por Miklos Szeredi, quien también escribió FUSE.</li>
</ul>
<p><a href="https://en.wikipedia.org/wiki/SSHFS" target="_blank" rel="noopener noreferrer">Fuente<ExternalLinkIcon/></a></p>
<blockquote>
<p>Esto es muy importante por que al tener una ruta de nuestro servidor remoto como si estuviera en local (montada) , podemos tratarla como tal, como por ejemplo: Intercambiar archivos, aprovechar las configuraciones locales de nuestros Editores de texto para modificar nuestro codigo fuente, etc.</p>
</blockquote>
<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación:</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> sshfs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="montar-archivos-remotos" tabindex="-1"><a class="header-anchor" href="#montar-archivos-remotos" aria-hidden="true">#</a> Montar archivos remotos:</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Crear la carpeta donde montaremos nuestra ruta remota: </span>
<span class="token comment"># (Puedes elegir cualquier ruta de tu computador)</span>
<span class="token function">mkdir</span> /mnt/remote_server

<span class="token comment"># Montando la ruta remota en la carpeta creada:</span>
sshfs <span class="token operator">&lt;</span>usuario<span class="token operator">></span>@XX.XX.XX.XXX:/<span class="token operator">&lt;</span>ruta a montar<span class="token operator">></span> /mnt/remote_server

<span class="token comment"># Te pedira clave del servidor remoto y Listo!.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>En este momento puedes acceder a la ruta local /mnt/remote_server y veras el contenido de tu servidor remoto.</p>
</blockquote>
<h2 id="desmontar-archivos-remotos" tabindex="-1"><a class="header-anchor" href="#desmontar-archivos-remotos" aria-hidden="true">#</a> Desmontar archivos remotos :</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Para desmontar la carpeta remota</span>
fusermount -u /mnt/remote_server

<span class="token comment"># Con ello dejaras de tener acceso localmente a tu servidor remoto.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><a href="https://www.youtube.com/watch?v=SY2AAQlnk2E&amp;t=692s" target="_blank" rel="noopener noreferrer">Video de Referencia<ExternalLinkIcon/></a></p>
</template>
