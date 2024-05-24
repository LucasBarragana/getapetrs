// components/CityFilter.js
'use client';
import { useState } from 'react';
import cities from '@/data/cities';
import categoriesData from "@/data/categories";
import sizesData from "@/data/sizes";

export default function CityFilter ({menuItem }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [sizes, setSizes] = useState(menuItem?.sizes || '');
  const [category, setCategory] = useState(menuItem?.category || '');
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h1>Pesquise e se conecte ao amor, amor esse, único, que só pode ser compartilhado com um animal!</h1>
      </div>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Selecione uma cidade
          </label>
          <select
            id="city"
            name="city"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Selecione uma cidade</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Categoria</label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={category}
            onChange={ev => setCategory(ev.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            {categoriesData.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Porte</label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={sizes}
            onChange={ev => setSizes(ev.target.value)}
          >
            <option value="">Selecione um porte</option>
            {sizesData.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
