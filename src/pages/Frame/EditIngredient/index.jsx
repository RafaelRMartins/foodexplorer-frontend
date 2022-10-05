import { Container, Main, Form, File } from "./styles";
import { Footer } from "../../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { Input } from "../../../components/Input";
import { Link, useParams } from 'react-router-dom';
import { api } from "../../../services/api";
import { useState, useEffect } from "react";

export function EditIngredient(){
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  const params = useParams();

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/ingredients/${params.id}`);
      setData(response.data)
    }      

    fetchPlate();
  },[])

  function ImageUpdate(event){
    const image = event.target.files[0];
    const fileUploadForm = new FormData();

    fileUploadForm.append("image", image);

    api.put(`/ingredients/image/${params.id}`, fileUploadForm)
    .then(() => {
      alert("Imagem atualizado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível atualizar a imagem do ingrediente!")
      }
    })
  }

  const editIngredient = () => {

    api.put(`/ingredients/${params.id}`, { name })
    .then(() => {
      alert("Ingrediente atualizado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível atualizar o ingrediente!")
      }
    })
  }

  async function testConfirmDialog()  {

    var result = confirm("tem certeza que desenha excluir este ingrediente?");

    if(result){
      await api.delete(`/ingredients/${params.id}`);
      alert("Ingrediente excluído com sucesso!");
    } 
  }

  return(
    <Container>
      <Main>
        <Link className="Back" to="/admin"><MdArrowBackIos size={28} /> voltar</Link>
        <h1>Criar Ingrediente</h1>

        { data &&
          <Form>
          <div>
            <File>
              <label>
                <span>Imagem do Ingrediente</span>
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
          </div>

          <div className="button-end">
            <button type="button" className="buttonDelete" onClick={testConfirmDialog}>
              Excluir ingrediente
            </button>

            <button type="button" onClick={editIngredient}>
              Editar ingrediente
            </button>
          </div>
          
        </Form>}
        
      </Main>

      <Footer />
    </Container>
  )
}