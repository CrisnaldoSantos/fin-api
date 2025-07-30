import { FastifyInstance } from 'fastify';
import { transactionController } from '../../../shared/container';
import { 
  createTransactionSchema, 
  getTransactionsSchema, 
  getBalanceSchema 
} from '../schemas/transactionSchemas';

export async function transactionRoutes(fastify: FastifyInstance) {
  // POST /transactions
  fastify.post('/', {
    schema: createTransactionSchema,
    handler: async (request, reply) => {
      return transactionController.create(request, reply);
    }
  });

  // GET /transactions
  fastify.get('/', {
    schema: getTransactionsSchema,
    handler: async (request, reply) => {
      return transactionController.index(request, reply);
    }
  });

  // GET /transactions/balance
  fastify.get('/balance', {
    schema: getBalanceSchema,
    handler: async (request, reply) => {
      return transactionController.getBalance(request, reply);
    }
  });
}
