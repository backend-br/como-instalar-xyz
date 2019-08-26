# Ruby

As versões atuais do macOS possuem uma versão do Ruby pré-instalado.
Porém, para utilizar outra versão é necessário instalar um gerenciador de versões (ex: rmv e rbenv).
Além disso, a Apple avisou que em novas versões do sistema, muitas das ferramentas de desenvolvedores serão removidas.

## Requisitos
- [Homebrew](https://brew.sh/)
  - Para instalar, digite no terminal: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## Instalando via RMV

### Instalando o RMV
Digite os seguintes comandos no terminal:

```
brew install gpg
command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
curl -sSL https://get.rvm.io | bash
```

### Instalando o Ruby
Digite no terminal:

```
rmv install 2.6.3
rmv use 2.6.3
```

## Instalando via RBEnv

### Instalando o RBEnv
Digite os seguintes comandos no terminal:

```
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
```

(Se você utiliar o `zsh`, então troque ".bash_profile" para ".zsrc" nas duas últimas linhas)

Para certificar que o RBEnv foi instalado, digite no terminal:

```
rbenv
```

Deve aparecer uma mensagem contendo `rbenv VERSÃO`.

### Instalando o Ruby
Digite no terminal:

```
rbenv install 2.6.3
rbenv global 2.6.3
```
