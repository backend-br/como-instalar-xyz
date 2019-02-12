# Git

Uma maneira prática de realizar a instalação do gerenciador de repositórios Git é por meio dos repositórios do Ubuntu. Em um terminal, digite os seguintes comandos. Os comandos irão solicitar privilégios de administrador e sua senha.

```shell

sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
```

O primeiro comando adicionará o repositório do Git na listagem de repositórios do Ubuntu. O segundo comando irá atualizar o nosso sistema com a nova adição, bem como procurar por modificações nos demais repositórios já existentes. 

A seguir, devemos executar o comando para instalação o Git:

```shell

sudo apt-get install git
```

Findada a instalação, vamos realizar algumas configurações básicas do Git, como adicionar o seu nome de usuário e um email, que será sua identificação nos commits futuramente realizados.

Em um terminal, digite:

```shell
git config --global user.name "Informe o seu Nome"
git config --global user.email seu_email@email.com
```

Com esses comandos, a instalação do Git e uma configuração básica de identificação está completa. 

*Devido a ter sido instalado por meio de PPA, seu Git sempre será atualizado junto com as demais atualizações do sistema, de maneira muito cômoda mantendo-o sempre na versão mais atual :)

Opcionalmente você também pode instalar o [tig](https://jonas.github.io/tig/doc/manual.html). Uma ferramenta de linha de comando em modo gráfico para navegar pelo histórico de commits.
```shell
sudo apt-get install -y tig
```

Referências:
https://git-scm.com/download/linux
https://git-scm.com/book/pt-br/v1/Primeiros-passos-Configuração-Inicial-do-Git
