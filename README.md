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
| NodeJS | [link](./tutoriais/nodejs/linux.md) | [link](./tutoriais/nodejs/mac.md) | Não tem | Não tem |
| Java | [link](./tutoriais/java/linux/ubuntu.md) | Não tem | Não tem | Não tem |

# Editores de texto, IDEs e etc

| Nome  | Linux | MacOS | Windows | FreeBSD
| --- | --- | --- | --- | --- |
| VSCode | [link](./tutoriais/vscode/linux/ubuntu.md) | Não tem | Não tem | Não tem |

# Outros

| Nome  | Linux | MacOS | Windows | FreeBS
| --- | --- | --- | --- | --- |
| Docker | [link](./tutoriais/docker/README.md) | Não tem | Não tem | Não tem |
