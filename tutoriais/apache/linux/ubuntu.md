# Apache

O servidor HTTP Apache é o servidor da Web mais usado no mundo. Ele fornece muitos recursos poderosos, incluindo módulos dinamicamente carregáveis, suporte de mídia robusto e ampla integração com outros softwares populares.

Instalar o Apache no Ubuntu é bem simples.

## Pré-requisitos

Antes de começar este guia, você deve ter o seguinte:

- Um servidor Ubuntu e um usuário normal não-root com privilégios sudo. Além disso, você precisará ativar um firewall básico para bloquear portas não essenciais.

Quando você tiver uma conta disponível, faça login como seu usuário não root para começar.

## Instalação

1. Instalando o Apache

O Apache está disponível nos repositórios de software padrão do Ubuntu, para que você possa instalá-lo usando ferramentas convencionais de gerenciamento de pacotes.

Atualize seu índice de pacotes local:

```shell
$ sudo apt update
```
Instale o pacote apache2:

```shell
$ sudo apt install apache2
```
2. Ajustando o Firewall
   
Verifique os perfis de aplicativos disponíveis do **ufw**:

```shell
$ sudo ufw app list
```

```shell
Output
Available applications:
  Apache
  Apache Full
  Apache Secure
  OpenSSH
```

Vamos ativar o perfil mais restritivo que ainda permitirá o tráfego que você configurou, permitindo o tráfego na porta 80 (tráfego normal da web não criptografado):

```shell
$ sudo ufw allow 'Apache'
```

Verifique as mudança:

```shell
$ sudo ufw status
```
```shell
Output
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Apache                     ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Apache (v6)                ALLOW       Anywhere (v6)
```

3. Verificando seu servidor da web

Verifique com o sistema init systemd para certificar-se de que o serviço está sendo executado digitando:

```shell
$ sudo systemctl status apache2
```

```shell
Output
● apache2.service - The Apache HTTP Server
   Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
  Drop-In: /lib/systemd/system/apache2.service.d
           └─apache2-systemd.conf
   Active: active (running) since Tue 2018-04-24 20:14:39 UTC; 9min ago
 Main PID: 2583 (apache2)
    Tasks: 55 (limit: 1153)
   CGroup: /system.slice/apache2.service
           ├─2583 /usr/sbin/apache2 -k start
           ├─2585 /usr/sbin/apache2 -k start
           └─2586 /usr/sbin/apache2 -k start
```
Acesse a página inicial padrão do Apache para confirmar que o software está sendo executado corretamente por meio do seu endereço IP:

```
http://localhost
```
Você deverá ver a página padrão do Apache do Ubuntu.
