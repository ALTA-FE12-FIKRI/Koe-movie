import { useNavigate } from "react-router-dom";

type CardDetProps = {
  id: number;
  title: string;
  image: string;
  labelButton: string;
  onClickFav: () => void;
};

const CardDet = ({ id, title, image, labelButton, onClickFav }: CardDetProps) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      key={id}
      className="card-compact card bg-transparent shadow-lg-sm shadow-black transform transition duration-500 hover:z-20 hover:scale-90"
    >
      <figure onClick={() => onClickDetail()}>
        <img
          className="aspect-auto object-contain"
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt="Movies"
        />
      </figure>
      <div className="card-body items-center justify-between text-center">
        <p className="card-title text-black" onClick={() => onClickDetail()}>
          {title}
        </p>
      </div>
      <div>
       <button className='btn bg-zinc-800 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90'
        onClick={onClickFav}
        >
          {labelButton}
        </button> 
        
      </div>
    </div>
  );
};

export default CardDet;
