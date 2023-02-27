import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface CardProps {
  id?: number;
  title?: string;
  image?: string;
  labelButton?: string;
  overview?: string;
}

const Card: FC<CardProps> = ({ id, title, image, labelButton, overview }) => {
  const navigate = useNavigate();

  const onCLickDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      key={id}
      className="card-compact card bg-transparent shadow-lg-sm shadow-black transform transition duration-500 hover:z-20 hover:scale-110"
    >
      <figure onClick={onCLickDetail}>
        <img
          className="aspect-auto object-contain"
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt="Movies"
        />
      </figure>
      <div className="card-body items-center justify-between text-center">
        <p className="card-title text-black" onClick={onCLickDetail}>
          {title}
        </p>
        <p className="card-title text-black" onClick={onCLickDetail}>
          {overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
