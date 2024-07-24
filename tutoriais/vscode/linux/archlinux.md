# Visual Studio Code (VSCode)

## Instalação usando Pacman
Você pode instalar o VSCode diretamente do repositório oficial do Arch Linux, utilizando o gerenciador de pacotes pacman.
Para isso, basta executar o seguinte comando:

```sh
sudo pacman -Sy code --noconfirm

# o y sincroniza os repositórios
# e o --noconfirm responde automaticamente as perguntas
```

Agora é só aguardar e curtir o seu VSCode!


## Instalação manual (para quem ama fazer tudo á mão):

### 1 - Baixe o código fonte do VsCode em:
https://code.visualstudio.com/Download
> <p>( você deve escolher o download da base do vscode na extensão <b> tar.gz </b> )</p>
> escolha a versão do código que se refere á arquitetura de seu processador ( x64, Arm64 ou  Arm32 )

### 2 - Extraia o código fonte do pacote e cole na pasta de instalação
#### 2.1 extração
depois de baixado, você deve descompactar o pacote tar.gz utilizando o comando:
```sh
tar -xvzf code-stable-xxx-xxx.tar.gz
```
> <p>xxx sãos os nomes que variam de acordo com o tipo de instalação que você escolheu</p> 
> <p>Ao executar o comando, deverá aparece uma pasta chamada <b>VSCode-linux-xxx</b></p>

#### 2.2 criar pasta de instalação
Entre na pasta de instalação do vscode na raiz do seu arch utilizando o comando:

```sh
cd /usr/share/

## crie a pasta para armazenar o vscode:
sudo mkdir code
```
#### 2.3 mover os arquivos para a pasta de instalação
Copie todos os arquivos que estão dentro do diretório `VSCode-linux-xxx` que você extraiu anteriormente,
e cole-os no diretório `code` em `/usr/share/` &nbsp;
> você deve copiar os arquivos que estão dentro da pasta `VSCode-linux-xxx`, e não a diretório em si

entre na pasta VSCode-linux-xxx e execute o comando:
```sh
sudo cp -r . /usr/share/code
```
#### Após isto o vscode deverá aparecer junto dos seus aplicativos instalados normalmente
