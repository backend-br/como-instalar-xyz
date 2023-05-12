# PostgreSQL

 Para instalar o PostgreSQL em uma arquitetura BSD, existem 2 caminhos principais:

   * Gerenciador de pacotes: [pkg](https://github.com/freebsd/pkg), [nix](https://github.com/0mp/freebsd-ports-nix);
   * Compilação via [codigo-fonte](https://www.postgresql.org/ftp/source/).

 Vou abordar a instalação com o [pkg](#ports---pkg) e pela [compilação](#compilação) que pode ser usa. 

## Ports - pkg

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
  * 2° Permitir Acesso remoto
  ```shell
    sudo su
    echo "listen_addresses='*'" >> /var/db/postgres/data11/postgresql.conf
  ```
  * 3° Reiniciar Banco de Dados

  ```
    service postgresql restart
  ```
  
  Caso tenha duvidas adicionais, A configuração do postgreSQL esta [aqui](https://www.postgresql.org/docs/current/runtime-config.html)
  
## Compilação

  Esta instalação pode ser mais hard para alguns usuarios e aconselhavel que se entenda o basico do
  build de projetos c/c++ via makefile e cmake.
  Antes de baixar os codigos fontes precisamos instalar as dependencias(libs e utilitarios) que são necessarios para o postgreSQL:
  Para FreeBSD:
  ```shell
    sudo pkg install perl5 perl5-devel python3 libressl-devel libxml2 libxslt openldap-client llvm11 libedit lua53
  ```
  Para GenericBSD:
  ```shell
    pkg install perl5 perl5-devel python3 libressl-devel libxml2 libxslt openldap-client llvm11 libedit readline editline lua53
  ```

  Inicialmente vamos baixar o codigo fonte do [site official](https://www.postgresql.org/ftp/source/)
  ```shell
    sudo su
    cd ~
    curl https://ftp.postgresql.org/pub/source/v11.20/postgresql-11.20.tar.gz --output postgresql11.tar.gz
    tar -xf postgresql-11.tar.gz
  ```
  Por padrão devemos sempre salvar os arquivos da instalação, quando não temos um gerenciador de pacotes para cuidar da guestão. Assim sendo
  vamos salvar os files no diretorio ``/opt``, mas o BSD não possui o diretorio ``/opt`` ele usa o ``/usr/local``, então vamos cria-ló!
  ```shell
    mkdir /opt
    mv postgresql-11.20 /opt/
    cd /opt/postgresql-11.20
  ```
  Agora com as dependencias e o codigo fonte, vamos executar o script `configure` que esta dentro do diretorio `/opt/postgresql-11.20`.
  ```shell
    ./configure
    make
    make install
  ```
  Vamos criar o usuario postgres, para delegar a ele os acessos aos arquivos uteis para o banco de dados:
  ```
    adduser postgres
    mkdir /usr/local/pgsql/data
    chown postgres /usr/local/pgsql/data
    
  ```
  Vamos iniciar a base de dados e rodar os arquivos de tests, para confirmar!
  ```
    su - postgres
    /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data
    /usr/local/pgsql/bin/postgres -D /usr/local/pgsql/data >logfile 2>&1 &
    /usr/local/pgsql/bin/createdb test
    /usr/local/pgsql/bin/psql test
  ```
  Se chegou ate aqui fique com a configuração basica a seguir, se não veja o [Thouboshuting](#troubleshooting)
  * 1° Configuração: Senha do usuario(Padrão) do banco de dados `postgres`

  ```shell
    psql -c "alter user postgres with password 'MinhaSenha123'"
  ```
  * 2° Permitir Acesso remoto
  ```shell
    sudo su
    echo "listen_addresses='*'" >> /var/db/postgres/data11/postgresql.conf
  ```
  * 3° Reiniciar Banco de Dados

  ```
    service postgresql restart
  ```

## Troubleshooting

  Essa sessão esta dividida em:
  
   * [Falhas de compilação](#falha-na-compilação)
   * [Falhas ao usar pkg](#falha-nas-dependenciaspkg)
  
  Erros adicionais, pense em abrir uma issue, mas saiba que o tempo dos mantener's é limitado.

### Falha na Compilação 

  Caso existam erros na hora de rodar o ./configure, verifique o arquivo `config.log`
  ```shell
    cat config.log | grep -in error | more
  ```
  Provavelmente os maiores problemas serão do linker e do `chose me`.
  O `chose me` e uma forma do programador verificar se a lib usada esta na versão correta, exemplo:
  ```shell
    # if
  ```
  Verifique esses if's para observar se tudo esta na versão correta!
  O `lineker` linka as bibliotecas aos executaveis, os erros devem ser parecidos com isso:
  ```shell
   1218:ld: error: unable to find library -lreadline
  ```
  Ou
  ```shell
   1734:conftest.c:41:10 fatal error: 'crypt.h' file not found
  ```
  Nesse caso você pode criar um arquivo `main.c` e colocar o `#include <crypt.h>` no programa
  e compilalo usando o `ld -L <pasta aonde esta a lib>` para verificar se  esta instalada, aponte
  para `/usr/lib`. Se não ouver a lib, você pode baixar os fontes ou a versão compilada da lib em [FreshPort](https://www.freshports.org/) e [GNU](https://www.gnu.org/software/gnu-crypto/) e rezar para que o build de certo! Boa sorte!

### Falha nas Dependencias(pkg)

  Verifique usando search as dependencias, pode ser que sua distro tenha a mesma lib, mas esta com um nome diferente
  ```shell
    pkg search <dependencia>
  ```
  Caso não exista eu vou colocar o link de cada dependencia aqui:
  * [perl5](https://www.freshports.org/lang/perl5-devel/)
  * [python3](https://www.freshports.org/lang/python)
  * [libressl](https://www.freshports.org/security/libressl/)
  * [libxml2](https://www.freshports.org/textproc/libxml2/)
  * [libxslt](https://www.freshports.org/textproc/libxml2/)
  * [openldap-client](https://www.freshports.org/net/openldap24-client/)
  * [llvm11](https://www.freshports.org/devel/llvm11/)
  * [libedit](https://www.freshports.org/devel/libedit/)
  * [readline](https://www.freshports.org/devel/readline/)
  * [editline](https://www.freshports.org/devel/editline/)
  * [lua53](https://www.freshports.org/lang/lua53/)
