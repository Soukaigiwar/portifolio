import { Container, Form } from "./styles"
import { FiSearch } from "react-icons/fi"
import { Back } from "../../components/Back"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagItem } from "../../components/TagItem"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"


export function CreateMovie() {
    return (
        <Container>
            <Header>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
            </Header>

            <main>
                <Form>
                    <Back />
                    
                    <h2>Novo Filme</h2>
                    <div className="double_input">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações" />
                    <h3>Marcadores</h3>
                    <div className="tag_item">
                        <TagItem
                            value="react"
                        />
                        <TagItem
                            value="JavaScript"
                        />
                        <TagItem
                            value="JavaScript"
                        />
                        <TagItem
                            value="JavaScript"
                        />
                        <TagItem
                            isNew
                            placeholder="Novo marcador"
                        />
                    </div>
                    <div className="button_area">
                        <button>Excluir filme</button>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}