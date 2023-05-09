import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function NavBar() {

    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter()
    const isSignUpRoute = router.query.isSignUp === 'true'

    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>Parceiro de Treino</h1>
                </Link>
                <nav>
                    <div>
                        <Link onClick={() => setIsSignUp(false)} href={{ pathname: '/login', query: { isSignUp } }} className={!isSignUpRoute ? 'active-page': ''}>
                            Login
                        </Link>
                        <Link onClick={() => setIsSignUp(true)} href={{ pathname: '/login', query: { isSignUp } }} className={isSignUpRoute ? 'active-page': ''}>
                            Cadastrar
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
