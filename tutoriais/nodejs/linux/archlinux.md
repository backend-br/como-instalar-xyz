# Node.js no Arch Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

No Arch Linux, o Node.js pode ser instalado de três formas, todas pelo
[pacman](https://wiki.archlinux.org/title/Pacman). Escolha só uma delas:

- **pacman**: instala uma única versão do Node.js para todo o sistema. É a forma mais simples.
- **nvm**: instala várias versões do Node.js no seu usuário e alterna entre elas.
- **mise**: faz o mesmo que o nvm e também gerencia outras linguagens, como Python e Go, com a versão de cada projeto
  definida em um arquivo.

Se você trabalha em projetos que exigem versões diferentes do Node.js, prefira o nvm ou o mise.

### Opção 1: pacman

O pacote `nodejs` traz sempre a versão mais recente do Node.js, e o `npm` vem em um pacote separado:

```bash
sudo pacman -S nodejs npm
```

Para usar uma versão LTS (suporte de longo prazo), liste os pacotes disponíveis:

```bash
pacman -Ss nodejs-lts
```

E instale o pacote da versão escolhida no lugar do `nodejs`, por exemplo:

```bash
sudo pacman -S nodejs-lts-krypton npm
```

As atualizações chegam junto com as do sistema, pelo `sudo pacman -Syu`.

### Opção 2: nvm

Instale o [nvm](https://github.com/nvm-sh/nvm):

```bash
sudo pacman -S nvm
```

O pacote não carrega o nvm no seu shell sozinho. Adicione o script de inicialização ao `~/.bashrc`:

```bash
echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc
```

Se você usa _zsh_, substitua `~/.bashrc` por `~/.zshrc`. Depois, reinicie o shell:

```bash
exec "$SHELL"
```

Instale a versão LTS mais recente do Node.js, que já vem com o `npm`:

```bash
nvm install --lts
```

Para instalar outra versão e alternar entre elas:

```bash
nvm install 22
nvm use 22
```

Para definir a versão usada em todo terminal novo:

```bash
nvm alias default 22
```

### Opção 3: mise

Instale o [mise](https://mise.jdx.dev/):

```bash
sudo pacman -S mise
```

Ative o mise no seu shell, adicionando esta linha ao `~/.bashrc`:

```bash
echo 'eval "$(mise activate bash)"' >> ~/.bashrc
```

Se você usa _zsh_, use `mise activate zsh` e o arquivo `~/.zshrc`. Depois, reinicie o shell:

```bash
exec "$SHELL"
```

Instale a versão LTS mais recente do Node.js e defina-a como padrão do seu usuário:

```bash
mise use -g node@lts
```

Para fixar uma versão em um projeto, rode o comando dentro da pasta dele, sem o `-g`:

```bash
mise use node@22
```

O mise grava a versão no arquivo `mise.toml` do projeto e troca de versão sozinho quando você entra na pasta.

## Verificação

```bash
node --version
npm --version
```

A saída deve mostrar as versões do Node.js (como `v24.22.3`) e do `npm`. Com o nvm ou o mise, a versão do Node.js
deve ser a que você escolheu.

Para conferir qual versão está ativa e de onde ela vem:

```bash
which node
```

O caminho deve ser `/usr/bin/node` com o pacman, ficar dentro de `~/.nvm` com o nvm ou dentro de
`~/.local/share/mise` com o mise.

## Desinstalação

Use os comandos da forma que você escolheu.

Com o pacman, troque `nodejs` pelo nome do pacote LTS se tiver instalado um:

```bash
sudo pacman -Rs nodejs npm
```

Com o nvm, remova cada versão instalada e depois o próprio nvm. Apague também a linha `source /usr/share/nvm/init-nvm.sh`
do `~/.bashrc` ou do `~/.zshrc`:

```bash
nvm uninstall 22
sudo pacman -Rs nvm
rm -rf ~/.nvm
```

Com o mise, remova o Node.js e depois o próprio mise. Apague também a linha `mise activate` do `~/.bashrc` ou do
`~/.zshrc`:

```bash
mise unuse -g node
mise uninstall --all node
sudo pacman -Rs mise
```

## Referências

- [Node.js na wiki do Arch Linux](https://wiki.archlinux.org/title/Node.js)
- [Download do Node.js (site oficial)](https://nodejs.org/pt-br/download)
- [Repositório oficial do nvm](https://github.com/nvm-sh/nvm)
- [Documentação oficial do mise](https://mise.jdx.dev/)
- [Node.js no mise](https://mise.jdx.dev/lang/node.html)
