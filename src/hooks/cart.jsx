import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const cartContext = createContext({});

function CartProvider({ children }){
  const [amountCart, setAmountCart] = useState(0);
  const navigate = useNavigate();
  let cartList = []

  useEffect(() => {
    function renderAmount(){
      let sumAmount = 0
      cartList = localStorage.getItem("@foodexplorer:cartlist");
      
      if(cartList == null){
        cartList = []
      }else{
        cartList = JSON.parse(cartList)
      }
      cartList.map(plate => {
        return sumAmount = sumAmount + plate.amount
      })
      setAmountCart(sumAmount)
    }
    
    renderAmount();
  }, [])

  function addCart({ amount, plate_id }){
    cartList = localStorage.getItem("@foodexplorer:cartlist");
    let sumAmount = 0
    
    if(cartList == null){
      cartList = []

      cartList.push({ amount, plate_id })
      cartList.map(plate => {
        return sumAmount = sumAmount + plate.amount
      })
      setAmountCart(sumAmount)
      localStorage.setItem("@foodexplorer:cartlist", JSON.stringify(cartList));

    }else{
      cartList = JSON.parse(cartList)

      const checkBoolean = cartList.map(plate => {
        if(plate.plate_id == plate_id){
          return true
        }
        return false
      })
      
      const cartIdBoolean = checkBoolean.filter(plate => {return plate})

      if(cartIdBoolean.length){
        const sumCart = cartList.map(plate => {
          if(plate.plate_id == plate_id){
            return {
              amount: amount + plate.amount,
              plate_id: plate.plate_id
            }
          }
          return {...plate}
        })
        sumCart.map(plate => {
          return sumAmount = sumAmount + plate.amount
        })
        setAmountCart(sumAmount)
        localStorage.setItem("@foodexplorer:cartlist", JSON.stringify(sumCart));
  
      }else{
        cartList.push({ amount, plate_id })
        cartList.map(plate => {
          return sumAmount = sumAmount + plate.amount
        })
        setAmountCart(sumAmount)
        localStorage.setItem("@foodexplorer:cartlist", JSON.stringify(cartList));
      }
    }
    
    alert("Adicionado ao carrinho!")
  }

  function remCart({ amount, plate_id }){
    cartList = localStorage.getItem("@foodexplorer:cartlist");
    let sumAmount = 0
    
    if(cartList == null){
      cartList = []
    }else{
      cartList = JSON.parse(cartList)
    }
    const removePlate = cartList.filter(plate => plate.plate_id != plate_id)
    removePlate.map(plate => {
      return sumAmount = sumAmount + plate.amount
    })
    setAmountCart(sumAmount)
    localStorage.setItem("@foodexplorer:cartlist", JSON.stringify(removePlate));

    alert("Removido do carrinho!")
  }

  function getCart(){
    cartList = localStorage.getItem("@foodexplorer:cartlist");
    
    if(cartList == null){
      cartList = []
    }else{
      cartList = JSON.parse(cartList)
    }
    return cartList
  }

  
  async function finishCart(){
    cartList = localStorage.getItem("@foodexplorer:cartlist");
    
    if(cartList == null){
      cartList = []
    }else{
      cartList = JSON.parse(cartList)
    }

    await api.post(`/carts`, {amount_plates_id: cartList})
    .then(() => {
      alert("Compra efetuada!")
      localStorage.removeItem("@foodexplorer:cartlist");
      navigate("/status");
      setAmountCart(0)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível efetuar a compra!")
      }
    })
  }

  return(
    <cartContext.Provider value={{ finishCart, addCart, remCart, getCart, amountCart }}>
      {children}
    </cartContext.Provider>
  )
}

function useCart(){
  const context = useContext(cartContext);

  return context;
}

export { CartProvider, useCart };