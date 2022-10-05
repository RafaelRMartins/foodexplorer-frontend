import { Container, Main, Info, PlateInfo, Ingredients, Ingredient, PriceSection, Price, Include, ButtonLink } from "./styles";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { BsReceiptCutoff } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAuth } from "../../../hooks/auth";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useCart } from "../../../hooks/cart";


export function Details(){
  const [data, setData] = useState(null)
  const [amount, setAmount] = useState(1);
  const [amountPrice, setAmountPrice] = useState(null);
  let pricePlate = null

  const { user } = useAuth();
  const params = useParams();
  const { addCart } = useCart();

  const navigate = useNavigate();


  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/getplates/${params.id}`);
      setData(response.data)
    }      

    fetchPlate();
  },[])

  function handleDetails(id){
    navigate(`/admin/editplate/${id}`);
  }

  function addAmount(){
    if(amount >= 99){
      return
    }else{
      setAmount(amount + 1)
      setAmountPrice(parseFloat(data.price.replace(',','.')*(amount+1)).toFixed(2).toString().replace(".", ","))
    }
  }

  function remAmount(){
    if(amount <= 1){
      return
    }else{
      setAmount(amount - 1)
      setAmountPrice(parseFloat(data.price.replace(',','.')*(amount-1)).toFixed(2).toString().replace(".", ","))
    }
  }

  return(
    <Container>
      { data &&
      <Main>
        <div>
          <Link  to="/"><MdArrowBackIos size={28} /> voltar</Link>
          {user.admin == 1 && <ButtonLink className="editPlate" onClick={() => handleDetails(params.id)}><RiFileEditFill size={28} /> Editar</ButtonLink>}
        </div>

        <Info>
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />

          <PlateInfo>
            <h1>{data.name}</h1>

            <p>{data.description}</p>

            <Ingredients>
              {
                data.ingredient && data.ingredient.map(ingredient => (
                  <Ingredient key={ingredient[0].id}>
                    <img src={`${api.defaults.baseURL}/files/${ingredient[0].image}`} alt="" />
                    <p>{ingredient[0].name}</p>
                  </Ingredient>
                ))
              }
            </Ingredients>

            <PriceSection>
              <Price>
                R$ {amountPrice ? amountPrice : data.price}
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
                <Button icon={BsReceiptCutoff} title="incluir" onClick={() => {addCart({plate_id: params.id, amount})}} />
              </Include>

            </PriceSection>
          </PlateInfo>
        </Info>

      </Main>}

      <Footer />
    </Container>
  )
}