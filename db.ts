// Use prisma client to connect to the database and export it to be used in other files

import { PrismaClient } from '@prisma/client';

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Create a new Prisma Client instance if none exists
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  })

// Assign the prisma client instance to the `global` object if not already present
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma