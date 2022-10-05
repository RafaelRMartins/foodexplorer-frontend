import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function IngredientCard({image, name, id}){
  const navigate = useNavigate();

  function handleIngredients(id){
    navigate(`/admin/editingredient/${id}`);
  }
  
  return(
    <Container onClick={() => handleIngredients(id)}>

      {image && <img src={`${api.defaults.baseURL}/files/${image}`} alt=""/>}
      <p>{id}</p>
      <p>{name}</p>
      
    </Container>
  )
}