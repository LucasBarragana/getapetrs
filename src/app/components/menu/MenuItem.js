import {CartContext} from "@/components/AppContext";
import MenuItemTile from "@/components/menu/MenuItemTile";
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
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center ">
          <div
            onClick={ev => ev.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-md ">
            <div
              className="overflow-y-scroll p-2 pr-10 pl-10"
              style={{maxHeight:'calc(100vh - 100px)'}}>
              <Image
                src={image}
                alt={name}
                width={300} height={200}
                className="mx-auto" />
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {description}
              </p>
              <p className="text-center text-gray-500 text-sm mb-2">
                {sizes}
              </p>
                <button className="flex bg-orange-600 hover:bg-orange-500 items-center gap-2 p-4 border rounded-md mb-1 text-white"
                     onClick={handleAddToCartButtonClick}>
                  Agendar Visita
                </button>
              <button
                className="mt-2"
                onClick={() => setShowPopup(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile
        onAddToCart={handleAddToCartButtonClick}
        {...menuItem} />
    </>
  );
}