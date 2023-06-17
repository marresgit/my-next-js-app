import { PrismaClient } from '@prisma/client';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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


// export async function saveData({hero}) {
//     const prisma = new PrismaClient();
//     const result = await prisma.heroes.create({
//         data: {
//             name: {hero}
//         }
//     })
//
// }

export default async function Page() {

    async function create(data: FormData) {
        try {
            fetch('http://localhost:3000/api/create', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => setForm({name: '', id: ''}))
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (data: FormData) => {
        try {
            create(data)
        } catch (error) {
            console.log(error);
        }
    }

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
        <form action="/api/create">
            <label htmlFor="hero">Hero Name</label>
            <input type="text" id="hero" name="hero" required />
            <button type="submit">Save</button>
        </form>
    )
}
