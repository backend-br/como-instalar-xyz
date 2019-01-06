# Docker

Instalar o Docker no Linux é bem simples, primeiro verifique se não há nenhuma versão antiga do Docker no seu sistema usando

```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

Logo em seguida, instale os componentes necessários para instalação do Docker

```
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

Agora é a hora do GPG Key do Docker 

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
```



Adicione o repositório ao apt.

```
 sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
 sudo apt-get update
```

E por fim, instale o Docker ! 


```
sudo apt-get install docker-ce
```



### Adicional.

Para usar o Docker sem a necessidade de usar o **sudo** utilize esse comando.

```
sudo useradd -g docker ${USER}
```

Uma coisa importante de complementar é a instalação do docker-compose.

Que é um componente muito util quando se trata de Docker :) 

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```


## Se estiver com pressa, só copiar esse trecho de código a frente e executar 

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo useradd -g docker ${USER}
```
