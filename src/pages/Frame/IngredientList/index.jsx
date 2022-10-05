import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { IngredientCard } from "../../../components/IngredientCard";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function IngredientList(){
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/ingredients`)
      setIngredients(response.data)
    }
    
    fetchIngredients();
  },[]);

  return(
    <Container>
      <Main>

        <Section title="Ingredientes" />
        <div className="favorites">
          { 
            ingredients && ingredients.map(ingredient => (
              <IngredientCard key={String(ingredient.id)} image={ingredient.image} id={ingredient.id} name={ingredient.name}/>
            )) 
          }
        </div>

      </Main>
      <Footer/>
    </Container>
  )
}