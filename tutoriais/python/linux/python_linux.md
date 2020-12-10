## Instalar o Python no Linux

Para instalar Python 3 no Linux

Consulte primeiro se o Python já está instalado.

    $ python --version

  ou

    $ python3 --version

#### Nota

   `Se sua distribuição do Linux for fornecida com o Python, poderá ser necessário instalar o pacote do desenvolvedor 
Python para ter os cabeçalhos. Use o gerenciador de pacote para instalar o pacote do desenvolvedor 
(geralmente chamado python-dev ou python-devel).`

   Se `Python 2.7` ou posterior não estiver instalado, instale Python com o gerenciador de pacote de distribuição. 
O comando e o nome do pacote varia de acordo com a sua distribuição:

     
   *  No derivados do Debian, como Ubuntu, use `apt-get`. Verifique no repositório apt as versões do Python disponíveis para você. Depois, execute um comando semelhante ao seguinte, substituindo o nome do pacote correto:
      ```sh
        $ sudo apt-get install python3
      ```
   * No Red Hat e derivados, use `yum`. Verifique no repositório yum as versões do Python disponíveis para você. Depois, execute um comando semelhante ao seguinte, substituindo o nome do pacote correto:
      ```sh
        $ sudo yum install python36
      ```
   * No SUSE e derivados, use o `zypper`. Verifique no repositório as versões do Python disponíveis para você. Depois, execute um comando semelhante ao seguinte, substituindo o nome do pacote correto:
      ```sh
        $ sudo zypper install python3
      ```
   * No Arch Linux e derivados, use o `pacman`. Verifique no repositório as versões do Python disponíveis para você. Depois, execute um comando semelhante ao seguinte, substituindo o nome do pacote correto:
      ```sh
        $ sudo pacman -S python3 
      ```
 Consulte a documentação do gerenciador de pacotes do sistema e do Python para obter mais informações sobre onde ele é instalado e como usá-lo.

 Abra um prompt de comando ou shell e execute o comando a seguir para verificar se o Python foi instalado corretamente.
```sh
    $ python3 --version
    Python 3.7
```
