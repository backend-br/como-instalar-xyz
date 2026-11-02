# Visual Studio Code no Ubuntu

## Requisitos

- Um usuário com permissão para usar `sudo`.
- `curl` instalado, para a instalação via terminal.

## Instalação

Este tutorial instala o VS Code pelo pacote `.deb` ou pelo repositório da Microsoft, que entrega as atualizações pelo
apt.

Escolha uma das duas opções abaixo.

### Opção 1: pacote .deb

Baixe o arquivo `.deb` na [página de download](https://code.visualstudio.com/Download). Ao terminar o download, execute o
arquivo com um clique duplo ou com o comando:

```bash
sudo dpkg -i diretorio.dpkg
```

### Opção 2: repositório pelo terminal

Faça toda a instalação de preferência em um **único diretório**, como o **Downloads**.

1. Baixe a chave de segurança usada pelo GnuPG ("GNU Privacy Guard") para verificar os pacotes:

   ```bash
   curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
   ```

2. Adicione esse arquivo à sua lista de chaves GPG confiáveis:

   ```bash
   sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
   ```

3. Adicione o repositório à sua lista de repositórios:

   ```bash
   sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
   ```

4. Execute os comandos abaixo para concluir a instalação:

   ```bash
   sudo apt-get install apt-transport-https
   sudo apt-get update
   sudo apt-get install code # or code-insiders
   ```

## Verificação

```bash
code --version
```

A saída deve mostrar a versão do VS Code instalada.

## Referências

- [Visual Studio Code no Linux (documentação oficial, em inglês)](https://code.visualstudio.com/docs/setup/linux)
