import { PrismaClient } from "@/prisma/app/generated/prisma/client";
import { neon, neonConfig } from "@neondatabase/serverless";

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

// Configure Neon for WebSocket connections
neonConfig.webSocketConstructor = WebSocket;
neonConfig.useSecureWebSocket = true;
neonConfig.fetchConnectionCache = true;

// Create optimized SQL connection
const sql = neon(connectionString);

// Create optimized Prisma client
const prismaClientSingleton = () => {
  const prisma = new PrismaClient({
    log: [
      { emit: "stdout", level: "warn" },
      { emit: "stdout", level: "error" },
    ],
    datasources: {
      db: {
        url: connectionString,
      },
    },
  });

  // Add middleware for connection management
  prisma.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();
    console.log(
      `Query ${params.model}.${params.action} took ${after - before}ms`
    );
    return result;
  });

  return prisma;
};

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export { sql };
export default prisma;
