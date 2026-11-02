# Docker no Arch Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

A forma mais fácil de instalar no Arch Linux é pelo [pacman](https://wiki.archlinux.org/title/Pacman), o gerenciador de
pacotes nativo.

### 1. Remova versões antigas

Antes de começar, verifique se você já possui uma versão do Docker instalada (`docker version`). Caso possua, remova
essa instalação antes de prosseguir:

```bash
sudo pacman -R docker --recursive
```

### 2. Instale o Docker

Para instalar o [Docker no Arch Linux](https://wiki.archlinux.org/title/Docker#Installation), execute o comando abaixo:

```bash
sudo pacman -S docker
```

Pronto, você já possui a última versão do Docker instalada. Ainda é preciso configurar algumas coisas para facilitar o
uso no dia a dia.

### 3. Configure as permissões

Para executar `docker` sem utilizar `sudo`, adicione seu usuário ao grupo de permissões do Docker:

```bash
sudo usermod -aG docker $USER
```

Depois disso, reinicie sua máquina ou refaça o login na sua sessão.

### 4. Inicie o Docker

Antes de começar a utilizar o Docker, inicie o _service_ dele:

```bash
sudo systemctl start docker
```

Você também pode configurar o Docker para ser iniciado no _boot_ do sistema:

```bash
sudo systemctl enable docker
```

Com o _service_ iniciado, você já pode criar suas imagens e subir seus containers.

## Verificação

```bash
docker version
```

A saída deve mostrar a versão do cliente e do servidor do Docker.

## Referências

- [Docker na wiki do Arch Linux](https://wiki.archlinux.org/title/Docker)
- [Pacman na wiki do Arch Linux](https://wiki.archlinux.org/title/Pacman)
