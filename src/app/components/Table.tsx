'use client'

import {GET} from "@/app/api/route";

export default async function Table() {
    const res = await fetch('http://localhost:3000/api', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    const heroes = data.heroes;

    return (
        <div className="bg-white pt-8 pb-6 shadow rounded-lg sm-px-10 pl-4 pr-4">
            <table className="table-auto text-black">
                <thead>
                <tr>
                    <th className={`p-4 m-4 text-left`}>Name</th>
                    <th className={`p-4 m-4 text-left`}>Weapon</th>
                    <th className={`p-4 m-4 text-left`}>Attribute</th>
                </tr>
                </thead>
                {heroes.map(hero => (
                    <tbody key={hero.id}>
                    <tr>
                        <td className={`p-4 m-4`}>{hero.name}</td>
                        <td className={`p-4 m-4`}>{hero.weapon}</td>
                        <td className={`p-4 m-4`}>{hero.attribute}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}