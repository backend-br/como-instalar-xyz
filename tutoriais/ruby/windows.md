# Ruby no Windows

## Requisitos

Para a opção 1 (RubyInstaller), nenhum. Para a opção 2 (Scoop):

- [PowerShell 3](https://www.microsoft.com/en-us/download/details.aspx?id=34595).
- [.NET Framework 4.5](https://dotnet.microsoft.com/download).

## Instalação

Este tutorial instala o Ruby no Windows com o RubyInstaller ou com o Scoop.

Escolha uma das duas opções abaixo.

### Opção 1: RubyInstaller

Faça o download do [RubyInstaller](https://rubyinstaller.org/). Escolha a opção de download **With DevKit**.

Execute o instalador:

- Mantenha o diretório padrão sugerido.
- Marque as três opções disponíveis.

Ao terminar a cópia de arquivos, clique em `Finish`. Será aberto um terminal:

- Digite `1` para a escolha padrão e tecle `Enter`.
- Aguarde o processo terminar e tecle `Enter` ao final.

Opcionalmente, instale o Rails:

```bat
gem install rails --no-document
```

### Opção 2: Scoop

Segure a tecla Windows e a tecla R juntas. Na janela que se abre, digite `powershell` e aperte `Enter`.

Execute os comandos abaixo, um de cada vez:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

Se tudo ocorreu bem, instale o Ruby com o comando:

```powershell
scoop install ruby
```

Para instalar mais versões do Ruby ou de qualquer outro programa, instale antes mais duas dependências:

```powershell
scoop install git
scoop bucket add versions
```

Em seguida, para instalar outras versões, use o comando:

```powershell
scoop install ruby19 ruby24 ruby25
```

Para trocar de versão, use `scoop reset <programa com outra versão>`. Para trocar para a versão 2.4.5, por exemplo:

```powershell
scoop reset ruby24
```

Feche o Prompt do Windows e abra novamente para aceitar as mudanças.

É recomendável instalar também o `msys2` para garantir suporte a gems compiladas em linguagem C. Caso queira fazê-lo,
atualize o ambiente fechando e abrindo o Prompt do Windows e use o seguinte comando:

```powershell
scoop install msys2
```

Em seguida, execute `msys2`. Atualize o ambiente, use o comando `ridk install` e atualize o ambiente novamente.

Opcionalmente, instale o Rails:

```powershell
gem install rails
```

## Verificação

Abra o Prompt do Windows e digite:

```bat
ruby -v
```

Deverá ser exibida uma mensagem como esta, dependendo da versão instalada:

```text
ruby 2.6.1p33 (2019-01-30 revision 66950) [x64-mingw32]
```

Se nada acontecer, feche o Prompt do Windows e abra novamente.

## Referências

- [RubyInstaller](https://rubyinstaller.org/)
- [Scoop](https://scoop.sh/)
- [Instalando o Ruby (documentação oficial)](https://www.ruby-lang.org/pt/documentation/installation/)
