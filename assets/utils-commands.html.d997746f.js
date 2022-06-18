import{_ as a,e}from"./app.e1440902.js";const r={},o=e(`<h1 id="comandos-utiles" tabindex="-1"><a class="header-anchor" href="#comandos-utiles" aria-hidden="true">#</a> Comandos Utiles</h1><p>Cuando uses Linux , una de las maravillas que tiene este sistema operativo, es su terminal.<br> Puedes realizar practicamente lo que quieras con el.<br> Aqui te dar\xE9 algunos comandos que utilizaras con frecuencia, en este sistema.</p><h2 id="transferencia-de-archivos" tabindex="-1"><a class="header-anchor" href="#transferencia-de-archivos" aria-hidden="true">#</a> Transferencia de archivos</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> nombre_archivo usuario@servidor:ruta_servidor_donde_colocar_archivo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Para transferencia de un archivo de un computador a otro via SSH:<br><code>scp archivo_a_enviar root@192.168.3.0:/var/www/ejemplo.com/storage/</code></li><li>Para transferencia de una carpeta completa de un computador a otro via SSH:<br><code>scp -r file root@192.168.3.0:/var/www/ejemplo.com/storage/</code><br> Donde &quot;file&quot; es la carpeta a compartir y el parametro &quot;-r&quot; indica recursividad, hara que se envie toda la carpeta y su contenido por completo.</li></ul>`,5);function s(i,n){return o}var t=a(r,[["render",s]]);export{t as default};