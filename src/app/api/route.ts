import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '@/db'
import Form from "@/app/components/Form";
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;

export async function GET() {
    const heroes = await prisma.heroes.findMany()

    return NextResponse.json({heroes})
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const hero = {
        name: data.name,
        weapon: data.weapon,
        attribute: data.attribute
    }

    const result = await prisma.heroes.create({
        data: {
            name: hero.name,
            weapon: hero.weapon,
            attribute: hero.attribute,
        }
    })
    return NextResponse.json({result})
}
