import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/soukaigiwar.png" alt="Imagem de perfil" />
                <div>
                    <span>
                        Bem vindo,
                    </span>
                    <strong>Sergio Mello</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}