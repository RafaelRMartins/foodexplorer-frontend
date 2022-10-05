import { Container, ExcluirButton } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

export function MiniCard({ id, amount }){
  const [data, setData] = useState(null)

  const { remCart } = useCart();

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/getplates/${id}`);
      setData(response.data)
    }      

    fetchPlate();
  },[])

  return(
    <Container>
      { data && <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />}
      { data &&
      <div>
        <p>{amount} x  {data.name} <span>R$ {parseFloat(data.price.replace(',','.')*(amount)).toFixed(2).toString().replace(".", ",")}</span></p>
        <ExcluirButton onClick={() => {remCart({plate_id: id, amount})}}>Excluir</ExcluirButton>
      </div>}
    </Container>
  )
}