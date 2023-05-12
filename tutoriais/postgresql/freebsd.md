# PostgreSQL

 Para instalar o PostgreSQL em uma arquitetura BSD, existem 2 caminhos principais:

   * Gerenciador de pacotes: [pkg](https://github.com/freebsd/pkg), [nix](https://github.com/0mp/freebsd-ports-nix);
   * Compilação via [codigo-fonte](https://www.postgresql.org/ftp/source/).

 Vou abordar a instalação com o [pkg](#gestor-de-pacotes-pkg) e pela [compilação](#compilação) que pode ser usa. 

## Gestor de Pacotes PKG

  O pkg que é o gerenciador de pacotes padrão do FreeBSD, e mantem um porte do PostgreSQL no seu repositorio padrão.
  Primeiro vamos fazer a atualização e instalar o port.
  ```shell
    pkg update
    pkg install postgresql11-server postgresql11-client
  ```
  Ativando a inicialização do serviço e iniciando o PostgreSQL:

  ```shell
    sudo sysrc postgresql_enable=yes
    sudo service postgresql initdb
    sudo service postgresql start
  ```

  A Configurando inicial do PostgreSQL, cria um usuario postgresql para gerenciar os recursos da execução(Padrão do mundo BSD).
  Essa conta por padrão não possui senha logo não é possivel logar nela fora do root, mas vamos precisar acessalá para configuração inicial:

  ```shell
    sudo su - postgres
  ```

  * 1° Configuração: Senha do usuario(Padrão) do banco de dados `postgres`

  ```shell
    psql -c "alter user postgres with password 'MinhaSenha123'"
  ```

  * 2° Reiniciar Banco de Dados

  ```
    sudo service postgresql restart
  ```
  
  Caso tenha duvidas adicionais, A configuração do postgreSQL esta [aqui](https://www.postgresql.org/docs/current/runtime-config.html)
  
## Compilação

  Esta instalação pode ser mais hard para alguns usuarios e aconselhavel que se entenda o basico do
  build de projetos c/c++ via makefile e cmake.
  Antes de baixar os codigos fontes precisamos instalar as dependencias(libs e utilitarios) que são necessarios para o postgreSQL:
  Para FreeBSD:
  ```shell
    ~
  ```
  Para OpenBSD:
  ```shell
    ~
  ```
  Para GenericBSD:
  ```shell
    ~
  ```

  Inicialmente vamos baixar o codigo fonte do [site official](https://www.postgresql.org/ftp/source/)
  ```shell
    cd ~
    wget https://ftp.postgresql.org/pub/source/v11.20/postgresql-11.20.tar.gz
    tar -xf postgresql-11.20.tar.gz
  ```
  Por padrão devemos sempre salvar os arquivos da instalação, quando não temos um gerenciador de pacotes para cuidar da guestão. Assim sendo
  vamos salvar os files no diretorio ``/opt``, mas o BSD não possui o diretorio ``/opt`` ele usa o ``/usr/local``