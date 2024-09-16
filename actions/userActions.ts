import { PrismaClient } from '@prisma/client';
import { authenticateUser } from '../lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function deleteUser(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) {
  // 사용자 인증
  const user = await authenticateUser(req, res);
  if (!user) {
    throw new Error('인증되지 않은 요청입니다.');
  }

  // 요청한 사용자와 삭제 대상 사용자가 동일한지 확인
  if (user.id !== id) {
    throw new Error('자신의 계정만 삭제할 수 있습니다.');
  }

  // 유저 삭제 실행
  await prisma.user.delete({
    where: { id },
  });
}
