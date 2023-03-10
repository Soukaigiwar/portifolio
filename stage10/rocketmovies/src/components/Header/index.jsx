import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"

export function Header({ children }) {
    return (
        <Container>
            <h1><Link to="/">RocketMovies</Link></h1>
            {children}
            <Profile>
                <div>
                    <strong><Link to="/profile">Sergio Mello</Link></strong>
                    <span>
                        <Link to="/">
                            sair
                        </Link>
                    </span>
                </div>
                <Link to="profile">
                    <img src="https://github.com/soukaigiwar.png" alt="Imagem de perfil" />
                </Link>
            </Profile>
        </Container>
    )
}