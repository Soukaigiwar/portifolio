import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"

export function Back() {
    return (
        <Container>
            <a href="#"><FiArrowLeft />Voltar</a>
        </Container>
    )
}