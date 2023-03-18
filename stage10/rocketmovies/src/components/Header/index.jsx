import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg"

export function Header({ children }) {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h1><Link to="/">RocketMovies</Link></h1>
            {children}
            <Profile>
                <div>
                    <strong><Link to="/profile">{user.name}</Link></strong>
                    <span>
                        <Link onClick={signOut}>
                            sair
                        </Link>
                    </span>
                </div>
                <Link to="profile">
                    <img src={avatarUrl} />
                </Link>
            </Profile>
        </Container>
    )
}