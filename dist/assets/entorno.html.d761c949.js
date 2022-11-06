import{_ as r,r as i,o,a as p,b as n,e as s,F as c,f as l,d as a}from"./app.11d91818.js";var t="/datascience/jupiter_notebook1.png",d="/datascience/anaconda.png",u="/datascience/jupyter-anaconda.png",b="/datascience/anaconda1.png",m="/datascience/anaconda2.png",h="/datascience/anaconda-boltons.png",v="/datascience/anaconda-boltons-channel.png";const g={},f=l('<h1 id="configuracion-de-entorno-para-analisis-de-datos" tabindex="-1"><a class="header-anchor" href="#configuracion-de-entorno-para-analisis-de-datos" aria-hidden="true">#</a> Configuraci\xF3n de entorno para analisis de Datos</h1><h2 id="_1-extensiones-vscode" tabindex="-1"><a class="header-anchor" href="#_1-extensiones-vscode" aria-hidden="true">#</a> 1. Extensiones VSCode</h2><ul><li>Python</li><li>Magic Python</li><li>Material Icon Theme</li><li>Rainbow Brackets</li><li>Remote Development</li></ul><h3 id="_1-1-notebook-dentro-de-vscode" tabindex="-1"><a class="header-anchor" href="#_1-1-notebook-dentro-de-vscode" aria-hidden="true">#</a> 1.1. Notebook dentro de VSCode</h3><ul><li>Crea una carpeta , a\xF1ade un archivo en ella con la siguiente extension &quot;.ipynb&quot;</li></ul><blockquote><p>Visual Studio Code te recomendar\xE1 instalar las extensiones necesarias para ejecutar tu Jupyter Notebook. <img src="'+t+`" alt="Jupyter Notebook" loading="lazy"></p></blockquote><ul><li>Puedes obtener el mismo resultado ejecutando los siguientes comandos desde el terminal.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> ipykernel
pip3 <span class="token function">install</span> jupyter
pip3 <span class="token function">install</span> notebook
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>Si despues de instalar estos programas tienes problemas que no te reconoce los comnandos. <code>command not found: jupyter</code> al ejecutar <code>jupyter notebook</code>. Puedes utilizar el siguiente comando.</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -H pip <span class="token function">install</span> jupyter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Execute a command as another user -H The -H (HOME) option requests that the security policy set the HOME environment variable to the home directory of the target user (root by default) as specified by the password database. Depending on the policy, this may be the default behavior.</p><ul><li>Para comprobar que tienes instalado correctamente Jupyter ejecuta en consola el siguiente comando:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jupyter --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># resultado (ejemplo):
Selected Jupyter core packages...
IPython          : 8.1.1
ipykernel        : 6.9.1
ipywidgets       : 7.6.5
jupyter_client   : 7.1.2
jupyter_core     : 4.9.2
jupyter_server   : 1.13.5
jupyterlab       : 3.3.0
nbclient         : 0.5.11
nbconvert        : 6.4.2
nbformat         : 5.1.3
notebook         : 6.4.8
qtconsole        : 5.2.2
traitlets        : 5.1.1

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,14),k=a("Puedes usar Jupyter Notebook fuera de Vscode con env "),y={href:"https://linuxways.net/ubuntu/how-to-install-jupyter-notebook-on-ubuntu-20-04/",target:"_blank",rel:"noopener noreferrer"},_=a("How to Install Jupyter Notebook on Ubuntu 20.04 via env"),x=n("h2",{id:"_2-instalacion-de-anaconda",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-instalacion-de-anaconda","aria-hidden":"true"},"#"),a(" 2. Instalacion de Anaconda")],-1),q=n("p",null,[n("img",{src:d,alt:"Anaconda",loading:"lazy"})],-1),w=a("Nos dirigimos a la pagina oficial de "),j={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},A=a("Anaconda"),C=n("li",null,"Descargamos el instalador dependiendo de nuestro sistema operativo.",-1),N=l(`<blockquote><p>Si estas en Linux podrias usar el siguiente codigo en una terminal</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -0 anaconda.sh https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Nos dirigimos a la carpeta de descarga y ejecutamos en la terminal:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> Anaconda3-2021.11-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Das enter para revisar los Terminos y condiciones . Cuando te pida elegir el lugar de destino del programa. Dejas por defecto el que te indica, dando Enter otra vez.</li><li>Para finalizar te preguntar\xE1 si deseas que el instalador inicie Anaconda3 al correr conda init? . Das &quot;yes&quot;</li><li>Al abir nuevamente una terminal veras en una esquina &quot;Py base&quot;. El cual indica que Anaconda se ha instalado correctamente</li><li>Si quieres asegurarte puedes utilizar el comando</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda info
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo):
 active environment : base
    active env location : /home/yahupc/anaconda3
            shell level : 1
       user config file : /home/yahupc/.condarc
 populated config files : 
          conda version : 4.10.3
    conda-build version : 3.21.5
         python version : 3.9.7.final.0
       virtual packages : __linux=5.13.0=0
                          __glibc=2.34=0
                          __unix=0=0
                          __archspec=1=x86_64
       base environment : /home/yahupc/anaconda3  (writable)
      conda av data dir : /home/yahupc/anaconda3/etc/conda
  conda av metadata url : None
           channel URLs : https://repo.anaconda.com/pkgs/main/linux-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/linux-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache : /home/yahupc/anaconda3/pkgs
                          /home/yahupc/.conda/pkgs
       envs directories : /home/yahupc/anaconda3/envs
                          /home/yahupc/.conda/envs
               platform : linux-64
             user-agent : conda/4.10.3 requests/2.26.0 CPython/3.9.7 Linux/5.13.0-30-generic ubuntu/21.10 glibc/2.34
                UID:GID : 1000:1000
             netrc file : /home/yahupc/.netrc
           offline mode : False

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Para iniciar Anaconda ejecuta el siguiente comando</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jupyter-notebook
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo)
[I 2022-03-06 01:43:11.210 LabApp] JupyterLab extension loaded from /home/yahupc/.local/lib/python3.9/site-packages/jupyterlab
[I 2022-03-06 01:43:11.211 LabApp] JupyterLab application directory is /home/yahupc/.local/share/jupyter/lab
[I 01:43:11.217 NotebookApp] The port 8888 is already in use, trying another port.
[I 01:43:11.217 NotebookApp] Serving notebooks from local directory: /home/yahupc
[I 01:43:11.217 NotebookApp] Jupyter Notebook 6.4.8 is running at:
[I 01:43:11.218 NotebookApp] http://localhost:8888/?token=285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
[I 01:43:11.218 NotebookApp]  or http://127.0.0.1:8888/?token=285213af30feb0ff450e0b2a5e83ab18e1ced001218275c1
[I 01:43:11.218 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>Elige alguno de los enlaces para abrir Anaconda en el navegador web</p></blockquote><ul><li>Ya podrias comenzar a crear tu primer notebook con Anaconda <img src="`+u+'" alt="Jupyter Notebook" loading="lazy"></li><li>Creas tu primer Notebook con Anaconda y elegiste el env de python. <img src="'+b+'" alt="Notebook con Anaconda" loading="lazy"></li></ul><blockquote><p>ctrl + C, para detener jupyter-notebook.</p></blockquote><ul><li>Ahora al abrir el mismo archivo con VSCode. Podremos ver que se ha creado un &quot;env conda&quot;. <img src="'+m+`" alt="Anaconda en VSCode" loading="lazy"></li></ul><h2 id="_3-anaconda-creacion-clonacion-y-eliminacion-de-ambientes" tabindex="-1"><a class="header-anchor" href="#_3-anaconda-creacion-clonacion-y-eliminacion-de-ambientes" aria-hidden="true">#</a> 3. Anaconda: Creacion, clonacion y eliminacion de ambientes</h2><ul><li>Revisar nuestros ambientes conda en nuestra computadora.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo)
base                  *  /home/yahupc/anaconda3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-1-crear-ambiente-env" tabindex="-1"><a class="header-anchor" href="#_3-1-crear-ambiente-env" aria-hidden="true">#</a> 3.1. Crear ambiente (env)</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Sintaxis</span>
<span class="token comment">#$ conda create --name [nombre] [paquete]=[versi\xF3n]</span>
create --name py35 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.5</span> pandas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#Al finalizar nos aparecer\xE1 un mensaje como este:

# To activate this environment, use
#
#     $ conda activate py35
#
# To deactivate an active environment, use
#
#     $ conda deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-2-activar-ambiente" tabindex="-1"><a class="header-anchor" href="#_3-2-activar-ambiente" aria-hidden="true">#</a> 3.2. Activar ambiente</h3><ul><li>Ejecutamos el comando activate para activar nuestro ambiente creado (py35)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda activate py35
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo). Ahora en una esquina tu terminal ya tendra un nuevo entorno
(py35) \u03BB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Con ello ya tenemos instalado un ambiente (env) de python en la version 3.5 y la libreria pandas instalada. Podemos comprobarlo con el comando <code>conda list</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># packages in environment at d:\\Installer\\anaconda3\\envs\\py35:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>Puedes hacer un filtrado con <code>conda panda list</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># resultado (ejemplo)</span>
<span class="token comment"># Name                    Version                   Build  Channel</span>
pandas                    <span class="token number">0.23</span>.4           py35h830ac7b_0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-4-actualizando-paquetes-del-ambiente" tabindex="-1"><a class="header-anchor" href="#_3-4-actualizando-paquetes-del-ambiente" aria-hidden="true">#</a> 3.4. Actualizando paquetes del ambiente.</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda updates pandas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo)
Collecting package metadata (current_repodata.json): done
Solving environment: done


==&gt; WARNING: A newer version of conda exists. &lt;==
  current version: 4.10.3
  latest version: 4.11.0

Please update conda by running

    $ conda update -n base -c defaults conda

# All requested packages already installed.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>Si conoces una version en especifico la puedes instalar</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#El resultado te indicara si tu ambiente es apto para la instalacion o si 
#tendras que hacer algun cambio :

Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: /
Found conflicts! Looking for incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed

UnsatisfiableError: The following specifications were found
to be incompatible with the existing python installation in your environment:

Specifications:

  - pandas=1.2 -&gt; python[version=&#39;&gt;=3.7,&lt;3.8.0a0|&gt;=3.8,&lt;3.9.0a0|&gt;=3.9,&lt;3.10.0a0&#39;]

Your python: python=3.5

If python is on the left-most side of the chain, that&#39;s the version you&#39;ve asked for.
When python appears to the right, that indicates that the thing on the left is somehow
not available for the python version you are constrained to. Note that conda will not
change your python version to a different minor version unless you explicitly specify
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>En este caso nos indica que la version de pandas que deseo instalar, necesita previamente que la version del python de mi ambiente sea &gt;= 3.7.</li><li>Podrias hacer un <code>conda update python</code> o tambien podrias instalar una version en especifico:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#Despues de la instalacion puedes comprobar que las versiones se actualizaron:

#resultado (ejemplo)
# Name                    Version                   Build  Channel
blas                      1.0                         mkl
ca-certificates           2022.2.1             haa95532_0
certifi                   2021.10.8        py39haa95532_2
icc_rt                    2019.0.0             h0cc432a_1
intel-openmp              2022.0.0          haa95532_3663
mkl                       2020.2                      256
mkl-service               2.3.0            py39h196d8e1_0
mkl_fft                   1.3.0            py39h46781fe_0
mkl_random                1.0.2            py39h848d8c7_0
numpy                     1.19.2           py39h729668d_0
numpy-base                1.19.2           py39hbd0edd7_0
openssl                   1.1.1m               h2bbff1b_0
pandas                    1.2.4            py39hd77b12b_0
pip                       21.2.4           py39haa95532_0
python                    3.9.7                h6244533_1
python-dateutil           2.8.2              pyhd3eb1b0_0
pytz                      2021.3             pyhd3eb1b0_0
setuptools                58.0.4           py39haa95532_0
six                       1.16.0             pyhd3eb1b0_1
sqlite                    3.37.2               h2bbff1b_0
tzdata                    2021e                hda174b7_0
vc                        14.2                 h21ff451_1
vs2015_runtime            14.27.29016          h5e58377_2
wheel                     0.37.1             pyhd3eb1b0_0
wincertstore              0.2              py39haa95532_2

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Nuestro entorno de trabajo (py35) ahora tiene la version 3.9 de python. Para mantener un orden podriamos cambiar al nombre a &quot;py39&quot;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda create --name py39 --copy --clone py35
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#resultado (ejemplo)
Source:      d:\\Installer\\anaconda3\\envs\\py35
Destination: d:\\Installer\\anaconda3\\envs\\py39
Packages: 25
Files: 3
Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate py39
#
# To deactivate an active environment, use
#
#     $ conda deactivate

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div><h3 id="_3-5-eliminar-librerias" tabindex="-1"><a class="header-anchor" href="#_3-5-eliminar-librerias" aria-hidden="true">#</a> 3.5. Eliminar librerias</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda remove pandas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># comprobando </span>
conda list pandas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#No encontraras resultados
# Name                    Version                   Build  Channel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-6-eliminar-ambientes" tabindex="-1"><a class="header-anchor" href="#_3-6-eliminar-ambientes" aria-hidden="true">#</a> 3.6. Eliminar ambientes</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> remove --name py35
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><ul><li>Para eliminar un ambiente tiene que tener presente que No debes estar actualmente en el. Ejemplo:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Si deseas eliminar el ambiente py39</span>
conda <span class="token function">env</span> remove --name py39

<span class="token comment">#Te aparecera un mensaje como este </span>
CondaEnvironmentError: cannot remove current environment. deactivate and run conda remove again

<span class="token comment">#Primero debes desactivarlo con el comando</span>
conda deactivate
 
<span class="token comment">#Te dirigira al ambiente base (py base). Ya luego podras remove dicho ambiente</span>
conda <span class="token function">env</span> remove --name py39

<span class="token comment">#resultado (ejemplo)</span>
Remove all packages <span class="token keyword">in</span> environment d:<span class="token punctuation">\\</span>Installer<span class="token punctuation">\\</span>anaconda3<span class="token punctuation">\\</span>envs<span class="token punctuation">\\</span>py39:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><blockquote><p>De esta forma podras crear, copiar, activar , eliminar desactivar ambientes de trabajo y librerias con Anaconda</p></blockquote><h2 id="_4-anaconda-comandos-avanzados" tabindex="-1"><a class="header-anchor" href="#_4-anaconda-comandos-avanzados" aria-hidden="true">#</a> 4. Anaconda: Comandos Avanzados</h2><ul><li>Creamos un ambiente virtual (py39)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda create --name py39 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span> <span class="token assign-left variable">pandas</span><span class="token operator">=</span><span class="token number">1.2</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,54),z=a("Nos dirigimos a la pagina indicada y buscamos informacion del paquete. "),P={href:"https://anaconda.org",target:"_blank",rel:"noopener noreferrer"},E=a("anaconda.org"),S=a(". "),I=n("img",{src:h,alt:"boltons",loading:"lazy"},null,-1),T=n("li",null,[a("De esta forma encontraremos diversos canales con su respectivo Sistema operativo, donde podremos instalar dicho paquete. "),n("img",{src:v,alt:"boltons",loading:"lazy"})],-1),V=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> --channel conda-forge boltons
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Podemos comprar la correcta instalacion con el comando <code>conda list boltons</code></li></ul><h3 id="_4-1-revisiones" tabindex="-1"><a class="header-anchor" href="#_4-1-revisiones" aria-hidden="true">#</a> 4.1. Revisiones</h3><ul><li>Cada vez que hacemos una instalacion de algun paquete siempre se genera una <strong>revision</strong> de este. Por tanto podemos regresar en el tiempo a una revsion anterior si asi lo desearamos.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda list --revision
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Con esto habremos desinstalado el paquete <em>boltons</em> ya que en la <em>rev 0</em> no existia dicho paquete. Comprobamos con <code>conda list boltons</code> veras que ya no esta el paquete. Ademas podras revisar la lista de revisiones nuevamente con <code>conda list --revision</code></li></ul><h3 id="_4-2-exportando-ambientes-env" tabindex="-1"><a class="header-anchor" href="#_4-2-exportando-ambientes-env" aria-hidden="true">#</a> 4.2. Exportando ambientes (env)</h3><ul><li>Para exportar tu ambientes conda, podrias utilizar cualquiera de los siguientes comandos. Te recomiendo el 3ero.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> <span class="token builtin class-name">export</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Removera el texto a\xF1adido a las versiones</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --no-builds
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Exportar\xE1 las dependencias que indicamos manualmente</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --from-history
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Este comando te permitir\xE1 crear un archivo yml</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> --from-history --file environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-3-restaurar-un-ambiente-a-partir-de-una-archivo" tabindex="-1"><a class="header-anchor" href="#_4-3-restaurar-un-ambiente-a-partir-de-una-archivo" aria-hidden="true">#</a> 4.3. Restaurar un ambiente a partir de una archivo</h3><ul><li>Con el archivo creado anteriormente podemos replicar un ambiente.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> create --file environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-anaconda-acelerar-ambientes-virtuales-con-mamba" tabindex="-1"><a class="header-anchor" href="#_5-anaconda-acelerar-ambientes-virtuales-con-mamba" aria-hidden="true">#</a> 5. Anaconda: Acelerar ambientes virtuales con Mamba</h2><ul><li>Pueda que al crear tus ambientes de trabajo para tus proyectos, estos sean muy grandes y un poco dificiles de mantener, para existe <em>Mamba</em> que te puede ayudar.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">install</span> --channel conda-forge mamba
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Al finalizar la instalacion veras que podras utilizar casi los mismos comandos que <em>conda</em> , pero ahora con <em>mamba</em></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>conda <span class="token function">env</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="divide-y-venceras" tabindex="-1"><a class="header-anchor" href="#divide-y-venceras" aria-hidden="true">#</a> Divide y vencer\xE1s.</h3>`,24);function D(R,L){const e=i("ExternalLinkIcon");return o(),p(c,null,[f,n("blockquote",null,[n("p",null,[k,n("a",y,[_,s(e)])])]),x,q,n("ul",null,[n("li",null,[w,n("a",j,[A,s(e)])]),C]),N,n("ul",null,[n("li",null,[z,n("a",P,[E,s(e)]),S,I]),T]),V],64)}var B=r(g,[["render",D]]);export{B as default};
