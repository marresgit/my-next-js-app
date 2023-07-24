'use client'

import {GET,DELETE} from "@/app/api/route";


async function handleDelete(event: any) {
    event.preventDefault()
    const hero = {
        id: String(event.currentTarget.id)
    }
    console.log("---------------BEGIN------------")
    console.log(JSON.stringify(hero))
    console.log("----------------END-------------")

    const response = await fetch('http://localhost:3000/api', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
    })
    if (!response.ok) {
        throw new Error(response.statusText)
        console.log("ERROR WAS IN CLIENT")

    } else {
        alert("Hero DELETED successfully!")
    }
}

export default async function Table() {


    const res = await fetch('http://localhost:3000/api', {
        cache: "no-store",
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
                            <td className={`pr-2`}>
                                <button
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 pr-4 border border-blue-500 hover:border-transparent rounded">
                                    edit
                                </button>
                            </td>
                            <td typeof="id" className={`pr-2`}>
                                <button id={hero.id} type="button" onClick={handleDelete}
                                    className="bg-transparent bg-red-300 text-red-800 font-semibold py-1 px-4 border border-red-400 hover:bg-red-200 rounded">
                                    delete
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}