import { Container } from "./styles";
import { useRef } from "react";
import { Section } from "../Section";
import { Card } from "../Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";



export function Carousel({title, plates}){
  const carousel = useRef(null);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return(
    <Container>
      <Section title={title} />
        <div className="boxcarousel">
          <div className="carousel" ref={carousel}>
          { 
            plates && plates.map(plate => (
              <Card key={String(plate.id)} id={plate.id} price={plate.price} image={plate.image} name={plate.name} description={plate.description} favorited={plate.favorited} />
            )) 
          }
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}><RiArrowLeftSLine size={40} /></button>
            <button onClick={handleRightClick}><RiArrowRightSLine size={40} /></button>
          </div>
        </div>
    </Container>
  )
}