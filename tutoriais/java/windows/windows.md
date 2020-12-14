# JDK 11


A instalação do JDK no windows é bem simples, este tutorial lhe mostrará os passos 
nescessário.

Primeiramente acesse o link a seguir para baixar o instalador do JDK 11. 

[JDK 11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html) 

Aceite a licença e escolha o arquivo com extensão .exe. 

Após a conclussão do download execute o instalador - basicamente clicar em next - e anote o diretório de instalação, precisaremos para configurar a variável de ambiente JAVA_HOME. 


# Variável de ambiente JAVA_HOME


1. Acesse o **Painel de Controle** -> **Sistema e Segurança** - >  **Sistema**

2. No meu lateral a esquerda, clique em **Configurações avançadas do sistema**.

3. Clique na parte inferior em **Variáveis de Ambiente** na parte de baixo **Variáveis do sistema** clique em **Novo..**.

4. Em **Nome da variável** digite **JAVA_HOME**, em **Valor da variável** digite o diretório da instalação do JDK. Parecido com esse **C:\Program Files\Java\jdk-11.0.9** para finalizar clique em **ok** em todas janelas abertas.


# Verificando a instalação

Abra o CMD e digite: **java -version** se aparecer: **java version: 11.0.9**, a instalação e configuração da variável de ambiente foi feita corretamente.




