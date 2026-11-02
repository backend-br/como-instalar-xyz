# Ruby no macOS

As versões atuais do macOS vêm com uma versão do Ruby pré-instalada, mas para utilizar outra versão é preciso um
gerenciador de versões. Este tutorial instala o Ruby com o RVM ou com o rbenv.

A Apple avisou que, em novas versões do sistema, muitas das ferramentas de desenvolvedor serão removidas.

## Requisitos

- [Homebrew](https://brew.sh/). Para instalar, digite no terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Instalação

Escolha uma das duas opções abaixo.

### Opção 1: RVM

Instale o RVM com os seguintes comandos no terminal:

```bash
brew install gpg
command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
curl -sSL https://get.rvm.io | bash
```

Instale o Ruby:

```bash
rvm install 2.6.3
rvm use 2.6.3
```

### Opção 2: rbenv

Instale o rbenv com os seguintes comandos no terminal:

```bash
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
```

Se você utiliza o `zsh`, troque `.bash_profile` por `.zshrc` nas duas últimas linhas.

Para confirmar que o rbenv foi instalado, digite no terminal:

```bash
rbenv
```

Deve aparecer uma mensagem contendo `rbenv VERSÃO`.

Instale o Ruby:

```bash
rbenv install 2.6.3
rbenv global 2.6.3
```

## Verificação

```bash
ruby -v
```

A saída deve mostrar a versão 2.6.3.

## Referências

- [Homebrew](https://brew.sh/)
- [Instalação do RVM (em inglês)](https://rvm.io/rvm/install)
- [Repositório oficial do rbenv](https://github.com/rbenv/rbenv)
