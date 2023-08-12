import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Container, Form } from "./styles"
import { FiSearch } from "react-icons/fi"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagInput } from "../../components/TagInput"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"


export function NewMovie() {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    const handleBack = () => navigate(-1);

    async function handleNewMovie() {
        if (!title) return alert("Preencha o Título.")
        if (!rating) return alert("Dê uma nota de 1 a 5")
        if (newTag) return alert("Você precisa confirmar o campo da tag ou deixar em branco.")

        await api.post("/movieNotes", {
            title,
            description,
            rating,
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
                <TextButton onClick={handleBack} />
                <Form>
                    <h2>Novo Filme</h2>
                    <div className="input_area">
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 1 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h3>Marcadores</h3>
                    <div className="tags_area">
                        {
                            tags.map((tag, index) => (
                                <TagInput
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <TagInput
                            isNew
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                    <Button
                        title="Salvar alterações"
                        onClick={handleNewMovie}
                    />
                </Form>
            </main>
        </Container>
    )
}