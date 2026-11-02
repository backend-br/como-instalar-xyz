<!--
Modelo de tutorial. Copie este arquivo para tutoriais/<ferramenta>/<sistema>/<distribuição>.md,
troque os textos de exemplo e apague este comentário. As regras estão no CONTRIBUTING.md.
A descrição da ferramenta fica em tutoriais/<ferramenta>/README.md, não aqui.
-->

# Ferramenta no Sistema

## Requisitos

- Um usuário com permissão para usar `sudo`.
- Outra ferramenta que precise estar instalada antes, com link para o tutorial dela.

Quando não houver requisitos, escreva apenas "Nenhum.".

## Instalação

Uma frase sobre o que é específico deste sistema, como o gerenciador de pacotes usado.

### 1. Primeiro passo

Explique em uma frase o que o passo faz.

```bash
sudo apt-get update
```

### 2. Segundo passo

```bash
sudo apt-get install -y ferramenta
```

## Verificação

```bash
ferramenta --version
```

Diga o que a saída deve mostrar.

## Desinstalação

Seção opcional. Mostre como remover a ferramenta.

```bash
sudo apt-get remove -y ferramenta
```

## Referências

- [Documentação oficial do Docker](https://docs.docker.com/)
