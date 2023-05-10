import { FiPlus, FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>
            
            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo Título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={
                        {
                            title: "React",
                            tags: [
                                { id: "1", name: "React" },
                                { id: "2", name: "NodeJs" },
                            ]
                        }
                    } />
                    <Note data={
                        {
                            title: "React",
                            tags: [
                                { id: "1", name: "React" },
                                { id: "2", name: "NodeJs" },
                            ]
                        }
                    } />
                    <Note data={
                        {
                            title: "React",
                            tags: [
                                { id: "1", name: "React" },
                                { id: "2", name: "NodeJs" },
                            ]
                        }
                    } />
                    <Note data={
                        {
                            title: "React",
                            tags: [
                                { id: "1", name: "React" },
                                { id: "2", name: "NodeJs" },
                            ]
                        }
                    } />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container>
    )
}