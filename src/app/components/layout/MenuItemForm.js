'use client'

import EditableImage from "./EditableImage";
import { useState} from "react";
import categoriesData from "@/data/categories";
import sizesData from "@/data/sizes";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MenuItemForm({onSubmit, menuItem}) {
  const [image, setImage] = useState(menuItem?.image || '');
  const [name, setName] = useState(menuItem?.name || '');
  const [description, setDescription] = useState(menuItem?.description || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || '');
  const [category, setCategory] = useState(menuItem?.category || '');
  

  return (
    <form
      onSubmit={ev => {
        onSubmit({
          image,
          name,
          description,
          sizes,
          category,
        });
      }}
      className="mt-8 max-w-2xl mx-auto">
      <div
        className="md:grid items-start gap-4"
        style={{gridTemplateColumns: '.3fr .7fr'}}>
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Nome do pet</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <label>Descrição</label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            className="h-60 bg-gray-100 pb-16 mb-4"
          />
          <label>Categoria</label>
          <select value={category} onChange={ev => setCategory(ev.target.value)}>
            <option value="">Selecione uma categoria</option>
            {categoriesData.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <label>Porte</label>
          <select value={sizes} onChange={ev => setSizes(ev.target.value)}>
            <option value="">Selecione uma categoria</option>
            {sizesData.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
          <button type="submit">Salvar</button>
        </div>
      </div>
    </form>
  );
}
