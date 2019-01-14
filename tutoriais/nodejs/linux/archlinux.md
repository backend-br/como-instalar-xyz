# Node.js

A melhor forma de instalar o Node.js no Arch Linux é atráves do gerenciador de pacotes [pacman](<https://wiki.archlinux.org/index.php/Pacman_(Portugu%C3%AAs)>), que é o gerenciador de pacotes padrão para instalação pacotes dos repositórios oficiais.

Para isso, basta executar:

```shell
sudo pacman -Sy nodejs
```

O [npm](https://www.npmjs.com/) não é instalado por padrão, então precisamos instalá-lo executando:

```shell
sudo pacman -S npm
```

Você também pode optar por instalar o [yarn](https://yarnpkg.com/pt-BR/) ao invés do npm, não sendo necessário ter instalado o npm anteriormente. Basta executar:

```shell
sudo pacman -S yarn
```

Pronto! Como o Arch Linux é uma distribuição do tipo [rolling release](https://pt.wikipedia.org/wiki/Rolling_release), você terá sempre instalado as versões mais recentes disponíveis do `Nodje.js`, `npm` ou `yarn`.

Basta executar `node --version`, `npm --version` ou `yarn --version`, para saber qual foi a versão instalada de cada.
