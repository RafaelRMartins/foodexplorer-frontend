import { Container, Main } from "./styles";
import { Footer } from "../../../components/Footer";
import { MiniCard } from "../../../components/MiniCard";
import { AiOutlineCreditCard, AiOutlineAppstore } from "react-icons/ai"
import { useCart } from "../../../hooks/cart";
import qrcode from "../../../assets/qrcode.png"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import { BsReceiptCutoff } from "react-icons/bs";
import { Input } from "../../../components/Input";

export function Payment(){
  const [price, setPrice] = useState(0)
  const [imgQrCode, setImgQrCode] = useState(true)
  const [formCart, setFormCart] = useState(false)
  const { finishCart, getCart } = useCart();
  const cart = getCart()
  const navigate = useNavigate();

  useEffect(() => {
    function renderAmount(){
      if(!cart.length){
        navigate(`/`);
      }
    }
    async function getValue(){
      const response = await api.post("/carts/value", {amount_plates_id: cart} );
      setPrice(response.data.value)
    }      

    getValue();
    renderAmount();
  }, [cart])

  function setQrCode(){
    setImgQrCode(true)
    setFormCart(false)
  }

  function setForm(){
    setImgQrCode(false)
    setFormCart(true)
  }
  
  return(
    <Container>
      <Main>
        <div>
          <h1>Meu pedido</h1>

          <div className="cardlist">
            { 
              cart && cart.map(plate => (
              <MiniCard key={plate.plate_id} id={plate.plate_id} amount={plate.amount} />
              ))
            }

            <p>Total: R$ {price}</p>
          </div>
        </div>
        <div>
          <h2>Pagamento</h2>

          <div className="paymentarea">
            <div>
              <button onClick={() => setQrCode()}><AiOutlineAppstore size={20} />PIX</button>
              <button onClick={() => setForm()}><AiOutlineCreditCard size={20} />Crédito</button>
            </div>
            {imgQrCode && <img src={qrcode} alt="" />}
            {formCart && 
              <div className="formCart" >

                <label><p>Número do Cartão</p>
                  <Input 
                    placeholder="0000 0000 0000 0000"
                  />
                </label>
                
                <div className="inputFlex">

                  <label><p>Validade</p>
                    <Input 
                      placeholder="04/25"
                    />
                  </label>

                  <label><p>CVC</p>
                    <Input 
                      placeholder="04/25"
                    />
                  </label>
                </div>

                <a className="linkbutton" onClick={() => finishCart()}><BsReceiptCutoff/><p>Finalizar pagamento</p></a>
              </div>
            }
          </div>
        </div>
      </Main>

      <Footer />
    </Container>
  )
}