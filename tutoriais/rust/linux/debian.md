# Rust no Debian

## Requisitos

- `curl` instalado.

## Instalação

Este tutorial instala o Rust com o `rustup`, que instala e gerencia o compilador e o `cargo`.

### 1. Execute o instalador do rustup

O `rustup` ainda não existe no repositório padrão do Debian, então execute este comando:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Esse comando instala o diretório `.cargo` na sua `home`.

### 2. Adicione o cargo ao PATH

O diretório ainda não está no `PATH`, então se você tentar rodar `cargo build` no seu projeto Rust, não vai funcionar.
Para adicioná-lo, rode este comando:

```bash
export PATH=$PATH:~/.cargo/bin
```

Pronto, o Rust está instalado.

## Verificação

```bash
rustc --version
cargo --version
```

A saída deve mostrar as versões instaladas do compilador e do cargo.

## Referências

- [Instalação do Rust (site oficial)](https://www.rust-lang.org/pt-BR/tools/install)
- [rustup](https://rustup.rs/)
