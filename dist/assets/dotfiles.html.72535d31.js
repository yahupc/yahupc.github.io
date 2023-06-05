import{_ as s,f as a}from"./app.7c46b1aa.js";const e={},n=a(`<p>Los archivos dotfiles, son los archivos que en sistemas unix, comienzan con un punto (.) , estos archivos , son archivos ocultos y sirven para configurar al programa que hace referencia. Para ello hago uso del programa stow.</p><ul><li>Esto me permite manejar todos mis dotfiles en una carpeta aperte y solo proporcionar enlaces directos de estos al directorio home</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Crear carpeta </span>
<span class="token function">mkdir</span> dotfiles
<span class="token comment"># Dirigirse al archivo creado (.dotfiles)</span>
<span class="token builtin class-name">cd</span> dotfile
<span class="token comment"># Ya en la carpeta ejecutamos el comando.</span>
stow <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>Esto crear\xE1 los enlaces directos.</p></blockquote>`,4);function o(r,c){return n}var t=s(e,[["render",o]]);export{t as default};
