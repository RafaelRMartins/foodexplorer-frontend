import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Frame/Home";
import { Details } from "../pages/Frame/Details";
import { Payment } from "../pages/Frame/Payment";
import { Status } from "../pages/Frame/Status";
import { Favorite } from "../pages/Frame/Favorite";
import { Search } from "../pages/Frame/Search";
import { Admin } from "../pages/Frame/Admin";
import { CreateIngredient } from "../pages/Frame/CreateIngredient";
import { EditIngredient } from "../pages/Frame/EditIngredient";
import { IngredientList } from "../pages/Frame/IngredientList";
import { CreatePlate } from "../pages/Frame/CreatePlate";
import { EditPlate } from "../pages/Frame/EditPlate";
import { AdminStatus } from "../pages/Frame/AdminStatus";


export function AppRoutes({plates}) {
  const { user } = useAuth();
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/status" element={<Status/>} />
      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/search" element={<Search plates={plates} />} />
      <Route path="/admin" element={ user.admin == 1 ? <Admin/> : <Home/> } />
      <Route path="/admin/createingredient" element={ user.admin == 1 ? <CreateIngredient/> : <Home/> } />
      <Route path="/admin/editingredient/:id" element={ user.admin == 1 ? <EditIngredient/> : <Home/> } />
      <Route path="/admin/ingredientlist" element={ user.admin == 1 ? <IngredientList/> : <Home/> } />
      <Route path="/admin/createplate" element={ user.admin == 1 ? <CreatePlate/> : <Home/> } />
      <Route path="/admin/editplate/:id" element={ user.admin == 1 ? <EditPlate/> : <Home/> } />
      <Route path="/admin/adminStatus" element={ user.admin == 1 ? <AdminStatus/> : <Home/> } />
    </Routes>
  )
}