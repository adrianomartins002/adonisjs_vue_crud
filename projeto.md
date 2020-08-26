 - ter docker instalado
    - tutorial de instalacao do docker: https://www.docker.com
 - Baixando a imagem do mariadb:
  docker pull mariadb/server

 - executando mariadb:
 ❯ docker run --name crud_adonisjs -e mysql_root_password=receba -d mariadb/server
- criar o banco de dados crud_adonisjs (criei com o próprio dbeaver após conectar no mariadb)