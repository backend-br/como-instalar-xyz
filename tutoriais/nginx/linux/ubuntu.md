# Nginx

O *Nginx* ("engine X") é muito mais que um servidor _HTTP_. Ele é um também um
_proxy_ reverso, além de servir como _proxy_ para os serviços _POP_ e _IMAP_.

A instalação é muito simples, se usarmos o pacote oficial da distribuição.

## Pré-requisitos

Assumimos que você tem uma máquina _Ubuntu_ instalada, com acesso à Internet, e 
que você tenha um usuário local que possa tornar-se `root`.

## Instalação

    sudo apt-get -y install nginx

## Verificação raiz

    ➤ pgrep -a nginx
    6508 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
    6509 nginx: worker process
    6510 nginx: worker process
    6511 nginx: worker process
    6512 nginx: worker process

## Verificação nutela

    ➤ systemctl status nginx
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

## Teste

Acesse, pelo seu navegador, o seguinte endereço: [http://localhost](http://localhost)

Ou, via linha de comando:

    ➤ curl http://localhost
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

## Arquivos

A configuração do serviço fica em `/etc/nginx`, com essa estrutura:

    /etc/nginx
    ├── conf.d
    ├── fastcgi.conf
    ├── fastcgi_params
    ├── koi-utf
    ├── koi-win
    ├── mime.types
    ├── modules-available
    ├── modules-enabled
    │   ├── 50-mod-http-geoip.conf -> /usr/share/nginx/modules-available/mod-http-geoip.conf
    │   ├── 50-mod-http-image-filter.conf -> /usr/share/nginx/modules-available/mod-http-image-filter.conf
    │   ├── 50-mod-http-xslt-filter.conf -> /usr/share/nginx/modules-available/mod-http-xslt-filter.conf
    │   ├── 50-mod-mail.conf -> /usr/share/nginx/modules-available/mod-mail.conf
    │   └── 50-mod-stream.conf -> /usr/share/nginx/modules-available/mod-stream.conf
    ├── nginx.conf
    ├── proxy_params
    ├── scgi_params
    ├── sites-available
    │   └── default
    ├── sites-enabled
    │   └── default -> /etc/nginx/sites-available/default
    ├── snippets
    │   ├── fastcgi-php.conf
    │   └── snakeoil.conf
    ├── uwsgi_params
    └── win-utf

O arquivo principal de configuração fica em `/etc/nginx/nginx/conf`.

O arquivo de configuração do virtual host padrão está em `/etc/nginx/sites-enabled/default`, no qual podemos ver que os arquivos servidos ficam em `root /var/www/html;`.

Quando alter algo, pode testar a nova configuração com:

   ➤ sudo nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful


Caso esteja tudo correto (como no caso desse exemplo), basta recarregar, ou mandar um sinal para o nginx:

    sudo pkill -HUP nginx

## Gerenciando o serviço

### Funcionamento

* Parando:
    `sudo systemctl stop nginx`
* Recarregando: 
    `sudo systemctl restart nginx`
* Iniciando: 
    `sudo systemctl start nginx`

### Inicio automático

* Habilita: 
    `sudo systemctl enable nginx`
* Desabilita: 
    `sudo systemctl disable nginx`


## Concluindo

Aqui vimos como ter o *NginX* instalado em sua máquina, para propósitos de estudos. Nunca faça isso em produção, pois são necessários muitos outros cuidados, especialmente ao configurar o serviço *HTTPS*.

Dificilmente precisamos reiniciar o serviço *NginX*, pois ao fazer qualquer alteração, basta enviar o sinal `HUP`, como explicado acima, que as conexões correntes continuarão sendo respondidas, e as novas conexões serão atendidas com base na nova configuração.

Aqui dois links fundamentais para começar a pensar em configura-lo para uso em produção:

* [https://nginxconfig.io/](Um gerador de configuração para diversos usos particulares)
* [https://www.nginx.com/resources/wiki/start/topics/tutorials/install/](Tutorial Oficial do NginX)

Em outros tutoriais abordaremos as configurações de *Virtual Host*, que permitirão que nosso servidor responda por vários domínios, e uma configuração séria de *HTTPS*, pois para estar na Internet, não basta apenas colocar um certificado e ativar, há que realizar muitos passos para ter um mínimo de segurança.