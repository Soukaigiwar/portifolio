import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Form, Background } from './styles'

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <div>
                    <h2>Faça seu login</h2>

                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                    />
                    <Input
                        placeholder="Senha"
                        type="text"
                        icon={FiLock}
                    />
                    <Button title="Entrar" style={{
                        heigh: "5.6rem",
                        width: "34rem",
                    }} />
                </div>
                <a href="#">Criar Conta</a>
            </Form>
            <Background />
        </Container>
    )
}