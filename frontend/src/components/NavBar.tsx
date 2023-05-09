import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function NavBar() {

    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter()
    const isSignUpRoute = router.query.isSignUp === 'true'

    const handleLogout = () => {
        localStorage.removeItem('user')
    }

    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>Parceiro de Treino</h1>
                </Link>
                <nav>
                    <div>
                        <Link onClick={() => setIsSignUp(false)} href={{ pathname: '/login', query: { isSignUp } }} className={!isSignUpRoute && router.query.isSignUp ? 'active-page': ''}>
                            Login
                        </Link>
                        <Link onClick={() => setIsSignUp(true)} href={{ pathname: '/login', query: { isSignUp } }} className={isSignUpRoute ? 'active-page': ''}>
                            Cadastrar
                        </Link>
                    </div>
                    <div>
                        <button type='button' onClick={handleLogout}>Sair</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
