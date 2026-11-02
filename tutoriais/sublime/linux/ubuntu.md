# Sublime Text no Ubuntu

O Sublime Text é um editor de texto para código. Este tutorial instala a versão 3 do Sublime Text pelo repositório
oficial.

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

### 1. Adicione a chave GPG

Baixe o arquivo GPG e adicione-o ao apt-key:

```bash
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

### 2. Adicione o repositório oficial

```bash
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

### 3. Instale o Sublime Text

Atualize seus repositórios:

```bash
sudo apt-get update
```

Em seguida, instale o Sublime Text:

```bash
sudo apt-get install sublime-text
```

## Verificação

```bash
subl --version
```

A saída deve mostrar a versão do Sublime Text instalada.

## Referências

- [Repositórios Linux do Sublime Text (em inglês)](https://www.sublimetext.com/docs/linux_repositories.html)
