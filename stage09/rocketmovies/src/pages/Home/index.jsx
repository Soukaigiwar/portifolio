import { FiPlus } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <h2>Meus Filmes</h2>
            <Button
                title="Adicionar filme"
                icon={FiPlus}
                style={{ width: "207px", }}
            />            
            
        </Container>
    )
}