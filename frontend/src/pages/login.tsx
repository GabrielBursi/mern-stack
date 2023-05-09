import { useRouter } from "next/router"
import { FormEvent, useContext, useEffect, useState } from "react"
import { UsersServices } from "@/services/api"
import { UserContext } from "@/context"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const isSignUp = router.query.isSignUp === 'true'

    const { setUser } = useContext(UserContext)

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [isSignUp]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()


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

        if(user){
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setIsLoading(false)
            router.push('/')
        }
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