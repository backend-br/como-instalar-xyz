# Docker Arch Linux

Com alguns comandos simples você consegue instalar o Docker na sua máquina, a forma mais fácil é utilizando o [pacman](https://wiki.archlinux.org/index.php/pacman), gerenciador de pacotes nativo do Arch Linux.

## Removendo versão antiga

Antes de começar verifique se você já possui uma versão do Docker instalada (`docker version`), caso possua, você precisa remover essa instalação antes de prosseguir.

```bash
$ sudo pacman -R docker --recursive
```

## Instalando Docker

Para instalar o [Docker no Arch Linux](https://wiki.archlinux.org/index.php/docker#Installation) basta executar o comando abaixo:

```bash
$ sudo pacman -S docker
```

Pronto, você já possui a última versão do Docker instalada, para verificar sua instalação execute `docker version`.

Mas ainda precisamos configurar algumas coisas para facilitar o seu uso no dia dia.

### 1. Permissões

Para executar `docker` sem utilizar `sudo` você precisa adicionar seu usuário ao grupo de permissões do Docker.

```bash
$ sudo usermod -aG docker $USER
```

Depois disso basta reiniciar sua máquina ou refazer o login na sua sessão ;)

### 2. Iniciando o Docker

Antes de começar a utilizar o Docker você precisa iniciar o _service_ dele.

```bash
$ sudo systemctl start docker
```

Você também pode configurar para que o Docker seja iniciado no momento de _boot_ do seu sistema, para isso basta executar:

```bash
$ sudo systemctl enable docker
```

Pronto, com o _service_ iniciado você já pode criar suas imagens e subir seus containers.

Caso você tenha alguma dúvida ou problema durante a instalação, da uma olhada na [documentação oficial](https://wiki.archlinux.org/index.php/docker) ;)
