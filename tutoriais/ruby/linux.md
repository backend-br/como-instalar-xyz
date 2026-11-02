# Ruby no Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o Ruby com o [RVM](https://rvm.io/rvm/install) (Ruby Version Manager), que permite ter mais de uma
versão do Ruby instalada, e vale para qualquer distribuição Linux.

### 1. Atualize o sistema

Primeiro, tenha certeza de que o sistema está atualizado:

```bash
# Debian ou Ubuntu
sudo apt-get update
sudo apt-get upgrade

# Fedora ou CentOS
yum update

# Arch Linux
pacman -Syu
```

### 2. Instale o RVM

Importe as chaves GPG:

```bash
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

Instale a versão estável:

```bash
\curl -sSL https://get.rvm.io | bash -s stable
```

Recarregue o PATH:

```bash
source /etc/profile
```

Valide a instalação do RVM:

```bash
rvm -v
```

Você verá uma mensagem similar a esta, dependendo da versão disponível:

```text
rvm 1.29.7-next (master) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
```

### 3. Instale uma versão do Ruby

```bash
rvm install ruby-2.6.0
```

Para instalar outras versões, primeiro verifique as versões disponíveis com o comando `rvm list known`.

## Verificação

```bash
ruby -v
```

Você verá uma mensagem similar a esta, dependendo da versão instalada:

```text
ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-linux]
```

## Referências

- [Instalação do RVM (em inglês)](https://rvm.io/rvm/install)
- [Instalando o Ruby (documentação oficial)](https://www.ruby-lang.org/pt/documentation/installation/)
