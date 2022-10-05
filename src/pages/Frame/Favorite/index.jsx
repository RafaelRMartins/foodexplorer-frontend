import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function Favorite(){
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/getplates/getfavorite`)
      setPlates(response.data)
    }
    
    fetchPlates();
  },[]);

  return(
    <Container>
      <Main>

        <Section title="Pratos favoritos" />
        <div className="favorites">
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