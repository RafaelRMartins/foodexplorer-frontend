import { Container, Main, Banner } from "./styles";
import { Footer } from "../../../components/Footer";
import { Carousel } from "../../../components/Carousel";
import Mask from "../../../assets/Mask-group.png";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function Home(){
  const [plates, setPlates] = useState([]);
  const [platesDesserts, setDessertsPlates] = useState([]);
  const [platesDrinks, setDrinksPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/getplates/gethomeplate?type=principais`)
      setPlates(response.data)
    }

    async function fetchDessertsPlates() {
      const response = await api.get(`/getplates/gethomeplate?type=sobremesas`)
      setDessertsPlates(response.data)
    }

    async function fetchDrinksPlates() {
      const response = await api.get(`/getplates/gethomeplate?type=bebidas`)
      setDrinksPlates(response.data)
    }

    fetchPlates();
    fetchDessertsPlates();
    fetchDrinksPlates();
  },[]);

  return(
    <Container>
      <Main>
        <Banner>
          <div>
            <img src={Mask} alt="" />
            <span>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </span>
          </div>
        </Banner>

        {plates.length != 0 && <Carousel title="Pratos principais" plates={plates}/>}

        {platesDesserts.length != 0 && <Carousel title="Sobremesas" plates={platesDesserts}/>}

        {platesDrinks.length != 0 && <Carousel title="Bebidas" plates={platesDrinks}/>}

      </Main>

      <Footer/>
    </Container>
  )
}