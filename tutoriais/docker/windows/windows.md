# Docker Windows 10

### Requisitos do Sistema:

- Windows 10 64bit: Versões Pro, Enterprise ou Education (1607 Anniversary Update, Build 14393 ou maior).
- Virtualização habilitada no BIOS. Geralmente está ativa por padrão mas verifique está opção. A configuração pode variar de acordo com o fabricante da Placa Mãe portanto consulte no manual como ativar.
- no minímo 4GB of RAM.

Instalar o Docker no Windows 10 é bem simples, primeiro efetue o download do **Docker Installer** através desse link [aqui](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe).

> Obs.: o arquivo é um pouco grande e talvez dependendo da velocidade da sua
> internet pode demorar um pouco.

Após feito download temos o bom e velho next > next > finish
basta clicar no instalador e seguir as instruções.

> Obs.: A instalação pode demorar um pouco e ao final vai reiniciar a máquina,
> portanto é um bom momento para a pausa do café :).

O Docker não inicia automaticamente após a instalação. Para iniciá-lo, procure Docker na barra de busca (ou peça para a [Cortana](https://www.microsoft.com/pt-br/windows/cortana)), selecione Docker Desktop para Windows nos resultados da pesquisa e clique nele (ou pressione Enter).

![Docker na Barra de Busca](https://docs.docker.com/docker-for-windows/images/docker-app-search.png)

Quando a baleia na barra de status permanece estável, o Docker está ativo e acessível a partir de qualquer janela do terminal.

![Docker na Barra de Status](https://docs.docker.com/docker-for-windows/images/whale-icon-systray.png)

> Obs.: Se a baleia estiver oculta na área de Notificações, clique na seta para cima na barra de tarefas para mostrá-la.

Quando a inicialização estiver concluída, selecione Sobre o Docker no ícone da área de Notificações para verificar se você possui a versão mais recente.

![About Docker](https://docs.docker.com/docker-for-windows/images/docker-app-welcome.png)

Parabéns! Você está com o Docker Desktop for Windows instalado.
