import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button';

interface CardDetProps {
  id?: number;
  title?: string;
  image?: string;
  labelButton?: string;
  overview?: string;
  onClickFav?: React.MouseEventHandler;
}

const CardDet: FC<CardDetProps> = ({ id, title, image, labelButton, onClickFav}) => {

  const navigate = useNavigate();

  const onCLickDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div key={id} className="card-compact card bg-transparent shadow-lg-sm shadow-black transform transition duration-500 hover:z-20 hover:scale-110 overflow-hidden">
        <figure onClick={onCLickDetail}>
         <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt="Movies"
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <p className="card-title text-black"
          onClick={onCLickDetail}
          >{title}</p>
            <Button
              className="btn bg-black p-4 font-bold text-white"
              label={labelButton}
              onClick={onClickFav}
            />
        </div>
      </div>
  )
}

export default CardDet