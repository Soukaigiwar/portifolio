import { MovieItem } from "../MovieItem"
import { Container } from "./styles"

export function MovieList() {
    return (
        <Container>
            <MovieItem key="1" title="Interstellar" rating={4} />
            <MovieItem key="2" title="Dragon Ball Movie" rating={1} />
            <MovieItem key="3" title="Topgun" rating={5} />
            <MovieItem key="4" title="Independence Day" rating={2} />
            <MovieItem key="5" title="Man in Black" rating={3} />
        </Container>
    )
}