import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Back } from "../../components/Back"
import { Container, Form, Avatar } from "./styles"

export function Profile() {
    return (
        <Container>
            <header>
                <Back />
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/soukaigiwar.png"
                        alt="Foto do Usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <Input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
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
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}