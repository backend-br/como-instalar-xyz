<p align="center">
  <img src="https://avatars3.githubusercontent.com/u/30732658?v=4&s=200.jpg" alt="BackEndBR" width="230" />
</p>

# Como instalar XYZ

Repositório com vários tutoriais para instalar várias coisas em vários sistemas operacionais. Precisa de ajuda pra instalar aquele compilador? Tá aqui!

Só pesquisar no repositório pelo que precisa ou dar uma olhada no sumário abaixo!

Tá sentindo falta de algum tutorial? Abra uma issue!

## Como contribuir?

Você sabe como instalar algo, ou viu algum tutorial que precisa de umas correções? Só abrir uma issue, dizendo que você vai escrever certo tutorial - assim outra pessoa não corre o risco de fazer o mesmo que você - e fazer um fork!

A estrutura de pastas começa sendo separada por linguagem/projeto e depois pelo sistema.

Caso o tutorial diferencie de versão pra versão, como Debian para Arch no Linux(devido a coisas como o gerenciador de pacotes, etc), crie uma pasta com o nome base do sistema(`windows`, `linux`, `macOS`) e dentro dela um arquivo com o nome da versão que você quer criar um tutorial, ex: `tutoriais/docker/linux/debian.md`. 

Assim que você criar um tutorial, só precisa indicar no `README.md` do projeto, um link pro seu tutorial, assim mantemos um índice completo e fácil de usar

```
.
├── LICENSE
├── README.md
└── tutoriais
    └── php
        ├── linux.md
        ├── README.md
        └── windows.md

```

Se a pasta da linguagem/projeto não existir, é só criar e dentro dela colocar um arquivo do sistema operacional!

---

# Sumário

- [Linguagens](#linguagens)
- [Editores de texto, IDEs e etc](#editores-de-texto-ides-e-etc)
- [Outros](#outros)

---

# Linguagens

| Nome  | Linux | MacOS | Windows | FreeBSD
| --- | --- | --- | --- | --- |
| NodeJS | [link](./tutoriais/nodejs/linux.md) | [link](./tutoriais/nodejs/mac.md) | [link](./tutoriais/nodejs/windows.md) | Não tem |
| Java | [link](./tutoriais/java/linux/ubuntu.md)| Não tem | [link](./tutoriais/java/windows/windows.md) | Não tem |
| R | [link](./tutoriais/R/linux/ubuntu.md)| Não tem | Não tem | Não tem|
| Ruby | [link](./tutoriais/ruby/linux.md)| [link](./tutoriais/ruby/macos.md) | [link](./tutoriais/ruby/windows.md) | Não tem|
| Go | [link](./tutoriais/go/linux.md) | Não tem | Não tem | Não tem|
| PHP | [link](./tutoriais/php/linux/ubuntu.md) | Não tem | Não tem | Não tem|
| Kotlin | [link](./tutoriais/kotlin/linux/ubuntu.md) | Não tem | Não tem | Não tem|

# Editores de texto, IDEs e etc

| Nome  | Linux | MacOS | Windows | FreeBSD
| --- | --- | --- | --- | --- |
| VSCode | [link](./tutoriais/vscode/README.md) | [link](./tutoriais/vscode/macOS/macOS.md) | Não tem | Não tem |
| Eclipse | [link](./tutoriais/eclipse/linux/README.md) | Não tem | Não tem | Não tem |
| Sublime Text 3 | [link](./tutoriais/sublime/linux/ubuntu.md) | Não tem | Não tem | Não tem |

# Bancos de Dados

| Nome  | Linux | MacOS | Windows | FreeBSD
| --- | --- | --- | --- | --- |
| MySQL | [link](./tutoriais/mysql/linux/ubuntu.md) | Não tem | Não tem | Não tem |
| PostgreSQL | [link](./tutoriais/postgresql/linux.md) | Não tem | Não tem | Não tem |
| MongoDB | [link](./tutoriais/mongodb/linux/ubuntu.md) | Não tem | Não tem | Não tem |

# Frameworks, bibliotecas & etc

| Nome  | Linux | MacOS | Windows | FreeBS
| --- | --- | --- | --- | --- |
| Pyenv | [link](./tutoriais/pyenv/linux/ubuntu.md) | Não tem | Não tem | Não tem |
| Composer | [link](./tutoriais/composer/linux/ubuntu.md) | Não tem | Não tem | Não tem |
| Laravel | [link](./tutoriais/laravel/linux/ubuntu.md) | Não tem | Não tem | Não tem |

# Outros

| Nome  | Linux | MacOS | Windows | FreeBS
| --- | --- | --- | --- | --- |
| Docker | [link](./tutoriais/docker/README.md) | Não tem | [link](./tutoriais/docker/windows/windows.md) | Não tem |
| Apache | [link](./tutoriais/apache/linux/ubuntu.md) | Não tem | Não tem | Não tem |
| Nginx | [link](./tutoriais/nginx/linux/ubuntu.md) | Não tem | Não tem | Não tem |
| Git | [link](./tutoriais/git/linux/ubuntu.md) | Não tem | Não tem | Não tem |
