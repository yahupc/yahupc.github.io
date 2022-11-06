---
icon: code
sticky: true
category :
  -  mysql
star: true
---
# Comandos Utiles en MYSQL

### Restaurar base de datos
+ Primero creamos nuestra base de datos. Puede ser por linea de comandos o por alguna interfaz.
+ Luego restauramos nuestra copia de seguridad.
```mysql
mysql -u usuario -p name_database < respaldo.sql
```

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

### Saber el tamaño de nuestra BD en MB:
```
SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema;SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema;
```
