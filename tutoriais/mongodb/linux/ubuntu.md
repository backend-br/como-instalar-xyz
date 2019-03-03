# MongoDB

A instalação difere nas versões 16.04 e 18.04, portanto este tutorial segue as maneiras de instalação para ambas as versões.

O MongoDB já está incluído nos repositórios de pacotes do Ubuntu, mas o repositório oficial do MongoDB fornece versões mais atualizadas e é a maneira recomendada de instalar o software. Neste caso, instalaremos via repositório oficial.

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

Após a importação da chave você verá esse output no terminal:

```shell
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
```

À seguir precisamos adicionar os detalhes do repositório para que o ```apt``` saiba de onde baixar os pacotes. Copie o comando correspondente à sua versão.

### 18.04 (Bionic)

```shell
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

### 16.04 (Xenial)
```shell
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

### 14.04 (Trusty)
```shell
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```


Agora atualize a lista de pacotes:

```shell
sudo apt-get update
```

E agora basta instalar o MongoDB via apt:

```shell
sudo apt-get install -y mongodb-org
```

## Iniciando o MongoDB
Para verificar se a instalação ocorreu com sucesso, inicie o MongoDB:

```shell
sudo service mongod start
```