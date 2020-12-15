O `Rust` utiliza o `rustup` para compilar códigos feitos em `Rust`.

Ele por enquanto ainda não existe no repositorio padrão do `Debian`, para isso vamos executar esse comando.

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Esse comando instala  o diretório `.cargo` na sua `home`.

Mas ainda não acabou, pois ele não está no `PATH`, se você tentar rodar  `cargo build` no seu projeto  `Rust` não vai funcionar, pois não adicionamos ele no `PATH`.

Para adicionar rode esse comando:
```
export PATH=$PATH:~/.cargo/bin
```

Pronto, o rust está instalado.