import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/health", async (_request, _reply) => {
  return { status: "ok", message: "Fin API is running!" };
});

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3333;
    const host = process.env.HOST || "0.0.0.0";

    await fastify.listen({ port, host });
    console.log(`🚀 Server running on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
