import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Container } from "./styles"

export function BackButton({ children, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {children}
        </Container>
    )
}