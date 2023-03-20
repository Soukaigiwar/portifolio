import { useState } from "react"
import { Container, Form } from "./styles"
import { FiSearch } from "react-icons/fi"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagItem } from "../../components/TagItem"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"


export function CreateMovie() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
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
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <Textarea placeholder="Observações" />
                    <h3>Marcadores</h3>
                    <div className="tag_item">
                        {
                            tags.map((tag, index) => (
                                <TagItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => { }}
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
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}