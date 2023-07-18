'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';



interface FormData {
    name: string
    weapon: string
    attribute: string
}

export default function Form() {
    const [form, setForm] = useState<FormData>({name: '', weapon: '', attribute: ''})

    // const router = useRouter()
    const router = useRouter()
    const refreshData = () => {
        router.refresh()
    }

    async function handleSubmit(event: any) {
        event.preventDefault()
        const hero = {
            name: String(event.target.name.value),
            weapon: String(event.target.weapon.value),
            attribute: String(event.target.attribute.value),
        }

        const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hero),
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            refreshData()
            setForm({name: '', weapon: '', attribute: ''})
            alert("Hero added successfully!")
        }
    }

    return (
        <div className="flex my-4 justify-center">
            <div className="rounded-lg bg-white py-8 px-6 ">
                <form onSubmit={handleSubmit} className="mb-0 space-y-6" action="#" method="POST">
                    <div>

                        <label htmlFor="hero" className="block text-sm font-medium text-gray-700">

                        </label>

                        <div className="mt-1">
                            <input id="name" name="hero" type="name" placeholder="Name" required={true} value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"/>
                        </div>

                        <div className="mt-1">
                            <input id="weapon" name="weapon" type="weapon" placeholder="Weapon" required={true} value={form.weapon} onChange={e => setForm({...form, weapon: e.target.value})} className="text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"/>
                        </div>

                        <div className="mt-1">
                            <input id="attribute" name="attribute" type="attribute" placeholder="Attribute" required={true} value={form.attribute} onChange={e => setForm({...form, attribute: e.target.value})} className="text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"/>
                        </div>

                        <div className="mt-5">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
