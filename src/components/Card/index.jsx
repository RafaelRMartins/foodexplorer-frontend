import { Container, Price, Include, Favorite, ButtonLink } from "./styles";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button } from "../Button";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useState, useEffect } from "react";
import { useCart } from "../../hooks/cart";

export function Card({price, image, name, description, favorited, id}){
  const [favorite, setFavorite] = useState(favorited);
  const [amount, setAmount] = useState(1);
  const [amountPrice, setAmountPrice] = useState(price);

  const navigate = useNavigate();

  const { addCart } = useCart();

  useEffect(() => {
    const priceValue = price.replace(',','.')
    const multiplier = amount
    const valueMultiplied = parseFloat(priceValue*multiplier).toFixed(2)
    const finalPrice = valueMultiplied.toString().replace(".", ",")
    setAmountPrice(finalPrice)
  },[amount])

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  function addAmount(){
    if(amount >= 99){
      return
    }else{
      setAmount(amount + 1)
    }
  }

  function remAmount(){
    if(amount <= 1){
      return
    }else{
      setAmount(amount - 1)
    }
  }

  async function addFavorite(){
    await api.post(`/favorite/${id}`)
    setFavorite(true)
  }

  async function remFavorite(){
    await api.delete(`/favorite/${id}`)
    setFavorite(false)
  }
  
  return(
    <Container>

      { favorite ?  <Favorite type="button"  onClick={remFavorite}><RiHeartFill size={32} /></Favorite> : <Favorite type="button" onClick={addFavorite}><RiHeartLine size={32}/></Favorite> }

      {image && <img src={`${api.defaults.baseURL}/files/${image}`} alt=""/>}
      <ButtonLink onClick={() => handleDetails(id)}><h3>{name} {'>'}</h3></ButtonLink>
      <p>{description}</p>
      <Price>
      R$ {amountPrice}
      </Price>
      <Include>
        <div>
          <button onClick={remAmount}>
            <AiOutlineMinus size={24} />
          </button>
            <span>{(amount < 10) ? '0' + amount.toString() : amount.toString()}</span>
          <button onClick={addAmount}>
            <AiOutlinePlus size={24} />
          </button>
        </div>
        <Button title="incluir" onClick={() => {addCart({plate_id: id, amount})}} />
      </Include>
    </Container>
  )
}