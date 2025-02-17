# Como Instalar o Homebrew no macOS

## Pré-requisitos
- Computador com macOS
- Acesso de administrador
- Terminal

## Passo a passo

### 1. Abra o Terminal
Você pode encontrar o Terminal através do Spotlight (⌘ + Espaço) e digite "Terminal"

### 2. Instale o Homebrew
Execute o seguinte comando no Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 3. Adicione o Homebrew ao PATH
Após a instalação, adicione o Homebrew ao seu PATH executando estes comandos:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 4. Verifique a instalação
Para confirmar que o Homebrew foi instalado corretamente:

```bash
brew --version
```

## Comandos básicos

```bash
# Atualizar o Homebrew
brew update

# Instalar um programa
brew install nome_do_programa

# Remover um programa
brew uninstall nome_do_programa

# Listar programas instalados
brew list

# Procurar por programas
brew search termo_de_busca
```

## Solução de problemas comuns

### Permissões de diretório
Se encontrar problemas de permissão, execute:

```bash
sudo chown -R $(whoami) /usr/local/Homebrew
```

### Atualizações pendentes
Para verificar e corrigir problemas:

```bash
brew doctor
```

## Desinstalação
Se precisar remover o Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
```

## Referências
- [Documentação oficial do Homebrew](https://brew.sh/)
- [GitHub do Homebrew](https://github.com/Homebrew/brew)