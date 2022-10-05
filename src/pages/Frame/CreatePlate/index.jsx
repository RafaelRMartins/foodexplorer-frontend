import { Container, Main, Form, File } from "./styles";
import { Footer } from "../../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { Input } from "../../../components/Input";
import Select from "react-select";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export function CreatePlate(){
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("principais");
  const [description, setDescription] = useState("");
  const [ingredientPlate, setIngredientPlate] = useState([]);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/ingredients`);
      setIngredients(response.data)
    }      

    fetchPlate();
  },[])

  const options = ingredients.map(ingredient => {
    return{
      value: ingredient.id,
      label: ingredient.name
    }
  })

  function ImageFile(event){
    const image = event.target.files[0];
    
    setImage(image)
  }
  
  const createPlate = () => {
    let IngredientPlate = ""
    const fileUploadForm = new FormData();
  
    
    ingredientPlate.map(ingredient => {
      IngredientPlate = IngredientPlate.concat(`${ingredient.value},`)
    })
    IngredientPlate = IngredientPlate.substring(0, IngredientPlate.length - 1);
    const ingredient_id = IngredientPlate
    
    fileUploadForm.append("image", image);
    fileUploadForm.append("name", name);
    fileUploadForm.append("price", price);
    fileUploadForm.append("type", type);
    fileUploadForm.append("description", description);
    fileUploadForm.append("ingredient_id", ingredient_id);

    api.post(`/plates`, fileUploadForm)
    .then(() => {
      alert("Prato cadastrado!")
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível cadastrar o prato!")
      }
    })
  }

  return(
    <Container>
      <Main>
        <Link className="Back" to="/admin"><MdArrowBackIos size={28} /> voltar</Link>
        <h1>Criar Prato</h1>

        <Form>
          <div>
            <File>
              <label>
                <span>Imagem do prato</span>
                <p><FiUpload size={24} />Selecione imagem</p>
                <input type="file" onChange={ImageFile} />
              </label>
            </File>
            
            <label><p>Nome</p>
              <Input 
                placeholder="Ex.: Salada Ceasar" 
                onChange={e => setName(e.target.value)}
              />
            </label>

            <label className="selectType"><p>Tipo</p>
              <select name="type" onChange={e => setType(e.target.value)}>
                  <option value="principais"> Principais </option>
                  <option value="bebidas"> Bebidas </option>
                  <option value="sobremesas"> Sobremesas </option>
              </select>
            </label>
          </div>
          
          <div className="row2">
            <label><p>Ingredientes</p>
              <Select
                isMulti
                options={options}
                isClearable
                isSearchable
                closeMenuOnSelect={false}
                placeholder="Ex.: Alface"
                onChange={e => setIngredientPlate(e)}
              />
            </label>
            <label><p>Preço</p>
              <Input placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />
            </label>
          </div>
          
          <label><p>Descrição</p>
            <textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <div className="button-end">
            <button type="button" onClick={createPlate}>
              Criar Prato
            </button>
          </div>
          
        </Form>
        
      </Main>

      <Footer />
    </Container>
  )
}