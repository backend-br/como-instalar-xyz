# NodeJS

A melhor forma de instalar o NodeJS é com um gerenciador de versões, como o [n](https://github.com/tj/n) ou o [nvm](https://github.com/creationix/nvm) que funcionam na maioria das distribuições de linux!

### NVM

Para instalar o NVM, execute:

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Feche o terminal e abra novamente, depois execute:

```shell
command -v nvm
```

Para verificar se o `nvm` foi instalado com sucesso. Você deve ver `nvm` aparecendo como resultado. Agora para isntalar o NodeJS, execute:

```shell
nvm install node
```

Pronto! NodeJS instalado com sucesso! Execute `node --version` pra ver a versão instalada. Por padrão, o NVM sempre instala a última versão disponível.
