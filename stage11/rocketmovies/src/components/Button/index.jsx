import { Container } from "./styles"

export function Button({ icon: Icon, title, ...rest }) {
    return (
        <Container type="button" {...rest}>
            { Icon && <Icon size={20} /> }
            { title }
        </Container>
    )
}