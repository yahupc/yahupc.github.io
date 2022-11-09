<template><h1 id="comandos-utiles-en-mysql" tabindex="-1"><a class="header-anchor" href="#comandos-utiles-en-mysql" aria-hidden="true">#</a> Comandos Utiles en MYSQL</h1>
<h2 id="basicos" tabindex="-1"><a class="header-anchor" href="#basicos" aria-hidden="true">#</a> Basicos:</h2>
<h3 id="insertar-registros" tabindex="-1"><a class="header-anchor" href="#insertar-registros" aria-hidden="true">#</a> Insertar registros:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>INSERT INTO table_name (first_column, second_column, etc)
VALUES (value1, value2, etc);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="actualizar-registros" tabindex="-1"><a class="header-anchor" href="#actualizar-registros" aria-hidden="true">#</a> Actualizar registros:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UPDATE table_name 
SET column_name = value1
WHERE ID = value_id;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="eliminar-registros" tabindex="-1"><a class="header-anchor" href="#eliminar-registros" aria-hidden="true">#</a> Eliminar registros:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>DELETE FROM table_name 
WHERE ID = value_id;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="cambiar-el-tamano-de-una-columna" tabindex="-1"><a class="header-anchor" href="#cambiar-el-tamano-de-una-columna" aria-hidden="true">#</a> Cambiar el tamaño de una columna</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ALTER TABLE name_table MODIFY name_column VARCHAR(30);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="eliminando-duplicados" tabindex="-1"><a class="header-anchor" href="#eliminando-duplicados" aria-hidden="true">#</a> Eliminando duplicados:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT * FROM table_name WHERE id NOT IN (
select * FROM (SELECT MAX(n.id) FROM table_name n
GROUP BY n.date, n.name) x);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="buscar-y-reemplazar-valor-en-columna" tabindex="-1"><a class="header-anchor" href="#buscar-y-reemplazar-valor-en-columna" aria-hidden="true">#</a> Buscar y reemplazar valor en columna</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UPDATE table_name
SET field_name = replace(same_field_name, unwanted_text, wanted_text)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="saber-el-tamano-de-nuestra-bd-en-mb" tabindex="-1"><a class="header-anchor" href="#saber-el-tamano-de-nuestra-bd-en-mb" aria-hidden="true">#</a> Saber el tamaño de nuestra BD en MB:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema;SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="restaurar-base-de-datos" tabindex="-1"><a class="header-anchor" href="#restaurar-base-de-datos" aria-hidden="true">#</a> Restaurar base de datos</h3>
<ul>
<li>Primero creamos nuestra base de datos. Puede ser por linea de comandos o por alguna interfaz.</li>
<li>Luego restauramos nuestra copia de seguridad.</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql -u usuario -p name_database &lt; respaldo.sql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="exportar-una-query-a-un-archivo-csv" tabindex="-1"><a class="header-anchor" href="#exportar-una-query-a-un-archivo-csv" aria-hidden="true">#</a> Exportar una query a un archivo csv</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>select * from test where date between '2022-09-01' and '2022-10-31 23:59:59' into outfile '/tmp/test.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '&quot;' LINES TERMINATED BY '\n';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="importar-data-de-un-archivo-csv" tabindex="-1"><a class="header-anchor" href="#importar-data-de-un-archivo-csv" aria-hidden="true">#</a> Importar data de un archivo csv</h3>
<ul>
<li>Si te aparece un mensaje de restricción en acceso. Ingresa a la consola con el siguiente comando.<br>
<code> mysql --local-infile=1 -u root -p gilatsmrt</code></li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>LOAD DATA LOCAL INFILE '/home/user/test.csv' INTO TABLE test FIELDS TERMINATED BY ',' ENCLOSED BY '&quot;' LINES TERMINATED BY '\n' ;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
