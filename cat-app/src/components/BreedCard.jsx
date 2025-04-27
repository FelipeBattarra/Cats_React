import React from 'react';
import { Link } from 'react-router-dom';

const BreedCard = ({ breed }) => {
  // A API de raças (/breeds) pode ou não retornar uma imagem de referência.
  // Se não houver, podemos exibir um placeholder ou apenas o nome.
  const imageUrl = breed.image?.url;

  return (
    <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '1rem', margin: '0.5rem', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
      {imageUrl ? (
        <img src={imageUrl} alt={breed.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
      ) : (
        <div style={{ width: '100%', height: '150px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '0.5rem' }}>
          No Image
        </div>
      )}
      <h3>{breed.name}</h3>
      <Link to={`/breed/${breed.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
};

export default BreedCard;