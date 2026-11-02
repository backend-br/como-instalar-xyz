# Apache no Ubuntu

## Requisitos

- Um servidor Ubuntu com um usuário comum (não root) com privilégios `sudo`.
- Um firewall básico ativo para bloquear portas não essenciais.

Quando tiver essa conta disponível, faça login com o usuário não root para começar.

## Instalação

### 1. Instale o Apache

O Apache está disponível nos repositórios de software padrão do Ubuntu, então você pode instalá-lo com as ferramentas
convencionais de gerenciamento de pacotes.

Atualize o índice de pacotes local:

```bash
sudo apt update
```

Instale o pacote `apache2`:

```bash
sudo apt install apache2
```

### 2. Ajuste o firewall

Verifique os perfis de aplicativos disponíveis no `ufw`:

```bash
sudo ufw app list
```

```text
Available applications:
  Apache
  Apache Full
  Apache Secure
  OpenSSH
```

Ative o perfil mais restritivo que ainda permite o tráfego necessário, liberando a porta 80 (tráfego web normal, não
criptografado):

```bash
sudo ufw allow 'Apache'
```

Verifique a mudança:

```bash
sudo ufw status
```

```text
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Apache                     ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Apache (v6)                ALLOW       Anywhere (v6)
```

## Verificação

Confirme no systemd que o serviço está em execução:

```bash
sudo systemctl status apache2
```

```text
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

Acesse a página inicial padrão do Apache pelo endereço IP do servidor para confirmar que o software está funcionando
corretamente:

```text
http://localhost
```

Você deverá ver a página padrão do Apache no Ubuntu.

## Referências

- [Documentação oficial do Apache HTTP Server](https://httpd.apache.org/docs/)
