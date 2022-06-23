---
icon: code
date: 
sticky: true
category :
  -  mysql
star: true
---
# Comandos Utiles en MYSQL

### Cambiar la el tamaño de una columna
```mysql
ALTER TABLE name_table MODIFY name_column VARCHAR(30);
```

### Eliminando duplicados:
```
SELECT * FROM table_name WHERE id NOT IN (
select * FROM (SELECT MAX(n.id) FROM table_name n
GROUP BY n.date, n.name) x);
```