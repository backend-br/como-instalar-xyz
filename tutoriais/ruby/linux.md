# Ruby

Procedimento válido independente da Distribuição do Linux.

Primeiro tenha certeza que o sistema esta atualizado:

```shell
# Debian ou Ubuntu
sudo apt-get update
sudo apt-get upgrade

# Fedora ou CentOS
yum update

# Arch Linux
pacman -Syu
```

Utilizando o [RVM](https://rvm.io/rvm/install) (Ruby Version Manager) é possível termos mais de uma versão do Ruby instalada.

Para instalar o RVM execute os comandos abaixo:

GPG keys
```shell
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

Instalando a versão estável.
```shell
\curl -sSL https://get.rvm.io | bash -s stable 
```

Para recarregar o path
```shell
source /etc/profile
```

Validando
```shell
rvm -v
```

Você verá uma mensagem similar a essa, dependendo da versão disponível.
```shell
rvm 1.29.7-next (master) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
```
___

Instalando uma versão do Ruby. 
```shell
rvm install ruby-2.6.0
```

Para instalar outras versões, primeiro verifique as versões disponíveis com o comando: `rvm list known`.

Verifique a instalação com:
```shell
ruby -v
```

Você verá uma mensagem similar a essa, dependendo da versão instalada.
```shell
ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-linux]
```

