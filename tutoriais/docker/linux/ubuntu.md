# Docker no Ubuntu

O Docker cria e executa aplicações em containers. Este tutorial instala o Docker pelo repositório oficial e, como
complemento, o docker-compose.

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

### 1. Remova versões antigas

Verifique se não há nenhuma versão antiga do Docker no seu sistema:

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### 2. Instale as dependências

Instale os componentes necessários para a instalação do Docker:

```bash
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

### 3. Adicione a chave GPG do Docker

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
```

### 4. Adicione o repositório ao apt

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt-get update
```

### 5. Instale o Docker

```bash
sudo apt-get install docker-ce
```

### 6. Use o Docker sem sudo

Para usar o Docker sem a necessidade do `sudo`, utilize este comando:

```bash
sudo usermod -aG docker ${USER}
```

### 7. Instale o docker-compose

Um complemento importante é o docker-compose, um componente muito útil quando se trata de Docker:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.15.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Todos os comandos de uma vez

Se preferir, copie e execute o trecho abaixo, que reúne os passos 1 a 6:

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo usermod -aG docker ${USER}
```

## Verificação

```bash
docker --version
docker-compose --version
```

A saída deve mostrar as versões instaladas do Docker e do docker-compose.

## Referências

- [Documentação oficial do Docker para Ubuntu (em inglês)](https://docs.docker.com/engine/install/ubuntu/)
- [Documentação oficial do Docker Compose (em inglês)](https://docs.docker.com/compose/install/)
