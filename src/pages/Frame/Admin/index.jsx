import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { Link } from 'react-router-dom';

export function Admin(){
  return(
    <Container>
      <Main>
        <h1>Admin</h1>

        <Link className="AdminLink" to="/admin/createplate">Criar Prato</Link>
        <Link className="AdminLink" to="/admin/createingredient">Criar Ingrediente</Link>
        <Link className="AdminLink" to="/admin/ingredientlist">Editar ou Excluir Ingrediente</Link>
        <Link className="AdminLink" to="/admin/adminStatus">Lista de Pedidos</Link>
        
      </Main>

      <Footer />
    </Container>
  )
}