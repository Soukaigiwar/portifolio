import { FiPlus, FiSearch } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from '../../components/Input'
import { Movie } from "../../components/Movie"
import { Container } from './styles'
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get("/movieNotes")
            setMovies(response.data)
        }

        fetchMovies()
    }, [])

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
            {
                movies.map(movie => {
                    <Movie
                        key={String(movie.id)}
                        data={movie}
                        onclick={() => {}}
                    />
                })
            }
        </Container>
    )
}
