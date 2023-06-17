import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  const {name} = req.body

  try {
    await prisma.heroes.create({
      data: {
        name,
      }
    })
    res.status(200).json({message: 'Hero Created'})
  } catch (error) {
    console.log("Faliure");
  }
}