import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button';

interface CardDetProps {
  id?: number;
  title?: string;
  image?: string;
  labelButton?: string;
}

const CardDet: FC<CardDetProps> = ({ id, title, image, labelButton}) => {

  const navigate = useNavigate();

  function onCLickDetail() {
    navigate(`/movie/${id}`);
  };

  return (
    <div key={id} className="card-compact card bg-transparent shadow-lg-sm shadow-black ">
        <figure onClick={() => onCLickDetail()}>
         <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Movies"
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <p className="card-title text-black"
          onClick={() => onCLickDetail()}
          >{title}</p>
          <div className="card-actions">
            <Button
              className="btn bg-black p-2 font-bold text-white"
              label={labelButton}
            />
          </div>
        </div>
      </div>
  )
}

export default CardDet