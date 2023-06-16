import { PrismaClient } from '@prisma/client';

// #########################################################
// I want to paste DB content to this page.tsx
// #########################################################


// WIP - I dont know what im doing
export async function getStaticProps() {
    const prisma = new PrismaClient();
    const heroes = await prisma.heroes.findMany()
    console.log(heroes)
    return {
        props : { heroes },
    };
}

export default async function Page() {
    const data = await getStaticProps()
    const heroes = data.props.heroes
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        And we are in
        <ul>
            {heroes.map(hero => (
                <li key={hero.id}>{hero.name}</li>
            ))}
        </ul>
    </main>
    );
}
