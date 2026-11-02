# Nginx no Ubuntu

## Requisitos

- Uma máquina Ubuntu com acesso à Internet.
- Um usuário local que possa se tornar `root`.

## Instalação

Este tutorial instala o Nginx pelo pacote oficial da distribuição, para fins de estudo.

### 1. Instale o Nginx

```bash
sudo apt-get -y install nginx
```

### 2. Conheça os arquivos de configuração

A configuração do serviço fica em `/etc/nginx`, com esta estrutura:

```text
/etc/nginx
├── conf.d
├── fastcgi.conf
├── fastcgi_params
├── koi-utf
├── koi-win
├── mime.types
├── modules-available
├── modules-enabled
│   ├── 50-mod-http-geoip.conf -> /usr/share/nginx/modules-available/mod-http-geoip.conf
│   ├── 50-mod-http-image-filter.conf -> /usr/share/nginx/modules-available/mod-http-image-filter.conf
│   ├── 50-mod-http-xslt-filter.conf -> /usr/share/nginx/modules-available/mod-http-xslt-filter.conf
│   ├── 50-mod-mail.conf -> /usr/share/nginx/modules-available/mod-mail.conf
│   └── 50-mod-stream.conf -> /usr/share/nginx/modules-available/mod-stream.conf
├── nginx.conf
├── proxy_params
├── scgi_params
├── sites-available
│   └── default
├── sites-enabled
│   └── default -> /etc/nginx/sites-available/default
├── snippets
│   ├── fastcgi-php.conf
│   └── snakeoil.conf
├── uwsgi_params
└── win-utf
```

O arquivo principal de configuração fica em `/etc/nginx/nginx.conf`.

O arquivo de configuração do virtual host padrão está em `/etc/nginx/sites-enabled/default`, no qual podemos ver que os
arquivos servidos ficam em `root /var/www/html;`.

Quando alterar algo, teste a nova configuração com:

```bash
sudo nginx -t
```

```text
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Caso esteja tudo correto (como no caso deste exemplo), basta recarregar, ou seja, mandar um sinal para o Nginx:

```bash
sudo pkill -HUP nginx
```

Dificilmente é preciso reiniciar o serviço: ao fazer qualquer alteração, basta enviar o sinal `HUP`, como acima. As
conexões correntes continuarão sendo respondidas e as novas conexões serão atendidas com base na nova configuração.

### 3. Gerencie o serviço

Para parar, reiniciar e iniciar o serviço:

```bash
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl start nginx
```

Para habilitar ou desabilitar o início automático junto com o sistema:

```bash
sudo systemctl enable nginx
sudo systemctl disable nginx
```

> **Atenção:** esta instalação serve para estudos. Nunca faça isso em produção, pois são necessários muitos outros
> cuidados, especialmente ao configurar o serviço _HTTPS_: para estar na Internet, não basta colocar um certificado e
> ativar, é preciso realizar muitos passos para ter um mínimo de segurança.

## Verificação

Confira se os processos do Nginx estão em execução:

```bash
pgrep -a nginx
```

```text
6508 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
6509 nginx: worker process
6510 nginx: worker process
6511 nginx: worker process
6512 nginx: worker process
```

Ou confira o estado do serviço no systemd:

```bash
systemctl status nginx
```

```text
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2019-01-31 19:34:44 -02; 6min ago
     Docs: man:nginx(8)
  Process: 6497 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
  Process: 6496 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
 Main PID: 6508 (nginx)
    Tasks: 5 (limit: 4542)
   CGroup: /system.slice/nginx.service
           ├─6508 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           ├─6509 nginx: worker process
           ├─6510 nginx: worker process
           ├─6511 nginx: worker process
           └─6512 nginx: worker process

jan 31 19:34:44 usertest systemd[1]: Starting A high performance web server and a reverse proxy server...
jan 31 19:34:44 usertest systemd[1]: Started A high performance web server and a reverse proxy server.
```

Por fim, acesse pelo navegador o endereço [http://localhost](http://localhost) ou, pela linha de comando:

```bash
curl http://localhost
```

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

## Referências

- [Um gerador de configuração para diversos usos particulares](https://www.digitalocean.com/community/tools/nginx)
- [Documentação oficial do Nginx](https://docs.nginx.com/)
