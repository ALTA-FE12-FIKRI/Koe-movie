import React, { createContext, useState } from 'react'

interface FavProviderProps {
    children?: React.ReactNode;
}

interface FavItemType {
    id?: number;
    title?: string;
    poster_path?: string;
}

interface FavContextType {
    favItems?: FavItemType[];
    addFavorite?: (item: FavItemType) => void;
    removeFavorite?: (id: number) => void;
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
        return prevFavItems;
      }

      return [...prevFavItems, item];
    });
  };

  const removeFavorite = (id: number) => {
    setFavItems((prevFavItems) => prevFavItems.filter((favItem) => favItem.id !== id));
  };

  return (
    <FavContext.Provider value={{ favItems, addFavorite, removeFavorite }}>
      {children}
    </FavContext.Provider>
  );
};
