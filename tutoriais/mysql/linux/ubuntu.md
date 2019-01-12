# Mysql

Para instalar o Mysql no seu ubuntu você pode instalar via terminal com os comandos abaixos:

```shell
sudo apt-get update
sudo apt-get install Mysql-server
```

* Ao finalizar a instalação será aberta um terminal para você definir a senha padrão do myqsl.

Logo em seguida basta executar o comando, esse comandos irá "startar" o Mysql e habilitará que o mesmo seja startando quando for restartado:

```shell
sudo systemctl start Mysql
systemctl enable Mysql
```

Logo em seguida para acessar o seu Mysql basta executar o comando abaixo com a senha que você inseriu:

```shell
Mysql -u root -p
```

# Obs:
Caso no momento em que você estava instalando e não foi exibida o prompt para inserir a sua senha e sua senha padrão não é root, basta seguir os passos abaixos para atualizar sua nova senha:

* Esse não é um metódo default para fazer isso, mas foi o único que funcionou:

Você deve acessar o arquivo padrão de configuração do Mysql para pegar uma senha de sys-admin e acessar o Mysql:

```shell
sudo cat /etc/Mysql/debian.cnf 
```

Ao executar o comando deve ser exibido dois usuários como no exemplo abaixo:

```shell
[client]
host     = localhost
user     = debian-sys-maint
password = SENHA
socket   = /var/run/Mysqld/Mysqld.sock
```

logo em seguida basta executar o comando com a senha do arquivo
```shell
Mysql -u debian-sys-maint -p
```

Aqui você já vai está dentro do Mysql e poderá altera as configurações de usuário. Para simplififcar já colocarei todos os comandos que devem ser executado abaixo:

```shell
Mysql> UPDATE user SET plugin='Mysql_native_password' WHERE User='root';
Mysql> COMMIT;

UPDATE Mysql.user SET authentication_string=PASSWORD('nova_senha') where user='root';

Mysql> FLUSH PRIVILEGES;
Mysql> COMMIT;
Mysql> EXIT
```

Após tudo isso seu usuário root vai está com a nova senha e para testar basta acessar seu Mysql:

```shell
$ sudo service Mysql restart
$ Mysql -u root -p
Enter password: sua_nova_senha
```

E agora é só aproveitar seu Mysql :)