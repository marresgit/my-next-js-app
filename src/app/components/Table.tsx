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
        <div className="flex my-4 justify-center">
            <div className={`rounded-lg bg-white py-8 px-6`}>
                <table className="text-black table-auto">
                    <thead>
                    <tr>
                        <th className={`text-left pr-16 pb-2`}>Name</th>
                        <th className={`text-left pr-16 pb-2`}>Weapon</th>
                        <th className={`text-left pr-16 pb-2`}>Attribute</th>
                    </tr>

                    </thead>
                    {heroes.map(hero => (
                        <tbody key={hero.id}>
                        <tr>
                            <td className={`pr-16`}>{hero.name}</td>
                            <td className={`pr-16`}>{hero.weapon}</td>
                            <td className={`pr-16`}>{hero.attribute}</td>
                            <td>
                                <button
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    edit
                                </button></td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}