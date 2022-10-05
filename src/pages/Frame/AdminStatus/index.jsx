import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function AdminStatus(){
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get("/carts/admin");
      setData(response.data)
    }      

    fetchPlate();
  },[])

  function formatData(data){
    const formatted = String(data).replace(/-/g,"/").replace(/ /g," às ").replace(/:/g,"h");
    const stringFormatted = formatted.slice(0, -3).substring(5);
    
    return stringFormatted;
  }

  async function editStatus(status, id){
    api.put(`/carts`, { status, id})
    .then(() => {
      alert("Status atualizado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi atualizar o status!")
      }
    })
  }

  return(
    <Container>
      <Main>
        <Link className="Back" to="/admin"><MdArrowBackIos size={28} /> voltar</Link>
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
                <td>
                  <select defaultValue={cart.status} onChange={e => editStatus(e.target.value, cart.id)} >
                    <option value="Pendente">🔴 Pendente</option>
                    <option value="Preparando">🟡 Preparando</option>
                    <option value="Entregue">🟢 Entregue</option>
                  </select>
                </td>
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