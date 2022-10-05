import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { CartProvider } from "../hooks/cart";
import { App } from '../pages/App';
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  const { user } = useAuth();
  return(
    <BrowserRouter>
      { user ? <CartProvider><App /></CartProvider>  : <AuthRoutes/>}
    </BrowserRouter>
  )
}