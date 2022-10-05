import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";

export function Search({plates}){
  return(
    <Container>
      <Main>
        <Section title="Pesquisa" />
        <div className="search">
          { 
            plates && plates.map(plate => (
              <Card key={String(plate.id)} image={plate.image} id={plate.id} price={plate.price} name={plate.name} description={plate.description} favorited={plate.favorited} />
            )) 
          }
        </div>

      </Main>
      <Footer/>
    </Container>
  )
}