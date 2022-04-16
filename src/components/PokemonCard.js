import React, { forwardRef } from 'react';
import useShowBasics from '../hooks/useShowBasics';
import { addZeros } from '../utils/addZeros';

const PokemonCard = forwardRef(({ name }, ref) => {
  const { details } = useShowBasics(name);

  return (
    <div ref={ref}>
      {details && (
        <>
          <p>{addZeros(details.id)}</p>
          <p>{name}</p>
          {details.types.map((type, i) => (
            <p key={i}>{type.type.name}</p>
          ))}
          <img
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${addZeros(
              details.id
            )}.png`}
            alt={name}
          />
        </>
      )}
    </div>
  );
});

export default PokemonCard;
