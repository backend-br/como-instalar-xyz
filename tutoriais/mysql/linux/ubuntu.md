# MySQL no Ubuntu

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o servidor MySQL pelo terminal, com o apt.

### 1. Instale o servidor

```bash
sudo apt-get update
sudo apt-get install mysql-server
```

Ao final da instalação será aberto um prompt no terminal para você definir a senha padrão do MySQL.

### 2. Inicie o serviço

O comando abaixo inicia o MySQL e habilita que ele seja iniciado junto com o sistema:

```bash
sudo systemctl start mysql
systemctl enable mysql
```

### 3. Defina a senha do root, se o prompt não apareceu

Caso o prompt para definir a senha não tenha aparecido durante a instalação e a senha padrão não seja `root`, siga os
passos abaixo para definir uma nova senha. Este não é um método padrão, mas foi o único que funcionou.

Acesse o arquivo de configuração padrão do MySQL para pegar a senha do usuário de administração do sistema:

```bash
sudo cat /etc/mysql/debian.cnf
```

Ao executar o comando, deve ser exibido um conteúdo como no exemplo abaixo:

```ini
[client]
host     = localhost
user     = debian-sys-maint
password = SENHA
socket   = /var/run/mysqld/mysqld.sock
```

Em seguida, acesse o MySQL com a senha do arquivo:

```bash
mysql -u debian-sys-maint -p
```

Dentro do MySQL, execute os comandos abaixo para alterar a senha do usuário root:

```sql
UPDATE user SET plugin='mysql_native_password' WHERE User='root';
COMMIT;
UPDATE mysql.user SET authentication_string=PASSWORD('nova_senha') where user='root';
FLUSH PRIVILEGES;
COMMIT;
EXIT
```

Depois disso, reinicie o MySQL para que o usuário root passe a usar a nova senha:

```bash
sudo service mysql restart
```

## Verificação

Acesse o MySQL com o usuário root e a senha que você definiu:

```bash
mysql -u root -p
```

```text
Enter password: sua_nova_senha
```

Se o prompt `mysql>` aparecer, o MySQL está instalado e funcionando.

## Referências

- [Documentação oficial do MySQL (em inglês)](https://dev.mysql.com/doc/)
