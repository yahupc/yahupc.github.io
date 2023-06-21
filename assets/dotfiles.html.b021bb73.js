import{_ as a,f as s}from"./app.70b26b94.js";const n={},e=s(`<h1 id="dotfiles" tabindex="-1"><a class="header-anchor" href="#dotfiles" aria-hidden="true">#</a> dotfiles</h1><ul><li>Los archivos dotfiles, son los archivos que utilizan algunos programas para su configuracion y personalizaci\xF3n. Estos estan ocultos y comienzan con la extension . (&quot;punto&quot;)</li><li>Si queremos pasar nuestra configuracion de un computador a otro. Podemos guardar estos archivos en algun gestor de versiones como github, gitlab, etc.</li><li>Antes de respaldar nuestros dotfiles , podriamos utilizar el programa llamado <em>stow</em>. El cual centraliza todos nuestros dotfiles en una sola carpeta para una mejor administraci\xF3n.</li></ul><h2 id="stow" tabindex="-1"><a class="header-anchor" href="#stow" aria-hidden="true">#</a> Stow</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Instalar stow</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y stow
<span class="token comment"># Crear carpeta donde guardaremos nuestros dotfiles.</span>
<span class="token function">mkdir</span> .dotfiles
<span class="token comment"># Mover todos los archivos de configuracion a la carpeta creada.</span>
<span class="token function">mv</span> <span class="token punctuation">[</span>archivo_de_configuracion<span class="token punctuation">]</span> ~/.dotfiles/
<span class="token comment"># Dirigirse al directorio creado (.dotfiles)</span>
<span class="token builtin class-name">cd</span> .dotfile
<span class="token comment"># Ya ubicados en el directorio ejecutamos el comando.</span>
stow <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>Esto crear\xE1 los enlaces directos de todos los archivos de configuracion, guardados en nuestra carpeta .dotfiles a nuestro home (/home/[username]).</li></ul><blockquote><p>De esta manera la configuraci\xF3n de nuestros programas no sufriran modificaci\xF3n alguna.</p></blockquote>`,6);function o(r,t){return e}var l=a(n,[["render",o]]);export{l as default};
