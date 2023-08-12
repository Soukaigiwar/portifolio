import { FiClock, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"
import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"
import { Container } from './styles'
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function MovieDetails() {
    const { user } = useAuth();
    const params = useParams();

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const [data, setData] = useState(null);
    const [tags, setTags] = useState(null);
    const [dateTime, setDateTime] = useState("");

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder;
    
    function formatDateTime(dateToBeFormated) {
        if(dateToBeFormated) {
            const dateTime = new Date(dateToBeFormated.replace(/-/g, '/'));
            const day = dateTime.getDate().toString().padStart(2, '0');
            const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours().toString().padStart(2, '0');
            const minutes = dateTime.getMinutes().toString().padStart(2, '0');
            const formatedDateTime = `${day}/${month}/${year} às ${hours}:${minutes}`;

            return formatedDateTime;
        };
    };

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movienotes/${params.id}`);
            const tags = response.data.movieTags.map(tag => {
                return {
                    ...tag,
                    tag
                };
            });

            setDateTime(formatDateTime(response.data.created_at));
            setTags(tags);
            setData(response.data);
        };

        fetchMovie();
    }, []);

    return (
        <Container>
            <Header>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Header>
            {
                data &&
                <main>
                    <TextButton onClick={handleBack} />

                    <div className="title">
                        <h2>{data.title}</h2>
                        <Stars rating={data.rating} />
                    </div>
                    <div className="author_and_date">
                        <span>
                            <img src={avatarUrl} alt="Imagem do perfil" />
                                <h3>Por {user.name}</h3>
                        </span>
                        <span>
                            <FiClock />
                            <h3>{dateTime}</h3>
                        </span>
                        </div>
                            <div className="tag_area">
                        {
                            tags &&
                                
                                    tags.map(tag => (
                                        <Tag key={String(tag.id)} title={tag.name} />
                                    ))
                                
                            }
                            </div>
                        <p>{data.description}</p>
                </main>
            }
        </Container>
    )
}