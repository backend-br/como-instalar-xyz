# Go Linux

Go tem uma forma muito simples de instalação. Esse passo a passo pode ser seguido para qualquer distribuição Linux.

- Realize o download da ultima versão da linguagem no site [golang.org](https://golang.org/dl/) para linux.

- Após o download ter sido concluído, na pasta onde foi realizado o download, descompacte o zip para o caminho /usr/local com o seguinte comando:

`$ tar -C /usr/local -xzf go1.x.x.linux-amd64.tar.gz`

- Obs: 1.x.x é a versão referente ao download, por exemplo: 

`$ tar -C /usr/local -xzf go1.11.4.linux-amd64.tar.gz`

- Após ter descompactado o zip com sucesso, o proximo passo é definir as variáveis de ambiente:

 ` $ export PATH=$PATH:/usr/local/go/bin`

 `$ export GOPATH=/$HOME/go`

` $ export GOROOT=/usr/local/go`

`$ export GOBIN=$GOPATH/bin`

`$ export PATH=$PATH:$GOBIN`

- Vamos testar nossa configuração inicial dando o comando `go`
  - A saída deve ser um help com os comandos permitidos no Go.

- Para você não precisar ficar declarando as variaveis de ambiente sempre que iniciar o sistema, podemos adicionar nos arquivos de inicialização do sistema:

  - Abra o arquivo `/etc/profile` com seu editor de texto preferido

    - `$ vim /etc/profile`

  - Adicione o seguinte comando no final do arquivo
    - `export PATH=$PATH:/usr/local/go/bin`
  
  - Salve e feche o arquivo

  - Agora abra o arquivo `.bashrc` que se encontra na sua home

  - Abre o arquivo com seu editor preferido
  
      - ` $ vim .bashrc`
  
  - Adicione os seguintes comandos no final do arquivo

       - `$ export GOPATH=/$HOME/go`

       - ` $ export GOROOT=/usr/local/go`

       - `$ export GOBIN=$GOPATH/bin`

       - `$ export PATH=$PATH:$GOBIN`

  - Salve e feche o arquivo

- Após essa pequena configuração seu ambiente Go esta pronto para uso :D 

