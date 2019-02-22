# Kotlin

É necessário instalar o [Java](../../java/linux/ubuntu.md) primeiro.

Verifique a instalação do `snap`. Para quem estiver usando o Ubuntu 18.04 ou superior, o snap vem instalado por padrão.

```shell
snap version
```

Em caso negativo, faça a instalação do snap:
```shell
sudo apt-get install -y snapd
```
___

Para quem já possui o snap apenas execute:
```shell
sudo snap install kotlin --clasic
```

Validando:
```shell
kotlin -version
```

Exemplo de resultado:
```
Kotlin version 1.2.51-release-125 (JRE 1.8.0_191-8u191-b12-2ubuntu0.18.04.1-b12)
```
