import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "./styles"
import { FiSearch } from "react-icons/fi"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagItem } from "../../components/TagItem"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"


export function CreateMovie() {
    const [title, setTitle] = useState("")
    const [grade, setGrade] = useState("")
    const [comment, setComment] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    async function handleNewMovie() {
        await api.post("/movieNotes", {
                title,
                description: comment,
                rating: grade,
                tags
        })

        alert("Adicionado filme com sucesso.")
        navigate("/")
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    return (
        <Container>
            <Header>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Header>

            <main>
                <Form>
                    <BackButton />

                    <h2>Novo Filme</h2>
                    <div className="double_input">
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setGrade(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                        onChange={e => setComment(e.target.value)}
                    />
                    <h3>Marcadores</h3>
                    <div className="tag_item">
                        {
                            tags.map((tag, index) => (
                                <TagItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <TagItem
                            isNew
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                    <div className="button_area">
                        <button>Excluir filme</button>
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}