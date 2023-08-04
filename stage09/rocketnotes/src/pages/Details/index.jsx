import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" isActive={true} />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, alias? Amet, obcaecati delectus assumenda error odio perspiciatis repellendus corrupti et consequuntur fuga, ab eius aliquid inventore odit sed quia temporibus.
          Impedit odio distinctio atque adipisci officia doloribus magnam obcaecati, velit illo numquam nihil mollitia labore accusamus aperiam dolore. Quidem debitis iusto quos consectetur minus iste officiis alias perspiciatis, nobis expedita.
          Quae, tempora ipsam recusandae tenetur dolorum, amet voluptatibus autem earum ex minima assumenda natus nam aliquid quia laboriosam harum ipsum molestiae sed odio voluptatem ipsa animi. Error asperiores officiis ex?</p>
          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://github.com/Soukaigiwar</a></li>
              <li><a href="#">https://portifolio.sergiomello.online</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Botão 1" loading={true}/>
          <Button title="Botão 2" loading={false} />
          <Button />
        </Content>
      </main>
    </Container>
  )
}
