import { Tag } from "../Tag"
import { Stars } from "../Stars"
import { Container } from "./styles"
import { Link } from "react-router-dom"

export function MovieItem({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h2><Link to="/details/34">{data.title}</Link></h2>
            <span><Stars rating={data.rating} /></span>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => (
                            <Tag key={tag.id} title={tag.name} />
                        ))
                    }
                </footer>
            }
        </Container>
    )
}