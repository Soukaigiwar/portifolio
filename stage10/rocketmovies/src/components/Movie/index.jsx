import { Container } from "./styles"
// import { useEffect, useState } from "react"
// import { useAuth } from "../../hooks/auth"
// import { api } from "../../services/api"
// import { useParams } from 'react-router-dom';


export function Movie({ data, ...rest }) {
    // const { user } = useAuth()
    // const params = useParams();
    // const [movies, setMovies] = useState([])
    // const [search, setSearch] = useState("")

    // useEffect(() => {
    //     async function fetchMovies() {
    //         const response = await api.get(`${api.defaults.baseURL}/movieNotes/${params.id}`)
    //         setMovies(response.data)
    //     }

    //     fetchMovies()
    // }, [])

    return (
        <Container {...rest}>
            {
                console.log("teste")
                // data.map(movie => {
                //     <MovieItem key={String(movie.id)} title={movie.title} rating={movie.rating} />
                // })
            }
        </Container>
    )
}