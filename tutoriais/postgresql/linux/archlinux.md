# PostgreSQL

A melhor forma de instalar o PostgreSQL no Arch Linux é atráves do gerenciador de pacotes [pacman](<https://wiki.archlinux.org/index.php/Pacman_(Portugu%C3%AAs)>), que é o gerenciador de pacotes padrão para instalação pacotes dos repositórios oficiais.

Para isso, basta executar:

```shell
sudo pacman -Sy postgresql
```

Após a instalação é preciso acessar o usuário `postgres` e incializar as configurações padrão do PostgreSQL. Para isso, execute os seguintes comandos:

```shell
sudo -iu postgres
initdb -D /var/lib/postgres/data
```

Como por padrão o usuário postgres não tem nenhuma senha configurada, precisamos adicionar uma, já que em alguns frameworks é preciso fazer alguma configuração extra para aceitar senhas vazias.

Ainda logado no usuário do postgres, execute os seguintes comandos, entrando com sua senhas em seguida:

```shell
psql
\passwd
```

Agora basta ativar o serviço do PostgreSQL na incialização do sistema:

```shell
sudo systemctl enable postgresql
```

Bônus: o [pgAdmin](https://www.pgadmin.org/) não é instalado por padrão, então precisamos instalá-lo executando:

```shell
sudo pacman -S pgadmin4
```

Pronto! Como o Arch Linux é uma distribuição do tipo [rolling release](https://pt.wikipedia.org/wiki/Rolling_release), você terá sempre instalado as versões mais recentes disponíveis do `PostgreSQL` e do `pgAdmin`.
