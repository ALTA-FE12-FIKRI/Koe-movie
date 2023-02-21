import React, { Component } from "react";


interface CardProps {
  id: string;
  title: string;
  image: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, title, image } = this.props;

    return (
      <div id={id} className="card-compact card bg-transparent shadow-lg-sm shadow-black ">
        <figure>
          <img
            className="aspect-auto object-contain"
            src={image}
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
