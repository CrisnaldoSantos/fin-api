import { build } from './infrastructure/http/app';
import { env } from './shared/env';

const start = async () => {
  const app = build({ logger: true });

  try {
    await app.listen({ 
      port: env.PORT, 
      host: env.HOST 
    });
    console.log(`🚀 Server running on http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
