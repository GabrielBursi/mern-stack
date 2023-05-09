import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { UserContext } from '@/context';

export default function NavBar() {

    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter()
    const isSignUpRoute = router.query.isSignUp === 'true'

    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        const expireDate = new Date();
        expireDate.setTime(expireDate.getTime() - 1);
        document.cookie = `accessToken=; expires=${expireDate.toUTCString()}; path=/;`;
        localStorage.removeItem('user')
        setIsSignUp(false)
        setUser(null)
        router.push(`/login?isSignUp=${isSignUp}`)
    }

    return (
        <header>
            <div className="container">
                <Link href={user ? '/' : ''}>
                    <h1>Parceiro de Treino</h1>
                </Link>
                <nav>
                    {!user &&
                        <div>
                            <Link onClick={() => setIsSignUp(false)} href={{ pathname: '/login', query: { isSignUp } }} className={!isSignUpRoute && router.query.isSignUp ? 'active-page': ''}>
                                Login
                            </Link>
                            <Link onClick={() => setIsSignUp(true)} href={{ pathname: '/login', query: { isSignUp } }} className={isSignUpRoute ? 'active-page': ''}>
                                Cadastrar
                            </Link>
                        </div>
                    }
                    {user && 
                        <div>
                            <span>{user.user.email}</span>
                            <button type='submit' onClick={handleLogout}>Sair</button>
                        </div>
                    }
                </nav>
            </div>
        </header>
    )
}
