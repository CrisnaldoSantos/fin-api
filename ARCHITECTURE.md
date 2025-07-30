# Arquitetura Clean Code - Fin API

## Estrutura de Pastas

```
src/
├── domain/                          # Camada de Domínio
│   ├── entities/                    # Entidades de negócio
│   │   └── Transaction.ts
│   ├── repositories/                # Interfaces dos repositórios
│   │   └── ITransactionRepository.ts
│   └── usecases/                   # Casos de uso/regras de negócio
│       ├── CreateTransaction/
│       │   └── CreateTransactionUseCase.ts
│       ├── GetTransactions/
│       │   └── GetTransactionsUseCase.ts
│       └── GetBalance/
│           └── GetBalanceUseCase.ts
├── infrastructure/                  # Camada de Infraestrutura
│   ├── database/                   # Implementações de banco
│   │   ├── knex.ts
│   │   └── repositories/
│   │       └── KnexTransactionRepository.ts
│   └── http/                       # Configurações HTTP
│       ├── app.ts                  # Configuração do Fastify
│       ├── controllers/
│       │   └── TransactionController.ts
│       ├── routes/
│       │   └── transactionRoutes.ts
│       └── schemas/
│           └── transactionSchemas.ts
├── application/                     # Camada de Aplicação
│   └── dtos/                       # Data Transfer Objects
│       └── CreateTransactionDTO.ts
├── shared/                         # Camada Compartilhada
│   ├── container/                  # Injeção de dependência
│   │   └── index.ts
│   ├── env/                        # Variáveis de ambiente
│   │   └── index.ts
│   └── errors/                     # Tratamento de erros
└── server.ts                       # Ponto de entrada da aplicação
```

## Fluxo de Dependências

```
Infrastructure → Application → Domain
        ↑              ↑         ↑
    (depende de)  (depende de) (independente)
```

## Endpoints Disponíveis

### Health Check
- `GET /health` - Verifica se a API está funcionando

### Transações
- `POST /api/transactions` - Cria uma nova transação
- `GET /api/transactions` - Lista todas as transações com saldo
- `GET /api/transactions/balance` - Retorna apenas o saldo

## Como Executar

```bash
# Instalar dependências
npm install

# Executar migrations
npm run migrate

# Iniciar em modo desenvolvimento
npm run dev
```

## Benefícios da Arquitetura

1. **Separação de Responsabilidades**: Cada camada tem uma função específica
2. **Testabilidade**: Fácil criar testes unitários para cada camada
3. **Manutenibilidade**: Código organizado e fácil de entender
4. **Flexibilidade**: Fácil trocar implementações (ex: Fastify por Express)
5. **Escalabilidade**: Preparado para crescer de forma organizada
