# Tutorial de instalação do Laravel no Ubuntu 18.04

## Sobre o Laravel

O [Laravel](https://laravel.com/docs/5.8) é uma Framework web contruído em PHP para criação de sites com o [Padrão MVC](https://pt.wikipedia.org/wiki/MVC).

Nossa instalação será da versão 5.8, que é a última até a criação deste tutorial.

Para que o Laravel funcione é preciso instalar o PHP, algumas libs adicionais e um banco de dados (pela faciliadade de uso e popularidade escolhi o MySQL como banco).

Não irei instalar o Apache para desenvolvimento, pois o PHP contém um servidor basico já pronto para nos :)

## PHP

Primeiro instalamos o PHP.

```shell
$ sudo apt update
$ sudo apt install php -y
```

Depois instalamos as libs adicionais, que o Laravel precisa.

```shell
$ sudo apt install php-mbstring php-tokenizer php-xml php-json php-bcmath php-mysql -y
```


## Composer

O Composer é quem cuida de instalar e atualizar as dependências do nosso projeto, tanto as do Laravel quanto de pacotes que viermos a precisar no decorer de um projeto.

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Depois de baixar e instalar vamos colocar o Composer para ser usado de forma global.

```shell
sudo mv composer.phar /usr/local/bin/composer
```

## Agora sim, vamos baixar o Laravel

Escolha uma pasta de sua preferência para baixar os arquivo, pode ser na pasta pessoal do seu Ubuntu, por exemplo.

O último Parametro do comando abaixo é o nome do projeto que você pode colocar o que achar melhor. Eu estou usando o nome meu_primeiro_laravel.


```shell
cd ~
composer create-project --prefer-dist laravel/laravel meu_primeiro_laravel
```

Após a conclusão do donwload navegue na pasta e execute o seguinte comando, se tudo deu certo ira aparece o versão do Laravel que acabamos usar.

```shell
cd meu_primeiro_laravel
php artisan --version
```

Agora vamos iniciar o servidor para acessar o projeto via web.

```shell
php artisan serve
```

Esse comando mostra o link do projeto que no meu caso foi [http://localhost:8000](http://localhost:8000).


## Mais Recursos, MySQL e Node/NPM

A instalação do Laravel já esta pronta, porém não esta comunicando-se com nenhum banco, isso em um projeto web não constuma acontecer, vamos instalar o Mysql.

## MySQL

```shell
sudo apt install mysql-server
```

O próximo comando é para configurar a senha root do mysql e outras configurações de segurança.
Não estamos configurando a conexão do banco no Laravel, depois que você criar uma base de dados login e senha no MySQL você configura no arquivo .env na root do projeto sua conexão.


```shell
sudo mysql_secure_installation
```

## NPM

Com o Node/NPM podemos compilar nosso CSS, JS, SASS e Vue e/ou outras dependencias _Front-end_ que queira. Na documentação do Laravel [https://laravel.com/docs/5.8/frontend](https://laravel.com/docs/5.8/frontend) você encontra mais informações de como usar esses recursos.

Os comandos para instalação são estes.

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

Esta instalação deixa seu sistema com o Laravel funcionando. Para produção você ira instalar o Apache e também existe o uso de Docker, mas isso fica pra outro momento.