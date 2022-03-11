import{_ as l,r,o as i,a as o,b as n,f as c,F as t,e as s,d as a}from"./app.1659f57a.js";var p="/datascience/anaconda-boltons.png",d="/datascience/anaconda-boltons-channel.png";const u={},b=s(`<h1 id="anaconda-comandos-avanzados" tabindex="-1"><a class="header-anchor" href="#anaconda-comandos-avanzados" aria-hidden="true">#</a> Anaconda: Comandos Avanzados</h1><ul><li>Creamos un ambiente virtual (py39)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda create --name py39 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Podemos instalar algun paquete que desearamos.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> boltons
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>No se instal\xF3 correctamente, muestra el siguiente mensaje</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Collecting package metadata <span class="token punctuation">(</span>current_repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Collecting package metadata <span class="token punctuation">(</span>repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
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

To search <span class="token keyword">for</span> alternate channels that may provide the conda package you&#39;re
looking for, navigate to

    https://anaconda.org

and use the search bar at the <span class="token function">top</span> of the page.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,7),m=a("Nos dirigimos a la pagina indicada y buscamos informacion del paquete. "),h={href:"https://anaconda.org",target:"_blank",rel:"noopener noreferrer"},v=a("anaconda.org"),g=a(". "),f=n("img",{src:p,alt:"boltons",loading:"lazy"},null,-1),k=n("li",null,[a("De esta forma encontraremos diversos canales con su respectivo Sistema operativo, donde podremos instalar dicho paquete. "),n("img",{src:d,alt:"boltons",loading:"lazy"})],-1),w=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> --channel conda-forge boltons
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Podemos comprar la correcta instalacion con el comando <code>conda list boltons</code></li></ul><h2 id="revisiones" tabindex="-1"><a class="header-anchor" href="#revisiones" aria-hidden="true">#</a> Revisiones</h2><ul><li>Cada vez que hacemos una instalacion de algun paquete siempre se genera una <strong>revision</strong> de este. Por tanto podemos regresar en el tiempo a una revsion anterior si asi lo desearamos.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda list --revision
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado(ejemplo)
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
     ca-certificates  {2022.2.1 (defaults/win-64) -&gt; 2021.10.8 (conda-forge/win-64)}
     certifi  {2021.10.8 (defaults/win-64) -&gt; 2021.10.8 (conda-forge/win-64)}
     openssl  {1.1.1m (defaults/win-64) -&gt; 1.1.1l (conda-forge/win-64)}
    +boltons-21.0.0 (conda-forge/noarch) 
    +python_abi-3.9 (conda-forge/win-64)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li>Como vemos en el resultado , tenemos dos revisiones <em>rev 0 y rev 1</em> . Podemos regresar a la revision que queramos.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> --revision <span class="token number">0</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Con esto habremos desinstalado el paquete <em>boltons</em> ya que en la <em>rev 0</em> no existia dicho paquete. Comprobamos con <code>conda list boltons</code> veras que ya no esta el paquete. Ademas podras revisar la lista de revisiones nuevamente con <code>conda list --revision</code></li></ul><h2 id="exportando-ambientes-env" tabindex="-1"><a class="header-anchor" href="#exportando-ambientes-env" aria-hidden="true">#</a> Exportando ambientes (env)</h2><ul><li>Para exportar tu ambientes conda, podrias utilizar cualquiera de los siguientes comandos. Te recomiendo el 3ero.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> <span class="token builtin class-name">export</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Removera el texto a\xF1adido a las versiones</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --no-builds
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Exportar\xE1 las dependencias que indicamos manualmente</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --from-history
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Este comando te permitir\xE1 crear un archivo yml</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --from-history --file environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="restaurar-un-ambiente-a-partir-de-una-archivo" tabindex="-1"><a class="header-anchor" href="#restaurar-un-ambiente-a-partir-de-una-archivo" aria-hidden="true">#</a> Restaurar un ambiente a partir de una archivo</h2><ul><li>Con el archivo creado anteriormente podemos replicar un ambiente.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> create --file environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18);function x(_,y){const e=r("ExternalLinkIcon");return i(),o(t,null,[b,n("ul",null,[n("li",null,[m,n("a",h,[v,c(e)]),g,f]),k]),w],64)}var z=l(u,[["render",x]]);export{z as default};
