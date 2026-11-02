# Kotlin no Ubuntu

## Requisitos

- [Java](../../java/linux/ubuntu.md) instalado.
- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o compilador de linha de comando do Kotlin pelo `snap`.

### 1. Verifique o snap

Para quem usa o Ubuntu 18.04 ou superior, o `snap` vem instalado por padrão. Verifique a instalação:

```bash
snap version
```

Caso ele não esteja instalado, instale o snap:

```bash
sudo apt-get install -y snapd
```

### 2. Instale o Kotlin

```bash
sudo snap install kotlin --classic
```

## Verificação

```bash
kotlin -version
```

Exemplo de resultado:

```text
Kotlin version 1.2.51-release-125 (JRE 1.8.0_191-8u191-b12-2ubuntu0.18.04.1-b12)
```

## Referências

- [Compilador de linha de comando do Kotlin (em inglês)](https://kotlinlang.org/docs/command-line.html)
