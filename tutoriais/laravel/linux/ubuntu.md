# Tutorial de instalação do Laravel no Ubuntu 18.04

## Sobre o laravel

O [Laravel](https://laravel.com/docs/5.8) é uma Framework web contruído em PHP para criação de sites com o [Padrão MVC](https://pt.wikipedia.org/wiki/MVC).

Nossa instalação será da Versão 5.8 que é a última até a criação deste tutorial

Para que o laravel funcione e preciso instalar o php e algumas libs adicionais, e também um banco de dados, pela faciliadade de uso e popularidade escolhi o mysql como banco.

Não irei instalar o Apache para desenvolvimento podemos usar um comando do PHP que inicialza um servidor para nos :)

## PHP

Primeiro instalamos o php

```shell
$ sudo apt update
$ sudo apt install php -y
```

Depois as libs adicionais que o laravel precisa

```shell
$ sudo apt install php-mbstring php-tokenizer php-xml php-json php-bcmath php-mysql -y
```


## Composer

Composer e quem cuida de instalar e atualizar as dependencias do nosso projeto, tanto as do laravel quanto de pacotes que viermos a precisar no decorer de um projeto

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Depois de baixar vamos colocar o composer para ser  usado de forma global 

```shell
sudo mv composer.phar /usr/local/bin/composer
```

## Agora sim vamos baixar o Laravel

Escolha uma pasta de sua preferencia para baixar os arquivo, eu vou colocar na pasta pessoal do me Ubuntu

O último Parametro dessse comando é o nome do projeto que voce pode colocar o que achar melhor


```shell
cd ~
composer create-project --prefer-dist laravel/laravel meu_primeiro_laravel
```

Após a conclusão do donwload navegue na pasta e veja os arquivo baixados

```shell
cd meu_primeiro_laravel
ls -la
```
Se conseguirmos visualiar pastas como app, storage, routes, database ... tudo deu certo

Agora vamos iniciar o servidor para acessar o projeto via web

```shell
php artisan serve
```

Esse comando mostra o link do projeto que no meu caso foi [http://localhost:8000](http://localhost:8000)


## Mais Recursos, MySQL e Node/Npm

A instalação do Laravel já esta pronta, porém não esta comunicando-se com nenhum banco, isso em um projeto web não constuma acontecer, vamos instalar o Mysql para isso

## MySql

```shell
sudo apt install mysql-server
sudo mysql_secure_installation
```

Esse segundo comando e para voce Configurar a senha root do mysql e outras configurações.
Não estamos configurando a conexão do banco no laravel, depois que você criar o banco de login e senha no MySql você configura no arquivo .env na root do projeto.


## NPM

Com o npm podemos compilar seu css e js com sass e Vue e/ou outras dependencias front end que queira, na documentação do laravel [https://laravel.com/docs/5.8/frontend](https://laravel.com/docs/5.8/frontend) você encrontra mais informações de como usar esses recursos.

Mas Os comandos para instalção estão são estes

```shell
sudo apt install nodejs -y
sudo apt install npm -y
```

Depois podemos conferir a instalação com estes comandos.

```shell
nodejs -v
npm -v
```

## Considerações finais

Esta instalação deixa seu sistema com o Laravel funcionando. Para produção você ira instalar o apache e tambem existe o uso de docker, mas isso fica pra outro momento.