import { useRouter } from "next/router"
import { FormEvent, useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const isSignUp = router.query.isSignUp === 'true'

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        console.log(email, password)
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

            <button type="submit">{isSignUp ? "Criar minha conta" : "Entrar"}</button>
        </form>
    )
}

export default Login