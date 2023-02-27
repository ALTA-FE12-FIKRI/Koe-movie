import React, { useContext } from 'react';
import Layout from '../components/Layout';
import CardDet from '../components/CardDet';
import { FavContext } from '../utils/context/favContext';

const Favorite = () => {
  const { favItems, removeFavorite } = useContext(FavContext);

  if (!favItems) {
    return <div>Loading...</div>;
  }


  return (
    <Layout>
      <div>
        <h1 className='my-10 text-center text-5xl text-salte-900 text-black dark:text-white'>
          Favorit Kamu
        </h1>
        <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
          {favItems.map((item) => {
            return (
              <CardDet 
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.poster_path}
                onClickFav={() => removeFavorite(item.id)}
                labelButton="Remove Favorite"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
