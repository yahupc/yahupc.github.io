---
icon: code
date: 
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