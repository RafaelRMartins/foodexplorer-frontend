import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function Status(){
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get("/carts");
      setData(response.data)
    }      

    fetchPlate();
  },[])

  function formatData(data){
    const formatted = String(data).replace(/-/g,"/").replace(/ /g," às ").replace(/:/g,"h");
    const stringFormatted = formatted.slice(0, -3).substring(5);
    
    return stringFormatted;
  }

  function formatStatus(data){
    switch (data) {
      case 'Pendente':
        return "🔴 Pendente";
      case 'Preparando':
        return "🟡 Preparando";
      case 'Entregue':
        return "🟢 Entregue";
      default:
        console.log(`Não encontrado!`);
    }
  }

  return(
    <Container>
      <Main>
        <h1>Pedidos</h1>
        
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            
          { data && data.carts.map(cart => (
              <tr key={cart.id}>
                <td>{formatStatus(cart.status)}</td>
                <td>{cart.id}</td>
                <td>{cart.details}</td>
                <td>{formatData(cart.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </Main>

      <Footer />
    </Container>
  )
}