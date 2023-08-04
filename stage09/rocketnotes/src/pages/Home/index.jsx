import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { FiPlus, FiSearch } from 'react-icons/Fi';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" /></li>
                <li><ButtonText title="React" isActive/></li>
                <li><ButtonText title="NodeJs" /></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>
            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React',
                        tags:[
                            { id: '1', name: 'react'},
                            { id: '2', name: 'native' },
                            { id: '3', name: 'web app' },
                            { id: '4', name: 'mobile app' },
                        ]
                    }} />
                    <Note data={{
                        title: 'Node-JS',
                        tags:[
                            { id: '1', name: 'javascript' },
                            { id: '2', name: 'typescript' },
                        ]
                    }} />
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}