# MongoDB no Ubuntu

## Requisitos

- Ubuntu 18.04 (Bionic), 16.04 (Xenial) ou 14.04 (Trusty). A instalação difere entre essas versões, e o tutorial mostra
  o comando de cada uma.
- Um usuário com permissão para usar `sudo`.

## Instalação

O MongoDB já está nos repositórios do Ubuntu, mas o repositório oficial do MongoDB traz versões mais atualizadas e é a
forma recomendada. Este tutorial instala o MongoDB 4.0 pelo repositório oficial.

### 1. Importe a chave do repositório

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

Após a importação da chave você verá esta saída no terminal:

```text
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
```

### 2. Adicione o repositório

Adicione os detalhes do repositório para que o `apt` saiba de onde baixar os pacotes. Copie o comando correspondente à
sua versão.

Ubuntu 18.04 (Bionic):

```bash
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

Ubuntu 16.04 (Xenial):

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

Ubuntu 14.04 (Trusty):

```bash
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

### 3. Instale o MongoDB

Atualize a lista de pacotes:

```bash
sudo apt-get update
```

Instale o MongoDB via apt:

```bash
sudo apt-get install -y mongodb-org
```

## Verificação

Para verificar se a instalação ocorreu com sucesso, inicie o MongoDB:

```bash
sudo service mongod start
```

Confira também a versão instalada:

```bash
mongod --version
```

## Referências

- [Instalação do MongoDB no Ubuntu (documentação oficial, em inglês)](https://www.mongodb.com/docs/manual/administration/install-community-linux/?linux-distro=ubuntu&linux-method=pkg)
