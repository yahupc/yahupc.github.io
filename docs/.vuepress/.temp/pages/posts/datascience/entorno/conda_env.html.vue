<template><h1 id="anaconda-creacion-clonacion-y-eliminacion-de-ambientes" tabindex="-1"><a class="header-anchor" href="#anaconda-creacion-clonacion-y-eliminacion-de-ambientes" aria-hidden="true">#</a> Anaconda: Creacion, clonacion y eliminacion de ambientes</h1>
<ul>
<li>Revisar nuestros ambientes conda en nuestra computadora.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">env</span> list

<span class="token comment">#resultado (ejemplo)</span>
base                  *  /home/yahupc/anaconda3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="crear-ambiente-env" tabindex="-1"><a class="header-anchor" href="#crear-ambiente-env" aria-hidden="true">#</a> Crear ambiente (env)</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#Sintaxis</span>
<span class="token comment">#$ conda create --name [nombre] [paquete]=[versión]</span>
create --name py35 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.5</span> pandas

<span class="token comment">#Al finalizar nos aparecerá un mensaje como este:</span>

<span class="token comment"># To activate this environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda activate py35</span>
<span class="token comment">#</span>
<span class="token comment"># To deactivate an active environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda deactivate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="activar-ambiente" tabindex="-1"><a class="header-anchor" href="#activar-ambiente" aria-hidden="true">#</a> Activar ambiente</h2>
<ul>
<li>Ejecutamos el comando activate para activar nuestro ambiente creado (py35)</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda activate py35

<span class="token comment">#resultado (ejemplo). Ahora en una esquina tu terminal ya tendra un nuevo entorno</span>
<span class="token punctuation">(</span>py35<span class="token punctuation">)</span> λ
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>Con ello ya tenemos instalado un ambiente (env) de python en la version 3.5 y la libreria pandas instalada. Podemos comprobarlo con el comando <code>conda list</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># packages in environment at d:\Installer\anaconda3\envs\py35:</span>
<span class="token comment">#</span>
<span class="token comment"># Name                    Version                   Build  Channel</span>
blas                      <span class="token number">1.0</span>                         mkl
certifi                   <span class="token number">2020.6</span>.20          pyhd3eb1b0_3
icc_rt                    <span class="token number">2019.0</span>.0             h0cc432a_1
intel-openmp              <span class="token number">2022.0</span>.0          haa95532_3663
mkl                       <span class="token number">2022.0</span>.0           haa95532_115
numpy                     <span class="token number">1.14</span>.2           py35h5c71026_0
pandas                    <span class="token number">0.23</span>.4           py35h830ac7b_0
pip                       <span class="token number">10.0</span>.1                   py35_0
python                    <span class="token number">3.5</span>.6                he025d50_0
python-dateutil           <span class="token number">2.8</span>.2              pyhd3eb1b0_0
pytz                      <span class="token number">2021.3</span>             pyhd3eb1b0_0
setuptools                <span class="token number">40.2</span>.0                   py35_0
six                       <span class="token number">1.16</span>.0             pyhd3eb1b0_1
vc                        <span class="token number">14.2</span>                 h21ff451_1
vs2015_runtime            <span class="token number">14.27</span>.29016          h5e58377_2
wheel                     <span class="token number">0.37</span>.1             pyhd3eb1b0_0
wincertstore              <span class="token number">0.2</span>              py35hfebbdb8_0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>Puedes hacer un filtrado con <code>conda panda list</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># resultado (ejemplo)</span>
<span class="token comment"># Name                    Version                   Build  Channel</span>
pandas                    <span class="token number">0.23</span>.4           py35h830ac7b_0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="actualizando-paquetes-del-ambiente" tabindex="-1"><a class="header-anchor" href="#actualizando-paquetes-del-ambiente" aria-hidden="true">#</a> Actualizando paquetes del ambiente.</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda updates pandas

<span class="token comment">#resultado (ejemplo)</span>
Collecting package metadata <span class="token punctuation">(</span>current_repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Solving environment: <span class="token keyword">done</span>


<span class="token operator">==</span><span class="token operator">></span> WARNING: A newer version of conda exists. <span class="token operator">&lt;=</span><span class="token operator">=</span>
  current version: <span class="token number">4.10</span>.3
  latest version: <span class="token number">4.11</span>.0

Please update conda by running

    $ conda update -n base -c defaults conda

<span class="token comment"># All requested packages already installed.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>Si conoces una version en especifico la puedes instalar</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>

<span class="token comment">#El resultado te indicara si tu ambiente es apto para la instalacion o si </span>
<span class="token comment">#tendras que hacer algun cambio :</span>

Collecting package metadata <span class="token punctuation">(</span>current_repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Collecting package metadata <span class="token punctuation">(</span>repodata.json<span class="token punctuation">)</span>: <span class="token keyword">done</span>
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: /
Found conflicts<span class="token operator">!</span> Looking <span class="token keyword">for</span> incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed

UnsatisfiableError: The following specifications were found
to be incompatible with the existing python installation <span class="token keyword">in</span> your environment:

Specifications:

  - <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span> -<span class="token operator">></span> python<span class="token punctuation">[</span>version<span class="token operator">=</span><span class="token string">'>=3.7,&lt;3.8.0a0|>=3.8,&lt;3.9.0a0|>=3.9,&lt;3.10.0a0'</span><span class="token punctuation">]</span>

Your python: <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.5</span>

If python is on the left-most side of the chain, that<span class="token string">'s the version you'</span>ve asked for.
When python appears to the right, that indicates that the thing on the left is somehow
not available <span class="token keyword">for</span> the python version you are constrained to. Note that conda will not
change your python version to a different minor version unless you explicitly specify
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul>
<li>En este caso nos indica que la version de pandas que deseo instalar, necesita previamente que la version del python de mi ambiente sea &gt;= 3.7.</li>
<li>Podrias hacer un <code>conda update python</code> o tambien podrias instalar una version en especifico:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>

<span class="token comment">#Despues de la instalacion puedes comprobar que las versiones se actualizaron:</span>

<span class="token comment">#resultado (ejemplo)</span>
<span class="token comment"># Name                    Version                   Build  Channel</span>
blas                      <span class="token number">1.0</span>                         mkl
ca-certificates           <span class="token number">2022.2</span>.1             haa95532_0
certifi                   <span class="token number">2021.10</span>.8        py39haa95532_2
icc_rt                    <span class="token number">2019.0</span>.0             h0cc432a_1
intel-openmp              <span class="token number">2022.0</span>.0          haa95532_3663
mkl                       <span class="token number">2020.2</span>                      <span class="token number">256</span>
mkl-service               <span class="token number">2.3</span>.0            py39h196d8e1_0
mkl_fft                   <span class="token number">1.3</span>.0            py39h46781fe_0
mkl_random                <span class="token number">1.0</span>.2            py39h848d8c7_0
numpy                     <span class="token number">1.19</span>.2           py39h729668d_0
numpy-base                <span class="token number">1.19</span>.2           py39hbd0edd7_0
openssl                   <span class="token number">1.1</span>.1m               h2bbff1b_0
pandas                    <span class="token number">1.2</span>.4            py39hd77b12b_0
pip                       <span class="token number">21.2</span>.4           py39haa95532_0
python                    <span class="token number">3.9</span>.7                h6244533_1
python-dateutil           <span class="token number">2.8</span>.2              pyhd3eb1b0_0
pytz                      <span class="token number">2021.3</span>             pyhd3eb1b0_0
setuptools                <span class="token number">58.0</span>.4           py39haa95532_0
six                       <span class="token number">1.16</span>.0             pyhd3eb1b0_1
sqlite                    <span class="token number">3.37</span>.2               h2bbff1b_0
tzdata                    2021e                hda174b7_0
vc                        <span class="token number">14.2</span>                 h21ff451_1
vs2015_runtime            <span class="token number">14.27</span>.29016          h5e58377_2
wheel                     <span class="token number">0.37</span>.1             pyhd3eb1b0_0
wincertstore              <span class="token number">0.2</span>              py39haa95532_2

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p>
<p>Nuestro entorno de trabajo (py35) ahora tiene la version 3.9 de python.
Para mantener un orden podriamos cambiar al nombre a &quot;py39&quot;</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda create --name py39 --copy --clone py35

<span class="token comment">#resultado (ejemplo)</span>
Source:      d:<span class="token punctuation">\</span>Installer<span class="token punctuation">\</span>anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>py35
Destination: d:<span class="token punctuation">\</span>Installer<span class="token punctuation">\</span>anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>py39
Packages: <span class="token number">25</span>
Files: <span class="token number">3</span>
Preparing transaction: <span class="token keyword">done</span>
Verifying transaction: <span class="token keyword">done</span>
Executing transaction: <span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token comment"># To activate this environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda activate py39</span>
<span class="token comment">#</span>
<span class="token comment"># To deactivate an active environment, use</span>
<span class="token comment">#</span>
<span class="token comment">#     $ conda deactivate</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div>
<h2 id="eliminar-librerias" tabindex="-1"><a class="header-anchor" href="#eliminar-librerias" aria-hidden="true">#</a> Eliminar librerias</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda remove pandas

<span class="token comment"># comprobando </span>
conda list pandas

<span class="token comment">#No encontraras resultados</span>
<span class="token comment"># Name                    Version                   Build  Channel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="eliminar-ambientes" tabindex="-1"><a class="header-anchor" href="#eliminar-ambientes" aria-hidden="true">#</a> Eliminar ambientes</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">env</span> remove --name py35
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p>
<ul>
<li>Para eliminar un ambiente tiene que tener presente que No debes estar actualmente en el.
Ejemplo:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#Si deseas eliminar el ambiente py39</span>
conda <span class="token function">env</span> remove --name py39

<span class="token comment">#Te aparecera un mensaje como este </span>
CondaEnvironmentError: cannot remove current environment. deactivate and run conda remove again

<span class="token comment">#Primero debes desactivarlo con el comando</span>
conda deactivate
 
<span class="token comment">#Te dirigira al ambiente base (py base). Ya luego podras remove dicho ambiente</span>
conda <span class="token function">env</span> remove --name py39

<span class="token comment">#resultado (ejemplo)</span>
Remove all packages <span class="token keyword">in</span> environment d:<span class="token punctuation">\</span>Installer<span class="token punctuation">\</span>anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>py39:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div>
<blockquote>
<p>De esta forma podras crear, copiar, activar , eliminar desactivar ambientes de trabajo y librerias con Anaconda</p>
</blockquote>
</template>
