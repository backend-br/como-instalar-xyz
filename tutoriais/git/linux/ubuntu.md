# Git

A seguir, devemos executar o comando para instalação o Git. Não é necessário adicionar o repositório Git ao Ubuntu pois há tempos ele já se encontra em seu repositório:

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

Opcionalmente você também pode instalar o [tig](https://jonas.github.io/tig/doc/manual.html). Uma ferramenta de linha de comando em modo gráfico para navegar pelo histórico de commits.
```shell
sudo apt-get install -y tig
```

Referências:
https://git-scm.com/download/linux
https://git-scm.com/book/pt-br/v1/Primeiros-passos-Configuração-Inicial-do-Git