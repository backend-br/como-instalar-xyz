# Java no Ubuntu

Para instalar qualquer versão do Java OpenJDK você pode utilizar o apt. Este tutorial mostra como instalar a versão 8,
mas você pode substituir o número pela versão que deseja.

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

### 1. Instale o OpenJDK

Para instalar o OpenJDK 8:

```bash
sudo apt-get install -y openjdk-8-jdk
```

### 2. Escolha a versão padrão (opcional)

Caso queira mais de uma versão na sua máquina, siga o passo anterior para cada versão. Para definir qual será a versão
padrão, execute o comando abaixo e escolha uma opção:

```bash
sudo update-alternatives --config java
```

## Verificação

Execute o comando abaixo para verificar se o Java foi instalado com sucesso:

```bash
java --version
```

Você verá uma mensagem similar a esta, dependendo da versão instalada:

```text
openjdk version "1.8.0_191"
OpenJDK Runtime Environment (build 1.8.0_191-8u191-b12-0ubuntu0.18.04.1-b12)
OpenJDK 64-Bit Server VM (build 25.191-b12, mixed mode)
```

## Referências

- [Instalação do OpenJDK (em inglês)](https://openjdk.org/install/)
