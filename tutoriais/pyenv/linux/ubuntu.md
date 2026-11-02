# Pyenv no Ubuntu

O Pyenv permite alternar entre múltiplas versões de Python de maneira simples e rápida.

## Requisitos

- Git instalado.
- Um usuário com permissão para usar `sudo`.

## Instalação

### 1. Clone o repositório do pyenv

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

O comando acima clona o repositório do pyenv em um diretório oculto chamado `.pyenv`, no diretório _home_ (`~`) do
usuário atual. Todas as outras instruções se baseiam nessa mesma localização (`~/.pyenv`).

### 2. Exporte as variáveis de ambiente

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
```

Se você usa _zsh_, substitua `bashrc` por `zshenv`.

### 3. Adicione `pyenv init` ao seu shell

```bash
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc
```

- Se você usa _zsh_, substitua `bashrc` por `zshenv`.
- Se você usa _fish_, substitua `eval (pyenv init -)` por `pyenv init - | source`.

### 4. Reinicie seu shell

```bash
exec "$SHELL"
```

### 5. Instale as dependências de build

O pyenv possui uma seção de [problemas comuns de build](https://github.com/pyenv/pyenv/wiki/common-build-problems) com
orientações para cada um dos possíveis erros de dependência. No Ubuntu, é conveniente instalar as seguintes
dependências:

```bash
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev \
libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
xz-utils tk-dev libffi-dev liblzma-dev python-openssl
```

### 6. Instale uma versão do Python

Para instalar uma versão do Python:

```bash
pyenv install 3.7.2
```

Para verificar as versões já instaladas:

```bash
pyenv versions
```

Para definir uma versão como global:

```bash
pyenv global 3.7.2
```

## Verificação

```bash
pyenv
```

A saída deverá ser algo como:

```text
pyenv 1.2.6
Usage: pyenv <command> [<args>]

Some useful pyenv commands are:
   commands    List all available pyenv commands
   local       Set or show the local application-specific Python version
   global      Set or show the global Python version
   shell       Set or show the shell-specific Python version
   install     Install a Python version using python-build
   uninstall   Uninstall a specific Python version
   rehash      Rehash pyenv shims (run this after installing executables)
   version     Show the current Python version and its origin
   versions    List all Python versions available to pyenv
   which       Display the full path to an executable
   whence      List all Python versions that contain the given executable

See `pyenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/pyenv/pyenv#readme
```

## Referências

- [Repositório oficial do pyenv](https://github.com/pyenv/pyenv)
- [Problemas comuns de build do pyenv (em inglês)](https://github.com/pyenv/pyenv/wiki/common-build-problems)
