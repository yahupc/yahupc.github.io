---
icon: code
date: 
sticky: true
category :
  -  mysql
star: true
---
# Comandos Utiles en MYSQL

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
```mysql
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