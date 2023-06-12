import { PrismaClient } from '@prisma/client';

// #########################################################
// I want to paste DB content to this page.tsx
// #########################################################

const prisma = new PrismaClient();

// WIP - I dont know what im doing
export async function getDatabaseData() {
    const names = await prisma.name.findMany();
    console.log(names);
    return {
        props: names,
    };
}

// This works but in console..
export default async function Page() {
    const names = await prisma.name.findMany();
    console.log(names);
    return <main></main>
}
