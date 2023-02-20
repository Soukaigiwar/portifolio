import { MovieItem } from "../MovieItem"
import { Container } from "./styles"

export function MovieList() {
    return (
        <Container>
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </Container>
    )
}