import { PrismaClient } from '@prisma/client';

// #########################################################
// I want to paste DB content to this page.tsx
// #########################################################

// WIP - I dont know what im doing
export async function getData() {
    const prisma = new PrismaClient();
    const heroes = await prisma.heroes.findMany()
    console.log(heroes)
    return {
        props : { heroes },
    };
}

export async function saveData({hero}) {
    const prisma = new PrismaClient();
    const result = await prisma.heroes.create({
        data: {
            name: {hero}
        }
    })

}

export default async function Page() {
    saveData("test")
    const data = await getData()
    const heroes = data.props.heroes
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        And we are in

        <Form/>

        <ul>
            {heroes.map(hero => (
                <li key={hero.id}>{hero.name}</li>
            ))}
        </ul>



    </main>
    );
}


function Form() {
    return (
        <form action="/api/form" method="post">
            <label htmlFor="hero">Hero Name</label>
            <input type="text" id="hero" name="hero" required />

            <button type="submit">Save</button>
        </form>
    )
}