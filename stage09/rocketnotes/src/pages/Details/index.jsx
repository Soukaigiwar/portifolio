import { Container, Links, Content } from "./styles.js"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header/"
import { Section } from "../../components/Section/"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details() {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota" />

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel aut minus ipsa molestiae natus. Veritatis,
                        cupiditate inventore, optio pariatur voluptatibus
                        ratione consequatur magnam enim voluptate recusandae
                        consequuntur, non eum minima.
                        Ab nisi consequatur aliquid inventore, temporibus
                        voluptates veritatis nemo quos explicabo vero corporis
                        nulla a, officiis, repudiandae asperiores ullam. Ducimus
                        aspernatur necessitatibus illum laboriosam dignissimos
                        repellat reprehenderit, at harum cupiditate!
                    </p>
                    <Section title="Links Úteis">
                        <Links>
                            <li><a href="#">www.rocketseat.com.br</a></li>
                            <li><a href="#">www.sergiomello.online</a></li>
                        </Links>
                    </Section>
                    <Section title="Marcadores">
                        <Tag title="Express" />
                        <Tag title="NodeJs" />
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}
