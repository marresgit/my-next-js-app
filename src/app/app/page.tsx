'use client';

export default async function Page() {
    const res = await fetch('http://localhost:3000/api', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    const heroes = data.heroes;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>The Dota app</h1>

            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>{hero.name}</li>
                ))}
            </ul>


        </main>
    )
}
