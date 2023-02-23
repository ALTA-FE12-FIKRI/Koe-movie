import React, { Component } from "react";
import { withRouter } from "../utils/navigation";


interface CardProps {
  id: number;
  title: string;
  image: string;
  navigate?: any;
  params?: any;
}

class Card extends Component<CardProps> {

  onCLickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    const {  id, title, image } = this.props;

    return (
      <div key={id} className="card-compact card bg-transparent shadow-lg-sm shadow-black ">
        <figure onClick={() => this.onCLickDetail()}>
          <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Movies"
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <p className="card-title text-black"
          onClick={() => this.onCLickDetail()}
          >{title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
