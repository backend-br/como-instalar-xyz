# Sublime

Nesse tutorial você irá aprender como instalar a versão 3 do sublime via repositório oficial.

Para começar a instalação do Sublime em seu Ubuntu você precisa baixar o arquivo GPG e o adicionaremos ao apt-key.

```shell
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

Depois você precisa adicionar o repositório oficial do Sublime:

```shell
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

Depois execute o comando abaixo para atualizar seus repositórios:

```shell
sudo apt-get update
```

E logo em seguida execute o comando para instalar o Sublime-3
```shell
sudo apt-get install sublime-text
```
Tudo certo, agora você tem a o editor Sublime-text-3 em sua máquina.