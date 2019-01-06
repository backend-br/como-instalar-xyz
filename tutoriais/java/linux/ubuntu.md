# OpenJDK

Para instalar qualquer versão Java OpenJDK você pode utilizar o apt para isso o tutorial abaixo mostra como instalar a versão 8 porém você pode substituir o número para a versão que você deseja.

Para instalar o OpenJDK-8:

```shell
sudo apt-get install -y openjdk-8-jdk
```

Depois execute o comando abaixo para verificar se a versão do java foi instalado com sucesso:

```shell
java --version
```
Ao executar o comando você verá uma mensagem similar a essa, vai depender da versão que você instalou.

```shell
openjdk version "1.8.0_191"
OpenJDK Runtime Environment (build 1.8.0_191-8u191-b12-0ubuntu0.18.04.1-b12)
OpenJDK 64-Bit Server VM (build 25.191-b12, mixed mode)
```

Tudo certo, agora você tem a versão Java openJDK instalado na sua máquina.

# Dica:
Caso você queira mais de uma versão na sua máquina, basta segui os mesmos passos citados acima e para definir qual será a versão padrão basta executar o comando abaixo e escolher uma opção:

```shell
sudo update-alternatives --config java
```
