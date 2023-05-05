import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>Parceiro de Treino</h1>
                </Link>
            </div>
        </header>
    )
}
