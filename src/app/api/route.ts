import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '@/db'
import Form from "@/app/components/Table";
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;

export async function GET() {
    const heroes = await prisma.heroes.findMany()

    return NextResponse.json({heroes})
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const hero = {
        name: data.name
    }

    const result = await prisma.heroes.create({
        data: {
            name: hero.name
        }
    })
    return NextResponse.json({result})
}
