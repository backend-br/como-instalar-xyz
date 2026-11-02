# Visual Studio Code no Arch Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o VS Code pelo pacman ou manualmente, a partir do pacote `tar.gz`.

Escolha uma das duas opções abaixo.

### Opção 1: pacman

Instale o VS Code diretamente do repositório oficial do Arch Linux com o gerenciador de pacotes pacman:

```bash
sudo pacman -Sy code --noconfirm

# o y sincroniza os repositórios
# e o --noconfirm responde automaticamente as perguntas
```

### Opção 2: instalação manual

1. Baixe o pacote do VS Code na [página de download](https://code.visualstudio.com/Download). Escolha o download com
   extensão **tar.gz**, na versão correspondente à arquitetura do seu processador (x64, Arm64 ou Arm32).

2. Depois de baixado, descompacte o pacote `tar.gz`. Ao executar o comando, deverá aparecer uma pasta chamada
   **VSCode-linux-xxx** (`xxx` são os nomes que variam de acordo com o tipo de download que você escolheu):

   ```bash
   tar -xvzf code-stable-xxx-xxx.tar.gz
   ```

3. Crie a pasta de instalação do VS Code em `/usr/share/`:

   ```bash
   cd /usr/share/

   # crie a pasta para armazenar o vscode:
   sudo mkdir code
   ```

4. Copie todos os arquivos que estão dentro do diretório `VSCode-linux-xxx` para o diretório `code` em `/usr/share/`.
   Copie os arquivos que estão dentro da pasta `VSCode-linux-xxx`, e não o diretório em si. Entre na pasta
   `VSCode-linux-xxx` e execute o comando:

   ```bash
   sudo cp -r . /usr/share/code
   ```

## Verificação

Se você instalou pelo pacman, execute:

```bash
code --version
```

Na instalação manual, o VS Code deverá aparecer junto dos seus aplicativos instalados.

## Referências

- [Visual Studio Code no Linux (documentação oficial, em inglês)](https://code.visualstudio.com/docs/setup/linux)
- [Visual Studio Code na wiki do Arch Linux](https://wiki.archlinux.org/title/Visual_Studio_Code)
