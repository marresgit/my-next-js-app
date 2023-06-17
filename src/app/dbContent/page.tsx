import { PrismaClient } from '@prisma/client';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useState} from "react";


export async function getData() {
    const prisma = new PrismaClient();
    const heroes = await prisma.heroes.findMany()
    console.log(heroes)
    return {
        props : { heroes },
    };
}


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

interface FormData {
    name: string
    id: string
}

function Form() {
    const [form, setForm] = useState<FormData>({name: '', id: ''})
    return (
        <div>
            <h1 className="text-center font-bold text-2x1 mt-4">Data</h1>
            <form onSubmit={e => {
                e.preventDefault()
            }} className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'>
                <input type="text"
                       placeholder="Name"
                       value={form.name}
                       onChange={e => setForm({...form, name: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-1">Add</button>

            </form>
        </div>
    )
}
