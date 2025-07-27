# Fin API

Uma API financeira desenvolvida com Node.js, TypeScript e Fastify. Criada para o módulo 2 da formação em NodeJS da ReocketSeat.

## 🚀 Tecnologias

- **Node.js 22.12** - Runtime JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **TSX** - TypeScript execution environment

## 🔧 Instalação

```bash
# Clonar o repositório
git clone <seu-repositorio>

# Entrar no diretório
cd fin-api

# Instalar dependências
npm install
```

## 🎯 Como usar

### Desenvolvimento

```bash
# Executar em modo de desenvolvimento (com watch)
npm run dev
```

### Produção

```bash
# Compilar TypeScript para JavaScript
npm run build

# Executar aplicação compilada
npm start

# Ou executar diretamente
npm run preview
```

## 🌐 Servidor

A aplicação roda por padrão em:

- **URL**: http://localhost:3333
- **Host**: 0.0.0.0 (aceita conexões externas)
- **Porta**: 3333 (configurável via variável de ambiente PORT)

## 📂 Estrutura do projeto

```
fin-api/
├── src/
│   └── index.ts          # Arquivo principal da aplicação
├── dist/                 # Arquivos compilados (gerado automaticamente)
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração do TypeScript
├── .nvmrc               # Versão do Node.js
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Documentação
```
