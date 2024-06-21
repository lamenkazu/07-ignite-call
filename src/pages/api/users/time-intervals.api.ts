import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

// import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return res.status(201).json(session)
}
