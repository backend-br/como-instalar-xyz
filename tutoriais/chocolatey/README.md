## Instalando o Chocolatey no Windows

### Requisitos:

Windows 7+ / Windows Server 2003+

PowerShell v2+

.NET Framework 4+ (a instalador vai tentar instalar o .NET 4.0 se não estiver instalado)

### Instalando o Chocolatey (Modo Administrador)

1. Primeiro tenha certeza que você pode utilizar o shell no modo administrador

2. Abra seu PowerShell pressionando `Windows + X` e depois `A` ou pesquise na barra do menu iniciar

3. Instale com o powershell.exe

> NOTA: Por favor, observe que o https://chocolatey.org/install.ps1 é *seguro*, seria interessante observá-lo para não ter dúvidas. O PowerShell vai baixar esse arquivo remotamente e executar na sua máquina, qualquer Script da internet que você não conheça é recomendado ter certeza que é seguro. Nós levamos muito a sério a segurança. [Leia mais sobre nossos protocolos de segurança](https://chocolatey.org/security).

Com o PowerShell, tenha certeza que o comando [Get-ExecutionPolicy](https://go.microsoft.com/fwlink/?LinkID=135170) não está restrito. A sugestão é usar o `Bypass` para desviar das politicas de segurança ou `AllSigned` para mais segurança.

4. Execute o comando `Get-ExecutionPolicy`. se ele retornar `Restricted`, execute o comando `Set-ExecutionPolicy AllSigned` or `Set-ExecutionPolicy Bypass -Scope Process`. Senao apenas prossiga para o passo `5`

5. Copie e cole o seguinte comando no seu terminal:

       Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

6. Execute o comando apertando `Enter`

7. Senão houver nenhum erro, você já pode utilizar o Chocolatey! escreva `choco` ou `choco -?` para utiliza-lo

8. Se quiser instalar algum pacote pesquise por [aqui](https://chocolatey.org/packages)

## Links de suporte ( + detalhes )

[Instalando Chocolatey (site oficial em inglês)](https://chocolatey.org/docs/installation#non-administrative-install)

[Instalação em modo não-administrador (site oficial em inglês)](https://chocolatey.org/docs/installation#non-administrative-install)