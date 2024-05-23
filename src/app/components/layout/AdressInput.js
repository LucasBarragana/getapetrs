// components/AddressInputs.js
import { useState } from 'react';

const cities = [
  { label: "Arambaré", value: "AMB" },
  { label: "Arroio do Meio", value: "ADM" },
  { label: "Barra do Rio Azul", value: "BRA" },
  { label: "Bento Gonçalves", value: "BGV" },
  { label: "Bom Retiro do Sul", value: "BRS" },
  { label: "Candelária", value: "CND" },
  { label: "Canoas", value: "CNS" },
  { label: "Canudos do Vale", value: "CDV" },
  { label: "Caxias do Sul", value: "CXS" },
  { label: "Colinas", value: "CLN" },
  { label: "Cruzeiro do Sul", value: "CDS" },
  { label: "Doutor Ricardo", value: "DRD" },
  { label: "Eldorado do Sul", value: "EDS" },
  { label: "Encantado", value: "ENC" },
  { label: "Estrela", value: "EST" },
  { label: "Fontoura Xavier", value: "FXR" },
  { label: "Guaíba", value: "GBA" },
  { label: "Imigrante", value: "IMG" },
  { label: "Lajeado", value: "LJD" },
  { label: "Marques de Souza", value: "MDS" },
  { label: "Montenegro", value: "MNT" },
  { label: "Muçum", value: "MCM" },
  { label: "Pelotas", value: "PLT" },
  { label: "Porto Alegre", value: "POA" },
  { label: "Putinga", value: "PTG" },
  { label: "Relvado", value: "RLV" },
  { label: "Rio Grande", value: "RGD" },
  { label: "Rio Pardo", value: "RPD" },
  { label: "Roca Sales", value: "RCS" },
  { label: "Rolante", value: "ROL" },
  { label: "Santa Cruz do Sul", value: "SCS" },
  { label: "Santa Maria", value: "SMA" },
  { label: "Santa Tereza", value: "STZ" },
  { label: "São Jerônimo", value: "SJR" },
  { label: "São José do Norte", value: "SJN" },
  { label: "São Leopoldo", value: "SPL" },
  { label: "São Lourenço do Sul", value: "SLS" },
  { label: "São Sebastião do Caí", value: "SSC" },
  { label: "São Valentim do Sul", value: "SVS" },
  { label: "São Vendelino", value: "SVD" },
  { label: "Severiano de Almeida", value: "SVA" },
  { label: "Sinimbu", value: "SNB" },
  { label: "Taquari", value: "TAQ" },
  { label: "Travesseiro", value: "TVS" },
  { label: "Venâncio Aires", value: "VAS" },
  { label: "Veranópolis", value: "VPL" }
];

export default function AddressInputs({ addressProps, setAddressProp, disabled = false }) {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const { phone, streetAddress, postalCode, city } = addressProps;
  return (
    <>
      <label>Telefone</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Número do telefone"
        value={phone || ''}
        onChange={(ev) => setAddressProp('phone', ev.target.value)}
      />
      <label>Endereço</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Endereço"
        value={streetAddress || ''}
        onChange={(ev) => setAddressProp('streetAddress', ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Código postal</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Código Postal"
            value={postalCode || ''}
            onChange={(ev) => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>Cidade</label>
          <select
            disabled={disabled}
            value={selectedCity}
            onChange={(ev) => {
              setAddressProp('city', ev.target.value);
              handleCityChange(ev);
            }}
            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Selecione uma cidade</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
