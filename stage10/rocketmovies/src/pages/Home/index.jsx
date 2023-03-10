import { FiPlus, FiSearch } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from '../../components/Input'
import { MovieList } from "../../components/MovieList"
import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <Header>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
            </Header>
            <div>
                <h2>Meus Filmes</h2>
                <Button
                    title="Adicionar filme"
                    icon={FiPlus}
                    style={{ width: "207px", }}
                    to="/createmovie"
                />
            </div>
            <MovieList />
        </Container>
    )
}
