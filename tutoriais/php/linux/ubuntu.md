# PHP no Ubuntu

O PHP é o componente que processa código para exibir conteúdo dinâmico: ele executa scripts, conecta às bases de dados
MySQL para obter informações e entrega o conteúdo processado para o servidor web exibir. Este tutorial instala o PHP
para rodar com o Apache e o MySQL.

## Requisitos

- [Apache](../../apache/linux/ubuntu.md) instalado.
- Um usuário com permissão para usar `sudo`.

## Instalação

### 1. Instale o PHP

Use o apt para instalar o PHP. Inclua também alguns pacotes auxiliares para que o código PHP possa rodar sob o servidor
Apache e falar com o banco de dados MySQL:

```bash
sudo apt install php libapache2-mod-php php-mysql
```

### 2. Dê preferência aos arquivos PHP no Apache

Na maioria dos casos, vamos querer modificar a forma com que o Apache serve arquivos quando uma pasta é requisitada.
Atualmente, se um usuário requisita uma pasta do servidor, o Apache procura primeiro um arquivo chamado `index.html`.
Para que o servidor web dê preferência aos arquivos PHP, faça o Apache procurar primeiro o arquivo `index.php`.

Abra o arquivo `dir.conf` em um editor de texto com privilégios de root:

```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Ele terá esta aparência:

```apache
<IfModule mod_dir.c>
    DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm
</IfModule>
```

Mova o arquivo de índice PHP (`index.php`) para a primeira posição depois da especificação `DirectoryIndex`, como segue:

```apache
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
```

Quando terminar, salve e feche o arquivo pressionando `CTRL-X`. Confirme a gravação digitando `Y` e pressione `ENTER`
para confirmar o local de salvamento do arquivo.

### 3. Reinicie o Apache

Reinicie o servidor para que as alterações sejam reconhecidas:

```bash
sudo systemctl restart apache2
```

## Verificação

Para testar se o sistema está corretamente configurado para o PHP, crie um script PHP bem básico chamado `info.php`. Para
que o servidor web possa encontrar o arquivo e servi-lo corretamente, ele deve ser salvo no diretório chamado "web root".

No Ubuntu 18.04, esse diretório fica em `/var/www/html`. Crie o arquivo nesse local:

```bash
sudo nano /var/www/html/info.php
```

Isso vai abrir um arquivo em branco. Coloque o texto a seguir, que é um código PHP válido, dentro do arquivo:

```php
<?php
phpinfo();
?>
```

Quando terminar, salve e feche o arquivo.

Agora visite a página no seu navegador. Você vai precisar do endereço IP público do seu servidor:

```text
http://ip_do_seu_servidor/info.php
```

A página mostra informações básicas sobre o servidor a partir da perspectiva do PHP. Ela é útil para depuração e para
assegurar que as configurações estão sendo aplicadas corretamente. Se você vê essa página no navegador, o PHP está
funcionando como esperado.

Remova o arquivo depois do teste, pois ele pode fornecer informações sobre o seu servidor para usuários não autorizados:

```bash
sudo rm /var/www/html/info.php
```

Você sempre poderá recriar essa página se precisar acessar as informações novamente.

## Referências

- [Tutorial da DigitalOcean que deu origem a este](https://www.digitalocean.com/community/tutorials/como-instalar-a-pilha-linux-apache-mysql-php-lamp-no-ubuntu-18-04-pt)
- [Instalação e configuração do PHP (documentação oficial)](https://www.php.net/manual/pt_BR/install.php)
