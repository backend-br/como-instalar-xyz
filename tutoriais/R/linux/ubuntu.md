# R no Ubuntu

R é uma linguagem de programação voltada para estatística e análise de dados. Este tutorial instala o interpretador da
linguagem R pelo apt.

## Requisitos

- Um usuário com permissão para usar `sudo`.

## Instalação

Para instalar o interpretador da linguagem R, use o seguinte comando no terminal:

```bash
sudo apt install r-base -y
```

Explicando o comando:

- `sudo` eleva o comando a superusuário, que tem permissão de root.
- `apt` é o gerenciador de pacotes padrão das distribuições baseadas no Debian, substituto do `apt-get` com mais
  recursos.
- `install` é o comando que faz a instalação propriamente dita.
- `r-base` é o nome do pacote a instalar, no caso, o interpretador R.
- `-y` aceita as mudanças sem pedir confirmação durante a instalação, assim você pode ir tomar um café enquanto ela é
  feita.

## Verificação

```bash
R --version
```

A saída deve mostrar a versão do R instalada.

## Referências

- [R para Ubuntu no CRAN (em inglês)](https://cran.r-project.org/bin/linux/ubuntu/)
