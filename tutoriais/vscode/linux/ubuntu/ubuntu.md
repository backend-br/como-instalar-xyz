# VSCode

# Instalando via DPKG
Para instalar o VSCode no ubuntu você pode baixar o arquivo diretamente do [link](https://code.visualstudio.com/Download)

Ao terminar de baixar você pode executar diretamente clicando duas vezes ou executando o comando:

sudo dpkg -i diretorio.dpkg

Logo em seguida você terá o VSCode instalado em sua máquina.

# Instalando via terminal

Para instalar o VSCode via terminal obtendo as atualizações pelo o repositório basta seguir os passos abaixos.

**Obs**: Será necessário ter instalado o "CURL" para concluir a instalação via terminal e toda a instalação de preferência deve ser feita em um **único diretorio**, aconselho o **Download**.


1. Você precisa baixar uma chave de segurança para encryptar e decryptar arquivos gerados por GnuPG "GNU Privacy Guard".

```code
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
```

2° Logo sem seguida você deve adicionar esse arquivo na sua lista de gpg confiaveis.

```code
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
```

3° Adicione o repositório na sua lista de repositórios.

```code
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

4° E para finalizar basta executar os comandos abaixos para concluir a instalação

```code
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code # or code-insiders
```

Agora é só curtir o seu VSCode.