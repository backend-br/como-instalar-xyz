# Composer no Ubuntu

## Requisitos

- PHP 5.3.2+ (mas prefira o PHP 7+).

Se alguma biblioteca ou extensão nativa do PHP faltar, o instalador acusará o recurso faltante.

## Instalação

Este tutorial é uma versão modificada do [manual básico de instalação do Composer](https://getcomposer.org/download/).

### 1. Baixe e execute o instalador

```bash
cd ~
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

> **Importante:** o hash de integridade do instalador muda a cada versão, então verifique no site do Composer qual é o
> último hash válido.

### 2. Adicione ao PATH

Agora mova o arquivo gerado para que o Composer fique disponível em todo o sistema (assumindo que você esteja em `~`):

```bash
sudo mv composer.phar /usr/local/bin/composer
```

### Alternativa: instalador automático

Se você não quer se preocupar toda vez com o hash do arquivo, pode instalar o Composer de forma automatizada com um
shell script fornecido pelo próprio projeto. O script busca na web o último hash válido do instalador do Composer e, se
tudo estiver certo, realiza a instalação para você.

Uma cópia do script, com algumas modificações e com o código comentado, [se encontra aqui](composer_autoinstaller.sh).

## Verificação

```bash
composer --version
```

A saída deve mostrar a versão do Composer instalada.

## Referências

- [Download do Composer](https://getcomposer.org/download/)
- [Como instalar o Composer de forma automatizada (em inglês)](https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md)
