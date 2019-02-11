# Ruby

Faça o downlaod do [RubyInstaller](https://rubyinstaller.org/). Escolha a opção de download **With DevKit**.

Execute o instalador:
* Mantenha o diretório padrão sugerido.
* Marque as três opções disponíveis

Ao terminar a copia de arquivos, clique em `finish`. Será aberto um terminal.
* Clique 1 para a escolha padrão e tecle `Enter`.
* Aguarde o processo terminar e tecle 'Enter' ao final.

___

Para validar a instalação, abra o Prompt do Windows e digite:
```shell
ruby -v
```

Deverá ser exibido uma mensagem como esta, dependendo da versão instalada:
```shell
ruby 2.6.1p33 (2019-01-30 revision 66950) [x64-mingw32]
```

Opcionalmente você pode instalar o Rails:
```shell
gem install rails --no-document
```
