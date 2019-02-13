#!/bin/bash

# Este script instala o composer em /usr/local/bin
# 
# Checa a integridade do instalador e realiza limpeza dos arquivos gerados
#
# Script retirado do site oficial com algumas modificações
#
# Script Original:
# https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md

echo -e "Vamos para casa...\n"
cd ~
pasta_atual=$(pwd)
echo -e "Estou em: ${pasta_atual}"

echo -e "Baixando arquivo de assinatura e checando integridade:\n"

EXPECTED_SIGNATURE="$(wget -q -O - https://composer.github.io/installer.sig)"
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
ACTUAL_SIGNATURE="$(php -r "echo hash_file('SHA384', 'composer-setup.php');")"

if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
then
    >&2 echo 'ERRO: assinatura de arquivo inválida!'
    rm composer-setup.php
    exit 1
fi

php composer-setup.php 
# Coleta o último exit code
RESULT=$?
rm composer-setup.php
# Sagaz: se ocorreu tudo bem, sai silenciosamente...
exit $RESULT

echo -e "Movendo composer para o PATH: \n"
sudo mv composer.phar /usr/local/bin/composer
