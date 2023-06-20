import { prisma } from './../../db'

export async function getData() {
    const heroes = await prisma.heroes.findMany()
    console.log(heroes)
    return {
        props : { heroes },
    };
}

export default async function Page() {
    const data = await getData()
    const heroes = data.props.heroes
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>The Dota app</h1>

            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>{hero.name}</li>
                ))}
            </ul>
        </main>
    );
}