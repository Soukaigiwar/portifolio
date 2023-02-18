import { FiPlus } from "react-icons/fi"
import { Container, NewMovie } from './styles'

export function Home() {
    return (
        <Container>
            <h2>Meus Filmes</h2>
            <NewMovie>
                <span>
                    <FiPlus />
                    Adicionar filmes
                </span>
            </NewMovie>

            
        </Container>
    )
}