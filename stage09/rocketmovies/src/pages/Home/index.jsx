import { FiPlus } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { MovieList } from "../../components/MovieList"
import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <div>
                <h2>Meus Filmes</h2>
                <Button
                    title="Adicionar filme"
                    icon={FiPlus}
                    style={{ width: "207px", }}
                />
            </div>

            <MovieList />
        </Container>
    )
}