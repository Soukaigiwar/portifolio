import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Back } from "../../components/Back"
import { Container, Form, Avatar } from "./styles"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    async function handleUpdate() {
        const user = {
            name,
            email,
            new_password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({ user })
    }

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={ handleUpdate } />
            </Form>
        </Container>
    )
}