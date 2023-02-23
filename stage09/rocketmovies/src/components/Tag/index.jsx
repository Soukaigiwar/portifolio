import { Container } from "./styles"

export function Tag({ icon: Icon, title, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                {title}
                {Icon && <Icon size={20} />}
            </div>
        </Container>
    )
}