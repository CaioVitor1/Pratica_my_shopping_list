// Client do Prisma
import pkg from '@prisma/client';

const { PrismaClient } : any = pkg;

export const prisma = new PrismaClient();

