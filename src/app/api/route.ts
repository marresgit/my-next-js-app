import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '@/db'
import {Prisma} from ".prisma/client";

export async function GET() {
    const heroes = await prisma.heroes.findMany()

    return NextResponse.json({heroes})
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const hero = {
        name: data.name
    }

    console.log(data)
    try {
        const result = await prisma.heroes.create({
            data: {
                name: hero.name
            }
        })
        return NextResponse.json({result})
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                console.log("There is an unique constraint validation!!!")
            }
        }
        throw e
    }
}

