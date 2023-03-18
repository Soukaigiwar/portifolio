import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Form, Background } from './styles'

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <div>
                    <h2>Faça seu login</h2>

                    <Input
                        autoComplete="e-mail"
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        autoComplete="password"
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button title="Entrar"
                        onClick={handleSignIn}
                        style={{
                            heigh: "5.6rem",
                            width: "34rem",
                        }} />
                </div>
                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    )
}