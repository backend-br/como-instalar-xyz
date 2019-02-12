# Instalação do Composer

Composer é o gerenciador de dependências do PHP. A maioria (se não todos) os frameworks modernos utilizam o `composer` para tratar e versionar as bibliotecas utilizadas em sua estrutura interna.

*Esse tutorial é uma versão modificada do [manual básico de instalação do composer](https://getcomposer.org/download/)*

## Pré-Requisitos

- PHP 5.3.2+ (Mas pelo amor da nossa senhora dos capacete vermeio, use o 7+)

Se alguma biblioteca ou extensão nativa do php faltar, o instalador acusará o recurso faltante

## Instalando

```shell
cd ~ # é sempre bom lembrar...
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

### Importante :shipit:

O hash de integridade do instalador muda a cada versão, então verifique no site do composer qual o último hash válido.

## Adicionando ao PATH

Agora temos que mover o instalador para ficar disponível em todo o sistema:

```shell
# assumindo que você esteja em ~
sudo mv composer.phar /usr/local/bin/composer
```