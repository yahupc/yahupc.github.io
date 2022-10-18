---
icon: code
date: 
sticky: true
category :
  -  mysql
star: true
---
# Comandos Utiles en MYSQL

<<<<<<< HEAD
### Restaurar base de datos
+ Primero creamos nuestra base de datos. Puede ser por linea de comandos o por alguna interfaz.
+ Luego restauramos nuestra copia de seguridad.
=======
## Basicos:

### Insertar registros:
```
INSERT INTO table_name (first_column, second_column, etc)
VALUES (value1, value2, etc);
```

### Actualizar registros:
```
UPDATE table_name 
SET column_name = value1
WHERE ID = value_id;
```

### Eliminar registros:
```
DELETE FROM table_name 
WHERE ID = value_id;
```
### Cambiar el tamaño de una columna
>>>>>>> e4b6748fdc6be78d0a91d369907ac22fd6c64c48
```mysql
mysql -u usuario -p name_database < respaldo.sql
```
### Cambiar la el tamaño de una columna
```
ALTER TABLE name_table MODIFY name_column VARCHAR(30);
```

### Eliminando duplicados:
```
SELECT * FROM table_name WHERE id NOT IN (
select * FROM (SELECT MAX(n.id) FROM table_name n
GROUP BY n.date, n.name) x);
```
### Buscar y reemplazar valor en columna
```
UPDATE table_name
SET field_name = replace(same_field_name, unwanted_text, wanted_text)
```