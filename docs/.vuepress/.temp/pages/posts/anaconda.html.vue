<template><h1 id="instalando-anaconda" tabindex="-1"><a class="header-anchor" href="#instalando-anaconda" aria-hidden="true">#</a> Instalando Anaconda</h1>
<ul>
<li>Nos dirigimos a la pagina oficial de <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer">Anaconda<ExternalLinkIcon/></a></li>
<li>Descargamos el instalador dependiendo de nuestro sistema operativo.</li>
</ul>
<blockquote>
<p>Si estas en Linux podrias usar el siguiente codigo en una terminal</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> -0 anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Nos dirigimos a la carpeta de descarga y ejecutamos en la terminal:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">bash</span> Anaconda3-2021.11-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Das enter para revisar los Terminos y condiciones . Cuando te pida elegir el lugar de destino del programa. Dejas por defecto el que te indica, dando Enter otra vez.</li>
<li>Para finalizar te preguntará si deseas que el instalador inicie Anaconda3 al correr conda init? . Das &quot;yes&quot;</li>
<li>Al abir nuevamente una terminal veras en una esquina &quot;Py base&quot;. El cual indica que Anaconda se ha instalado correctamente</li>
<li>Si quieres asegurarte puedes utilizar el comando</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda info

<span class="token comment">#resultado (ejemplo):</span>
 active environment <span class="token builtin class-name">:</span> base
    active <span class="token function">env</span> location <span class="token builtin class-name">:</span> /home/yahupc/anaconda3
            shell level <span class="token builtin class-name">:</span> <span class="token number">1</span>
       user config <span class="token function">file</span> <span class="token builtin class-name">:</span> /home/yahupc/.condarc
 populated config files <span class="token builtin class-name">:</span> 
          conda version <span class="token builtin class-name">:</span> <span class="token number">4.10</span>.3
    conda-build version <span class="token builtin class-name">:</span> <span class="token number">3.21</span>.5
         python version <span class="token builtin class-name">:</span> <span class="token number">3.9</span>.7.final.0
       virtual packages <span class="token builtin class-name">:</span> <span class="token assign-left variable">__linux</span><span class="token operator">=</span><span class="token number">5.13</span>.0<span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__glibc</span><span class="token operator">=</span><span class="token number">2.34</span><span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__unix</span><span class="token operator">=</span><span class="token number">0</span><span class="token operator">=</span><span class="token number">0</span>
                          <span class="token assign-left variable">__archspec</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">=</span>x86_64
       base environment <span class="token builtin class-name">:</span> /home/yahupc/anaconda3  <span class="token punctuation">(</span>writable<span class="token punctuation">)</span>
      conda av data <span class="token function">dir</span> <span class="token builtin class-name">:</span> /home/yahupc/anaconda3/etc/conda
  conda av metadata url <span class="token builtin class-name">:</span> None
           channel URLs <span class="token builtin class-name">:</span> https://repo.anaconda.com/pkgs/main/linux-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/linux-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache <span class="token builtin class-name">:</span> /home/yahupc/anaconda3/pkgs
                          /home/yahupc/.conda/pkgs
       envs directories <span class="token builtin class-name">:</span> /home/yahupc/anaconda3/envs
                          /home/yahupc/.conda/envs
               platform <span class="token builtin class-name">:</span> linux-64
             user-agent <span class="token builtin class-name">:</span> conda/4.10.3 requests/2.26.0 CPython/3.9.7 Linux/5.13.0-30-generic ubuntu/21.10 glibc/2.34
                <span class="token environment constant">UID</span>:GID <span class="token builtin class-name">:</span> <span class="token number">1000</span>:1000
             netrc <span class="token function">file</span> <span class="token builtin class-name">:</span> /home/yahupc/.netrc
           offline mode <span class="token builtin class-name">:</span> False

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>Para iniciar Anaconda ejecuta el siguiente comando</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>jupyter-notebook

<span class="token comment">#resultado (ejemplo)</span>
<span class="token punctuation">[</span>I <span class="token number">2022</span>-03-06 01:43:11.210 LabApp<span class="token punctuation">]</span> JupyterLab extension loaded from /home/yahupc/.local/lib/python3.9/site-packages/jupyterlab
<span class="token punctuation">[</span>I <span class="token number">2022</span>-03-06 01:43:11.211 LabApp<span class="token punctuation">]</span> JupyterLab application directory is /home/yahupc/.local/share/jupyter/lab
<span class="token punctuation">[</span>I 01:43:11.217 NotebookApp<span class="token punctuation">]</span> The port <span class="token number">8888</span> is already <span class="token keyword">in</span> use, trying another port.
<span class="token punctuation">[</span>I 01:43:11.217 NotebookApp<span class="token punctuation">]</span> Serving notebooks from <span class="token builtin class-name">local</span> directory: /home/yahupc
<span class="token punctuation">[</span>I 01:43:11.217 NotebookApp<span class="token punctuation">]</span> Jupyter Notebook <span class="token number">6.4</span>.8 is running at:
<span class="token punctuation">[</span>I 01:43:11.218 NotebookApp<span class="token punctuation">]</span> http://localhost:8888/?token<span class="token operator">=</span>285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
<span class="token punctuation">[</span>I 01:43:11.218 NotebookApp<span class="token punctuation">]</span>  or http://127.0.0.1:8888/?token<span class="token operator">=</span>285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
<span class="token punctuation">[</span>I 01:43:11.218 NotebookApp<span class="token punctuation">]</span> Use Control-C to stop this server and shut down all kernels <span class="token punctuation">(</span>twice to skip confirmation<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote>
<p>Elige alguno de los enlaces para abrir Anaconda en el navegador web</p>
</blockquote>
<ul>
<li>Ya podrias comenzar a crear tu primer notebook con Anaconda
<img src="@source/../docs/.vuepress/public/datascience/jupyter-anaconda.png" alt="Jupyter Notebook" loading="lazy"></li>
<li>Creas tu primer Notebook con Anaconda y elegiste el env de python.
<img src="@source/../docs/.vuepress/public/datascience/anaconda1.png" alt="Notebook con Anaconda" loading="lazy"></li>
</ul>
<blockquote>
<p>ctrl + C, para detener jupyter-notebook.</p>
</blockquote>
<ul>
<li>Ahora al abrir el mismo archivo con VSCode. Podremos ver que se ha creado un &quot;env conda&quot;.
<img src="@source/../docs/.vuepress/public/datascience/anaconda2.png" alt="Anaconda en VSCode" loading="lazy"></li>
</ul>
<h2 id="ambientes-conda" tabindex="-1"><a class="header-anchor" href="#ambientes-conda" aria-hidden="true">#</a> Ambientes Conda</h2>
<ul>
<li>Revisar nuestros ambientes conda en nuestra computadora.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">env</span> list

<span class="token comment">#resultado (ejemplo)</span>
base                  *  /home/yahupc/anaconda3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
