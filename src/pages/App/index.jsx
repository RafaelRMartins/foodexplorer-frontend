import { Container, Header, Logout, Logo, Search, AdminPage } from "./styles";
import { MdLogout } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { BsSearch, BsReceiptCutoff } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../routes/app.routes"
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

export function App(){
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");
  const [plates, setPlates] = useState([]);
  const navigate = useNavigate();

  const { amountCart } = useCart();

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/getplates?title=${search}`)
      setPlates(response.data)
    }
    if(search == ""){
      navigate(`/`);
    }else{
      navigate(`/search`);
    }

    fetchPlates();
  },[search]);

  function navigation(){
    if(amountCart == []){
      navigate(`/status`);
    }else{
      navigate(`/payment`);

    }
  }

  return(
    <Container>
      <Header>
        <Logo>
          <Link to="/">
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
            </svg>
            <span>food explorer</span> 
          </Link>
        </Logo>
        
        <Link to="/favorite">Meus favoritos</Link>
        <Search>
          <BsSearch />
          <input placeholder="Busque pelas opções de pratos" onChange={(e) => setSearch(e.target.value)} />
        </Search>
        <a className="linkbutton" onClick={navigation}><BsReceiptCutoff/><p>Meu pedido ({amountCart})</p></a>
        {user.admin == 1 && <Link to="/admin" ><AdminPage><RiAdminFill size={32}/></AdminPage></Link>}
        <Link to="/"><Logout onClick={signOut}><MdLogout size={32}/></Logout></Link>
      </Header>

      <AppRoutes plates={plates} />
    </Container>
  )
}