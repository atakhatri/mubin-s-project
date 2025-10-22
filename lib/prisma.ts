import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the Prisma Client instance
declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
// Use the global instance if it exists (in development with hot-reloading),
// otherwise create a new instance.
const prisma = global.prisma || new PrismaClient({
    // Optional: Add logging configuration if needed during debugging
    // log: ['query', 'info', 'warn', 'error'],
});

// Attach the instance to the global object in development
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;
