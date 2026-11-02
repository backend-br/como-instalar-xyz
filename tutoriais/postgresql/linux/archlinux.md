# PostgreSQL no Arch Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o PostgreSQL pelo [pacman](https://wiki.archlinux.org/title/Pacman_(Portugu%C3%AAs)), o
gerenciador de pacotes padrão do Arch Linux.

### 1. Instale o PostgreSQL

```bash
sudo pacman -Sy postgresql
```

### 2. Inicialize as configurações padrão

Após a instalação, acesse o usuário `postgres` e inicialize as configurações padrão do PostgreSQL:

```bash
sudo -iu postgres
initdb -D /var/lib/postgres/data
```

### 3. Defina uma senha para o usuário postgres

Por padrão o usuário `postgres` não tem senha configurada. É preciso adicionar uma, já que alguns frameworks exigem
configuração extra para aceitar senhas vazias.

Ainda logado no usuário `postgres`, execute os comandos abaixo e digite sua senha em seguida:

```bash
psql
\password
```

### 4. Ative o serviço na inicialização do sistema

```bash
sudo systemctl enable postgresql
```

### 5. Instale o pgAdmin (opcional)

O [pgAdmin](https://www.pgadmin.org/) não é instalado por padrão. Para instalá-lo, execute:

```bash
sudo pacman -S pgadmin4
```

Como o Arch Linux é uma distribuição do tipo [rolling release](https://pt.wikipedia.org/wiki/Rolling_release), você terá
sempre as versões mais recentes disponíveis do PostgreSQL e do pgAdmin.

## Verificação

```bash
psql --version
```

A saída deve mostrar a versão do PostgreSQL instalada.

## Referências

- [PostgreSQL na wiki do Arch Linux](https://wiki.archlinux.org/title/PostgreSQL)
- [Pacman na wiki do Arch Linux](https://wiki.archlinux.org/title/Pacman_(Portugu%C3%AAs))
- [pgAdmin](https://www.pgadmin.org/)
