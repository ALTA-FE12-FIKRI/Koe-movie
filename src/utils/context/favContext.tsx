import React, { createContext, useState } from 'react';

interface FavProviderProps {
  children: React.ReactNode;
}

interface FavItemType {
  id?: number;
  title?: string;
  poster_path?: string;
}

interface FavContextType {
  favItems: FavItemType[];
  addFavorite: (item: FavItemType) => void;
  removeFavorite: (id: number) => void;
}

export const FavContext = createContext<FavContextType>({
  favItems: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavProvider: React.FC<FavProviderProps> = ({ children }) => {
  const [favItems, setFavItems] = useState<FavItemType[]>([]);

  const addFavorite = (item: FavItemType) => {
    setFavItems((prevFavItems) => {
      const existingItemIndex = prevFavItems.findIndex((favItem) => favItem.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedFavItems = [...prevFavItems];
        updatedFavItems[existingItemIndex] = item;
        return updatedFavItems;
      } else {
        console.log("Added new items : ", item);
        return [...prevFavItems, item];
      }
    });
  };

  const removeFavorite = (id: number | undefined = undefined) => {

    if (id === undefined) {
      return;
    }

    setFavItems((prevFavItems) => prevFavItems.filter((favItem) => favItem.id !== id));
    console.log(`Item with ID ${id} has been removed from favorites`);
    return setFavItems;
  };

  return (
    <FavContext.Provider value={{ favItems, addFavorite, removeFavorite }}>
      {children}
    </FavContext.Provider>
  );
};
