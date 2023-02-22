import React, { Component } from "react";


interface CardProps {
  title: string;
  image: string;
}

class Card extends Component<CardProps> {
  render() {
    const {  title, image } = this.props;

    return (
      <div className="card-compact card bg-transparent shadow-lg-sm shadow-black ">
        <figure>
          <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Movies"
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <p className="card-title text-black">{title}</p>
        </div>
      </div>
    );
  }
}

export default Card;
