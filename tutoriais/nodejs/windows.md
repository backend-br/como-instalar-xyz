# NodeJS

A melhor forma de instalar o NodeJSé utilizando o [nvm](https://github.com/creationix/nvm), pois assim consegue ter um controle maior sobre as versões do Node.

### NVM

Para instalar o NVM, é bom utilizar um gerenciador de pacote do Windows, por exemplo o [Chocolatey](https://chocolatey.org/):

```shell
choco install nvm
```

Feche o terminal e abra novamente, depois execute:

```shell
nvm -v
```
Se ocorrer tudo bem, a versão atual do nvm aparecerá no terminal. Agora para isntalar o NodeJS, execute:

```shell
nvm install latest (32 ou 64)
```
### Use:

` latest ` - Para última versão, ou

`0.x.x` - Para outras versões;

`32` - Windows 32;

`64` - Windows 64;

Pronto! NodeJS instalado com sucesso! Execute `node --version` pra ver a versão instalada.
