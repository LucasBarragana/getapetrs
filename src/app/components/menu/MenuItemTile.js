'use client'

export default function MenuItemTile({ onClick, ...item}) {
  const {image, description, name,
    sizes
  } = item;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="pizza"/>
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <p className="text-gray-500 text-sm line-clamp-3">
        {sizes}
      </p>
      <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-orange-600"      
    >
      <span>ADOTE</span>
    </button>
    </div>
  );
}