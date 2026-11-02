# Python no Linux

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Este tutorial instala o Python 3 com o gerenciador de pacotes da sua distribuição Linux.

### 1. Verifique se o Python já está instalado

```bash
python --version
```

ou

```bash
python3 --version
```

Se a sua distribuição do Linux já vier com o Python, pode ser necessário instalar o pacote de desenvolvimento do Python
para ter os cabeçalhos. Use o gerenciador de pacotes para instalar esse pacote (geralmente chamado `python-dev` ou
`python-devel`).

### 2. Instale o Python

Se o Python 2.7 ou posterior não estiver instalado, instale o Python com o gerenciador de pacotes da sua distribuição. O
comando e o nome do pacote variam de acordo com a distribuição. Verifique no repositório quais versões do Python estão
disponíveis e execute um comando semelhante aos abaixo, substituindo pelo nome correto do pacote.

Debian e derivados, como o Ubuntu, usam o `apt-get`:

```bash
sudo apt-get install python3
```

Red Hat e derivados usam o `yum`:

```bash
sudo yum install python36
```

SUSE e derivados usam o `zypper`:

```bash
sudo zypper install python3
```

Arch Linux e derivados usam o `pacman`:

```bash
sudo pacman -S python3
```

Consulte a documentação do gerenciador de pacotes do sistema e do Python para obter mais informações sobre onde ele é
instalado e como usá-lo.

## Verificação

Abra um terminal e execute o comando a seguir para verificar se o Python foi instalado corretamente:

```bash
python3 --version
```

```text
Python 3.7
```

## Referências

- [Usando Python em plataformas Unix (documentação oficial)](https://docs.python.org/pt-br/3/using/unix.html)
- [Downloads do Python](https://www.python.org/downloads/)
