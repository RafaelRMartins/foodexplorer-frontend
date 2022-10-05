import { Container, Main, Form, File } from "./styles";
import { Footer } from "../../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { Input } from "../../../components/Input";
import { Link } from 'react-router-dom';
import { api } from "../../../services/api";
import { useState } from "react";

export function CreateIngredient(){
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  function ImageFile(event){
    const image = event.target.files[0];
    
    setImage(image)
  }

  const createIngredient = () => {
    const fileUploadForm = new FormData();
    
    fileUploadForm.append("image", image);
    fileUploadForm.append("name", name);

    api.post(`/ingredients`, fileUploadForm)
    .then(() => {
      alert("Ingrediente cadastrado!")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível cadastrar o ingrediente!")
      }
    })
  }

  return(
    <Container>
      <Main>
        <Link className="Back" to="/admin"><MdArrowBackIos size={28} /> voltar</Link>
        <h1>Criar Ingrediente</h1>

        <Form>
          <div>
            <File>
              <label>
                <span>Imagem do Ingrediente</span>
                <p><FiUpload size={24} /> Selecione imagem</p>
                <input type="file" onChange={ImageFile} />
              </label>
            </File>
            
            <label><p>Nome</p>
              <Input placeholder="Ex.: Salada Ceasar" onChange={e => setName(e.target.value)} />
            </label>
          </div>

          <div className="button-end">
            <button type="button" onClick={createIngredient}>
              Adicionar Ingrediente
            </button>
          </div>
          
        </Form>
        
      </Main>

      <Footer />
    </Container>
  )
}