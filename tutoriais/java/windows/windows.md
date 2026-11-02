# Java no Windows

A instalação do JDK no Windows é bem simples. Este tutorial mostra os passos necessários para instalar o JDK 11 e
configurar a variável de ambiente `JAVA_HOME`.

## Requisitos

Nenhum.

## Instalação

### 1. Baixe e execute o instalador

Acesse a [página de downloads do Java](https://www.oracle.com/java/technologies/downloads/) e baixe o instalador do
JDK 11. Aceite a licença e escolha o arquivo com extensão `.exe`.

Após a conclusão do download, execute o instalador (basicamente clicar em _Next_) e anote o diretório de instalação, que
será usado para configurar a variável de ambiente `JAVA_HOME`.

### 2. Configure a variável de ambiente JAVA_HOME

1. Acesse **Painel de Controle** -> **Sistema e Segurança** -> **Sistema**.
2. No menu lateral à esquerda, clique em **Configurações avançadas do sistema**.
3. Clique em **Variáveis de Ambiente** e, na parte de baixo, em **Variáveis do sistema**, clique em **Novo...**.
4. Em **Nome da variável** digite **JAVA_HOME** e em **Valor da variável** digite o diretório da instalação do JDK,
   parecido com **C:\Program Files\Java\jdk-11.0.9**. Para finalizar, clique em **OK** em todas as janelas abertas.

## Verificação

Abra o CMD e digite:

```bat
java -version
```

Se aparecer `java version "11.0.9"`, a instalação e a configuração da variável de ambiente foram feitas corretamente.

## Referências

- [Downloads do Java (Oracle)](https://www.oracle.com/java/technologies/downloads/)
- [Instalação do JDK 11 no Windows (documentação oficial, em inglês)](https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html)
