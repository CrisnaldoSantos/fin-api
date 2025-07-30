export const createTransactionSchema = {
  body: {
    type: 'object',
    required: ['title', 'amount'],
    properties: {
      title: { 
        type: 'string',
        minLength: 1,
        maxLength: 255
      },
      amount: { 
        type: 'number',
        not: { const: 0 }
      }
    },
    additionalProperties: false
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        amount: { type: 'number' },
        createdAt: { type: 'string', format: 'date-time' }
      }
    },
    400: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        message: { type: 'string' }
      }
    }
  }
};

export const getTransactionsSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        transactions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              amount: { type: 'number' },
              createdAt: { type: 'string', format: 'date-time' }
            }
          }
        },
        balance: {
          type: 'object',
          properties: {
            income: { type: 'number' },
            outcome: { type: 'number' },
            total: { type: 'number' }
          }
        }
      }
    }
  }
};

export const getBalanceSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        income: { type: 'number' },
        outcome: { type: 'number' },
        total: { type: 'number' }
      }
    }
  }
};
