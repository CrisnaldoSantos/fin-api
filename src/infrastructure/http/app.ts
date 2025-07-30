import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { transactionRoutes } from './routes/transactionRoutes';

export function build(opts: FastifyServerOptions = {}): FastifyInstance {
  const app = Fastify(opts);

  // Register CORS if needed
  // app.register(import('@fastify/cors'), { origin: true });

  // Health check
  app.get('/health', async () => {
    return { 
      status: 'ok', 
      message: 'Fin API is running!',
      timestamp: new Date().toISOString()
    };
  });

  // Register routes
  app.register(transactionRoutes, { prefix: '/api/transactions' });

  // Global error handler
  app.setErrorHandler(async (error, request, reply) => {
    app.log.error(error);

    // Validation errors
    if (error.validation) {
      return reply.status(400).send({
        status: 'error',
        message: 'Validation error',
        errors: error.validation,
      });
    }

    // Business logic errors
    if (error.message.includes('required') || 
        error.message.includes('cannot be') || 
        error.message.includes('zero')) {
      return reply.status(400).send({
        status: 'error',
        message: error.message,
      });
    }

    // Internal server errors
    return reply.status(500).send({
      status: 'error',
      message: 'Internal server error',
    });
  });

  return app;
}
