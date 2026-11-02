# Chocolatey no Windows

## Requisitos

- Windows 7+ ou Windows Server 2003+.
- PowerShell v2+.
- .NET Framework 4+ (o instalador tenta instalar o .NET 4.0 se ele não estiver instalado).
- Permissão para abrir o PowerShell em modo administrador.

## Instalação

Este tutorial instala o Chocolatey em modo administrador.

### 1. Abra o PowerShell como administrador

Pressione `Windows + X` e depois `A`, ou pesquise por PowerShell na barra do menu iniciar.

### 2. Libere a política de execução

O PowerShell vai baixar o script [install.ps1](https://community.chocolatey.org/install.ps1) e executá-lo na sua
máquina. O script é *seguro*, mas vale a pena lê-lo antes para não ter dúvidas: é recomendado ter certeza de que
qualquer script da internet que você não conheça é seguro. A equipe do Chocolatey leva a segurança muito a sério,
[leia mais sobre os protocolos de segurança deles](https://chocolatey.org/security).

No PowerShell, tenha certeza de que a
[política de execução](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies)
não está restrita. A sugestão é usar `Bypass` para desviar das políticas de segurança ou `AllSigned` para mais
segurança.

```powershell
Get-ExecutionPolicy
```

Se o comando retornar `Restricted`, execute um dos comandos abaixo. Senão, apenas prossiga para o próximo passo.

```powershell
Set-ExecutionPolicy AllSigned
```

```powershell
Set-ExecutionPolicy Bypass -Scope Process
```

### 3. Instale o Chocolatey

Execute os comandos abaixo no terminal, um de cada vez:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Verificação

Se não houver nenhum erro, você já pode utilizar o Chocolatey. Escreva `choco` ou `choco -?` para utilizá-lo:

```powershell
choco -?
```

Para instalar algum pacote, pesquise no [catálogo de pacotes do Chocolatey](https://community.chocolatey.org/packages).

## Referências

- [Instalação do Chocolatey (site oficial, em inglês)](https://chocolatey.org/docs/installation)
- [Instalação em modo não administrador (site oficial, em inglês)](https://chocolatey.org/docs/installation#non-administrative-install)
- [Pacotes do Chocolatey](https://community.chocolatey.org/packages)
