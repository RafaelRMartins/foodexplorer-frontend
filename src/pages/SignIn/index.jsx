import { Container, Logo, CreateAccount } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>
      <Logo>
      <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
      </svg>
        food explorer
      </Logo>

      <CreateAccount>
        <h1>Faça login</h1>

        <label><p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
        </label>
        <label><p>Senha</p>
          <Input placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />
        </label>

        <Button title="Entrar" onClick={handleSignIn} />
        
        <Link to="/signup">Criar uma conta</Link>
      </CreateAccount>
      
    </Container>
  )
}