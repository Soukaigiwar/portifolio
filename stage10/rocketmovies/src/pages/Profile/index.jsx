import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Back } from "../../components/Back"
import { Container, Form, Avatar } from "./styles"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg"

export function Profile() {
    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
    
    async function handleUpdate() {
        const user = {
            name,
            email,
            avatar,
            new_password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({ user, avatarFile })
    }
    
    function handleChangeAvatar(event) {
        const file = event.target.files[0]

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Back />
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Foto do Usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <Input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    autocomplete="username"
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    autocomplete="e-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    autocomplete="current-password"
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    autocomplete="new-password"
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