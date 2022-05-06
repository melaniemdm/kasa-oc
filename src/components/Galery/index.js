import React, { useState } from 'react';
import './style.scss';
import previous from '../../assets/vectorPrevious.png';
import next from '../../assets/vectorNext.png';

function Galery(props) {
  const [numberPicture, setNumberPicture] = useState(0);
  
  const pictures = props.pictures;

  if (pictures.length > 1) {
    return (
      <div id="containerGalery" className="containerGalery">
        <div id="contenairPictureLogement">
          <img
            className="pictureLogement"
            src={pictures[numberPicture]}
            key={numberPicture}
            alt="Galery des logements"
          ></img>
        </div>
        <div id="containerArrow">
          <div
            id="iconLeft"
            onClick={() =>{
              if(numberPicture - 1 > -1){
                setNumberPicture(numberPicture - 1);
              }else{
                setNumberPicture(pictures.length - 1);
              }
            }
            }
          >
            <img className="arrowLeft" src={previous} alt="precedent" />
          </div>
          <div
            id="iconRight"
            onClick={() =>{
              if(numberPicture + 1 < pictures.length) {
                setNumberPicture(numberPicture + 1);
              } else{
                setNumberPicture(0);
              } 
            }
            }
          >
            <img id="suivant" className="arrowRight" src={next} alt="suivant" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div id="containerGalery" className="containerGalery">
      <div id="contenairPictureLogement">
        <img
          className="pictureLogement"
          src={pictures[numberPicture]}
          key={numberPicture}
          alt="Galery des logements"
        ></img>
      </div>
    </div>
  );
}

export default Galery;
