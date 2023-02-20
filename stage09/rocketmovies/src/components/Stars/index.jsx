import { RxStarFilled, RxStar } from "react-icons/rx"
import { Container } from "./styles"

export function Stars({ rating, title }) {

    const stars = [
        <RxStarFilled />,
        <RxStarFilled />,
        <RxStarFilled />,
        <RxStarFilled />,
        <RxStarFilled />
    ].fill(<RxStar />, rating)

    return (
        <Container key={title}>
            <span>
                {stars}
            </span>
        </Container>
    )
}