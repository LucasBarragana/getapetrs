'use client'
import { CartContext } from "../AppContext";
import MenuItemTile from "./MenuItemTile";
import Image from "next/image";
import {useContext, useState} from "react";

export default function MenuItem(menuItem) {
  const {
    image,name,description,
    sizes
  } = menuItem;
  const [showPopup, setShowPopup] = useState(false);
  const {addToCart} = useContext(CartContext);

  async function handleAddToCartButtonClick() {
    console.log('Adicione ao carrinho');
    addToCart(menuItem);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('hiding popup');
    setShowPopup(false);
  }

  return (
    <>
      <MenuItemTile
        onAddToCart={handleAddToCartButtonClick}
        {...menuItem} />
    </>
  );
}