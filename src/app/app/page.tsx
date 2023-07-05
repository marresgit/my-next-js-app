'use client';

import Form from "@/app/components/Form";
import Table from "@/app/components/Table";
import GoogleMaps from "@/app/components/GoogleMaps";

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
        <main className="">
            <div className={`flex flex-col items-stretch`}>
                <h1 className={`text-center p-2`}>Welcome</h1>
                <h2 className={`text-center p-2`}>Please add your hero to the database</h2>

                <Form/>

                <Table/>


                <GoogleMaps/>


            </div>

        </main>
    )
}
