import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Form, Background } from './styles'

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <div>
                    <h2>Crie sua conta</h2>

                    <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                    />
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                    />
                    <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                    />
                    <Button title="Cadastrar" style={{
                        heigh: "5.6rem",
                        width: "34rem",
                    }} />
                </div>
                <Link to="/"><FiArrowLeft />Voltar para o Login</Link>
            </Form>
            <Background />
        </Container>
    )
}