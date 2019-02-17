

# Opção 1

Faça o download do [RubyInstaller](https://rubyinstaller.org/). Escolha a opção de download **With DevKit**.

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
# Opção 2

Requisitos:
* [PowerShell 3](https://www.microsoft.com/en-us/download/details.aspx?id=34595)
* [NET Framework 4.5](https://www.microsoft.com/net/download)

Se os requisitos atendem, segure a tecla Windows e a tecla R juntas. Na janela que se abre, digite `powershell` e aperte a tecla ENTER.

Cole o seguinte código e aperte ENTER.

```shell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser -force ; iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

Se tudo ocorreu bem, você já está apto para instalar o ruby com o comando:

```shell
scoop install ruby
```

Neste momento, para confirmar que ruby está instalado e funcionando, podemos executar o comando `ruby -v`.

Se nada acontecer, recomendo fechar o Prompt do Windows e abrir novamente.

Para instalar mais versões do ruby ou de qualquer outro programa, devemos instalar antes mais duas dependências:

```shell
scoop install git
scoop bucket add versions
```

e finalmente, para instalar outras versões, usamos o comando:

```shell
scoop install ruby19 ruby24 ruby25
```

Para trocar de versão, use `scoop reset <programa com outra versão>`. Para trocar para a versão 2.4.5, por exemplo:

```shell
scoop reset ruby24
```

Feche o Prompt do Windows e abra novamente para aceitar as mudanças.

---

O tutorial acaba por aqui, mas é recomendável instalar o `msys2` para garantir suporte à gems compiladas em linguagem C.

Caso queira fazê-lo, atualize o ambiente, fechando e abrindo o Prompt do Windows e usando o seguintes comandos:

```shell
scoop install msys2
```
e em seguida `msys2`.

Atualize o ambiente, use o comando `ridk install` e atualize o ambiente novamente.

Opcionalmente você pode instalar o Rails:

```shell
gem install rails
```
