import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Header({ children }) {
    const { signOut } = useAuth()
    return (
        <Container>
            <h1><Link to="/">RocketMovies</Link></h1>
            {children}
            <Profile>
                <div>
                    <strong><Link to="/profile">Sergio Mello</Link></strong>
                    <span>
                        <Link onClick={signOut}>
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