'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addUser(name: string, email: string) {
  await prisma.user.create({
    data: { name, email },
  });
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id },
  });
}
