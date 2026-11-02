# Contribuindo

* [Overview](#overview)
* [Como posso contribuir?](#contributing)
    - [Relatando bugs](#reporting-bugs)
    - [Sugerindo melhorias](#suggesting-improvements)
    - [Desenvolvendo](#developing)
    - [Adicionando um tutorial](#adding-a-tutorial)

<div id='overview'></div> 

## Overview

Obrigado por investir seu tempo em contribuir para o projeto.

Estas são as principais diretrizes, use seu bom senso e sinta-se à vontade para propor alterações a este documento em
um pull request.

<div id='contributing'></div> 

## Como posso contribuir?

Esta seção orienta você as possíveis maneiras de contribuir.

<div id='reporting-bugs'></div> 

### Relatando bugs

Os bugs são rastreados como [issues](https://github.com/backend-br/como-instalar-xyz/issues) no GitHub, crie um problema
e
forneça as seguintes informações:

- Use um título claro e descritivo para identificar o problema.
- Descreva as etapas exatas que reproduzem o problema com o máximo de detalhes possível.

<div id='suggesting-improvements'></div> 

### Sugerindo melhorias

As sugestões de melhorias são rastreadas como [issues](https://github.com/backend-br/como-instalar-xyz/issues) no
GitHub, crie sua sugestão e forneça a informação a seguir:

- Use um título claro e descritivo para identificar a sugestão.
- Descreva o comportamento atual e explique qual comportamento você esperava ver e por quê.
- Explique porque esse aprimoramento seria útil para a maioria dos usuários.

<div id='developing'></div> 

### Desenvolvendo

Para iniciar o desenvolvimento, você precisará seguir alguns passos:

- Fork este repositório.
- Faça um clone do repositório que você fez seu fork.
- Crie uma branch a partir da branch `main`.
- Adicione sua contribuição, faça o commit e push.
- Abra um [pull request](https://github.com/backend-br/como-instalar-xyz/pulls).

<div id='adding-a-tutorial'></div> 

### Adicionando um tutorial

Todo tutorial segue o [modelo](tutoriais/TEMPLATE.md). Copie o modelo para `tutoriais/<ferramenta>/<sistema>/` e siga
estas regras:

- O título é `# <Ferramenta> no <Sistema>`, seguido de uma ou duas frases dizendo o que é a ferramenta e o que o
  tutorial instala.
- As seções `##` são exatamente estas, nesta ordem: `Requisitos`, `Instalação`, `Verificação`, `Desinstalação` e
  `Referências`. Apenas `Desinstalação` é opcional.
- Os passos dentro de `Instalação` podem usar subtítulos `###`. Não use outros títulos `#` além do título, nem `####`.
- Todo comando fica em um bloco de código cercado (` ``` `) com a linguagem indicada, como `bash` ou `powershell`.
- Em `Requisitos`, escreva "Nenhum." quando não houver requisitos.
- `Referências` é uma lista de links com nome, como `[Documentação oficial do Docker](https://docs.docker.com/)`, nunca
  URLs soltas.
- Toda ferramenta com mais de um tutorial tem um `tutoriais/<ferramenta>/README.md` com `# <Ferramenta>`, uma descrição
  curta e uma seção `## Tutoriais` com a lista de links para cada sistema.
- O tutorial precisa estar linkado no [README](README.md) ou no `README.md` da ferramenta, com o nome do sistema como
  texto do link (`[Ubuntu](...)`, `[Arch Linux](...)`, `[Windows](...)`, `[macOS](...)`).

Um check de CI verifica essas regras em todo pull request: os títulos do tutorial, a linguagem dos blocos de código, as
URLs soltas em `Referências`, os links para arquivos que não existem e os tutoriais sem link. Para rodar o check
localmente:

```bash
node .github/scripts/tutorial-check/index.mjs
```

Além do check, um code owner revisa todo pull request antes do merge.
