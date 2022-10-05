import { Container, Main, Form, File } from "./styles";
import { Footer } from "../../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { Input } from "../../../components/Input";
import Select from "react-select";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from "../../../services/api";


export function EditPlate(){
  const [data, setData] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [useIngredient, setUseIngredient] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientPlate, setIngredientPlate] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/getplates/${params.id}`);
      setData(response.data)
      setUseIngredient(response.data.ingredient)
    }      

    fetchPlate();
  },[])

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


  const useIngredients = useIngredient.map(ingredient => {
    return{
      value: ingredient[0].id,
      label: ingredient[0].name
    }
  })

  const editPlate = () => {
    let editIngredientPlate = ""

    if(ingredientPlate.length === 0){
      useIngredients.map(ingredient => {
        editIngredientPlate = editIngredientPlate.concat(`${ingredient.value},`)
      })
      editIngredientPlate = editIngredientPlate.substring(0, editIngredientPlate.length - 1);
    } else{
      ingredientPlate.map(ingredient => {
        editIngredientPlate = editIngredientPlate.concat(`${ingredient.value},`)
      })
      editIngredientPlate = editIngredientPlate.substring(0, editIngredientPlate.length - 1);
    }
    
    api.put(`/plates/${params.id}`, { name, price, type, description, ingredient_id: editIngredientPlate})
    .then(() => {
      alert("Prato atualizado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível atualizar o prato!")
      }
    })
  }

  async function testConfirmDialog()  {

    var result = confirm("tem certeza que desenha excluir este prato?");

    if(result){
      await api.delete(`/plates/${params.id}`);
      alert("Prato excluído com sucesso!");
    } 
  }

  function ImageUpdate(event){
    const image = event.target.files[0];
    const fileUploadForm = new FormData();

    fileUploadForm.append("image", image);

    api.put(`/plates/image/${params.id}`, fileUploadForm)
    .then(() => {
      alert("Imagem atualizado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível atualizar a imagem do prato!")
      }
    })
  }
  
  return(
    <Container>
      <Main>
        <Link className="Back" to="/admin"><MdArrowBackIos size={28} /> voltar</Link>
        <h1>Editar prato</h1>

        { data &&
          <Form>
          <div>
            <File>
              <label>
                <span>Imagem do prato</span>
                <p><FiUpload size={24} /> Selecione imagem</p>
                <input type="file" onChange={ImageUpdate} />
              </label>
            </File>
            
            <label><p>Nome</p>
              <Input 
                placeholder="Ex.: Salada Ceasar" 
                defaultValue={data.name}
                onChange={e => setName(e.target.value)}
              />
            </label>

            <label className="selectType"><p>Tipo</p>
              <select name="type" defaultValue={data.type} onChange={e => setType(e.target.value)}>
                  <option value="principais"> Principais </option>
                  <option value="bebidas" > Bebidas </option>
                  <option value="sobremesas"> Sobremesas </option>
              </select>
            </label>
          </div>
          
          <div className="row2">
            <label><p>Ingredientes</p>
              <Select
                defaultValue={useIngredients}
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
              <Input placeholder="R$ 00,00" defaultValue={data.price} onChange={e => setPrice(e.target.value)} />
            </label>
          </div>
          
          <label><p>Descrição</p>
            <textarea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              defaultValue={data.description} 
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <div className="button-end">
            <button type="button" className="buttonDelete" onClick={testConfirmDialog}>
              Excluir prato
            </button>

            <button type="button" onClick={editPlate}>
              Editar prato
            </button>
          </div>
          
        </Form>}
        
      </Main>

      <Footer />
    </Container>
  )
}