import { Container, Profile } from "./styles"
import { Input } from "../Input"

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input
                type="text"
                placeholder="Pesquisar pelo título"
            />
            <Profile>
                <div>
                    <strong>Sergio Mello</strong>
                    <span>
                        sair
                    </span>
                </div>
                <img src="https://github.com/soukaigiwar.png" alt="Imagem de perfil" />
            </Profile>
        </Container>
    )
}