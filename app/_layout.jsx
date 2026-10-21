import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const FavContext = createContext();

export default function RootLayout() {
  const [favList, setFavList] = useState([]);

  const addToFav = (item) => {
    setFavList((prevList) => [...prevList, item]);
  };

  const removeFromFav = (itemId) => {
    const index = favList.indexOf(itemId);
    const updatedList = [...favList];
    updatedList.splice(index, 1);
    setFavList(updatedList);
  };

  return (
    <FavContext.Provider value={{ favList, addToFav, removeFromFav }}>
      <Stack screenOptions={{ headerShown: false }} />
    </FavContext.Provider>
  );
}