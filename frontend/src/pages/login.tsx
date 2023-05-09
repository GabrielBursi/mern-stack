import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import { UsersServices } from "@/services/api"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const isSignUp = router.query.isSignUp === 'true'

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [isSignUp]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        console.log('object');

        setIsLoading(true)
        setError(null)

        let user = undefined

        if(isSignUp){
            user = await UsersServices.Create({email, password})
        }

        if(!isSignUp){
            user = await UsersServices.Login({ email, password })
        }

        if(user instanceof Error){
            setIsLoading(false)
            setError(user.message)
            return
        }

        localStorage.setItem('user', JSON.stringify(user?.accessToken))
        setIsLoading(false)
        console.log('acabou');
    }


    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>{isSignUp ? "Criar conta" : "Login"}</h3>

            <label>Email:</label>
            <input
                type="email"
                title="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Senha:</label>
            <input
                title="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading} type="submit">{isSignUp ? "Criar minha conta" : "Entrar"}</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login