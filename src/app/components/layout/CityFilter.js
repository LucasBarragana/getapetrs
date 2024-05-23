// components/CityFilter.js
import { useState } from 'react';
import cities from '@/data/cities';

const CityFilter = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="p-4">        
      <div className="text-center mb-4">
        <h1>Pesquise e se conecte ao amor, amor esse, único, que só pode ser compartilhado com um animal!</h1>
      </div>
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

      <div className="mt-4">
        {selectedCity && (
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Animais encontrados em {cities.find((city) => city.value === selectedCity).label}:
            </h2>
            <ul className="list-disc list-inside">
              {/* Aqui você pode renderizar os itens correspondentes à cidade selecionada */}
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityFilter;
