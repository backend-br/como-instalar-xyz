# NodeJS

A melhor forma de instalar o NodeJS é com um gerenciador de versões, como o [nvm](https://github.com/creationix/nvm).

A razão para usar o [nvm](https://github.com/creationix/nvm) em vez de outros tipos de instalação é principalmente em como é fácil ter várias versões do Node.js (se necessário) sem muita complexidade extra . Às vezes, os aplicativos podem exigir que deve funcionar em uma determinada versão do Node.js, portanto, ter a flexibilidade de usar versões específicas pode economizar muito tempo de você.

### NVM

Para instalar o NVM, execute:

1. Abra o terminal.

2. Execute o instalador do [nvm](https://github.com/creationix/nvm)

- ...com curl
  
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
*or* wget

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

3. Feche o terminal e abra novamente.
4. Verifique a instalação

- Para verificar se o nvm foi instalado, faça:

```shell
command -v nvm
```

5. Você deve ver `nvm` aparecendo como resultado. 
6. Listar quais versões do Node estão atualmente instaladas (provavelmente nenhuma)
```shell
nvm ls
```

7. Instalar mais recente versão do [Node.js](https://nodejs.org/en/) LTS.
  ```shell
  nvm install --lts
  ``` 

8. Pronto! NodeJS instalado com sucesso! 
9. Execute `node --version` pra ver a versão instalada.

Também é possível selecionar qual versão do Node.js é usada por projeto, executando `nvm use v10.15.0` (ou outro número de versão) no diretório onde o projeto individual está localizado. Uma maneira de fazer isso é criar um script pequeno para ativar o ambiente correto quando necessário, para que você não precise lembrar qual versão exata era necessária.
