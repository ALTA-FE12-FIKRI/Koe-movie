import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavState, removeFavorite } from '../utils/redux/reducers/favSlice';
import Layout from '../components/Layout';
import CardDet from '../components/CardDet';

const Favorite = () => {

  const dispatch = useDispatch();
  const myFav = useSelector((state: { favorite: FavState }) => state.favorite);

  function handleRemoveFromFavorite(id: number) {
    dispatch(removeFavorite(id));
  }

  return (
    <Layout>
      <div>
        <h2 className="my-10 text-center text-5xl text-salte-900 text-black">Favorites</h2>
        {myFav.items.length > 0 ? (
          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
            {myFav.items.map((item) => (
              <CardDet
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.poster_path}
                onClickFav={() => handleRemoveFromFavorite(item.id)} 
                labelButton="Remove from Favorite"
                />
            ))}
          </div>
        ) : (
          <p className="text-lg font-medium text-gray-500">
            You haven't added any favorite movies yet.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Favorite;
