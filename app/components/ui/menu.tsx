import React from 'react'
import Link from "next/link";

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className="border-2 border-gray-400 rounded-xl m-4 shadow flex p-4">
                <li className="p-4 hover:bg-amber-200">
                    <Link className='hover:bg-amber-200' href="/">Home</Link>
                </li>
                <li className="p-4 hover:bg-amber-200">
                    <Link className='hover:bg-amber-200' href="/cars">Cars</Link>
                </li>
                <li className="p-4 hover:bg-amber-200">             
                    <Link href="/trucks">Trucks</Link>
                </li>
                <li className="p-4 hover:bg-amber-200">             
                    <Link href="/bikes">Bikes</Link>
                </li>
            </ul>
        </div>
    )
}