# PHP

*Este tutorial é uma modifição do tutorial da [Digital Ocean](https://www.digitalocean.com/community/tutorials/como-instalar-a-pilha-linux-apache-mysql-php-lamp-no-ubuntu-18-04-pt)*


O PHP é o componente que irá processar código para exibir o conteúdo dinâmico. Ele pode executar script, conectar às nossas bases de dados MySQL para obter informações, e entregar o conteúdo processado para o nosso servidor web exibir.

Aproveite o sistema apt para instalar o PHP. Adicionalmente, inclua alguns pacotes auxiliares para que o código PHP possa rodar sob o servidor Apache e falar com o seu banco de dados MySQL:

```shell
$ sudo apt install php libapache2-mod-php php-mysql
```
Isto irá instalar o PHP sem problemas. Vamos testar isso em instantes.

Na maioria do casos, vamos querer modificar a forma com a qual o Apache serve arquivos quando uma pasta é requisitada. Atualmente, se um usuário requisita uma pasta do servidor, o Apache irá olhar primeiramente para um arquivo chamado index.html. Queremos informar ao nosso servidor web para dar preferência aos arquivos PHP, então faremos o Apache olhar para um arquivo index.php primeiro.

Para fazer isto, digite este comando para abrir o arquivo dir.inf em um editor de texto com privilégios de root:

```shell
$ sudo nano /etc/apache2/mods-enabled/dir.conf
```
Ele terá esta aparência:

```shell
<IfModule mod_dir.c>
    DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm
</IfModule>
```

Mova o arquivo de índice PHP (index.php) para a primeira posição depois da especificação DirectoryIndex , como segue:

```shell
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
```
Quando você tiver concluído, salve e feche o arquivo pressionando CTRL-X. Confirme a gravação digitando Y e em seguida pressione ENTER para confirmar a localização de salvamento do arquivo.

Se você estiver utilizando o servidor apache, reinicie o servidor, de forma que nossas alterações sejam reconhecidas. Você pode fazer isto digitando o seguinte:

```shell
$ sudo systemctl restart apache2
```

A fim de testar se seu sistema está corretamente configurado para o PHP, crie um script PHP bem básico denominado info.php. Para que o servidor web possa encontrar o arquivo e servi-lo corretamente, ele deve ser salvo em um diretório muito específico, o qual é chamado de "web root".

No Ubuntu 18.04, este diretório está localizado em /var/www/html. Crie o arquivo neste local digitando:

```shell
$ sudo nano /var/www/html/info.php
```
Isto vai abrir um arquivo em branco. Coloque o texto a seguir, que é um código PHP válido, dentro do arquivo:

```php
<?php
phpinfo();
?>
```

Quando você tiver concluído, salve e feche o arquivo.

Agora você pode testar se seu servidor web pode exibir corretamente o conteúdo gerado por esse script PHP. Para testar isso, visite esta página em seu navegador web. Você vai precisar novamente do endereço IP público do seu servidor.

O endereço que você vai querer visitar é:

```
http://ip_do_seu_servidor/info.php
```
A página que você deve ver são as informações do php que foi instalado na máquina.

Esta página fornece a você informações básicas sobre seu servidor a partir da perspectiva do PHP. Ela é útil para depuração e para assegurar que suas configurações estão sendo corretamente aplicadas.

Se você pode ver essa página em seu navegador, então seu PHP está funcionando como esperado.

Você provavelmente vai querer remover este arquivo depois do teste, pois ele realmente pode fornecer informações sobre seu servidor para usuários não autorizados. Para fazer isto, execute o seguinte comando:

```shell
$ sudo rm /var/www/html/info.php
```

Você sempre poderá recriar esta página se precisar acessar novamente as informações mais tarde.