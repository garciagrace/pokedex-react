import React, { forwardRef } from 'react';
import useShowBasics from '../hooks/useShowBasics';
import { addZeros } from '../utils/addZeros';

const PokemonCard = forwardRef(({ name }, ref) => {
  const { details } = useShowBasics(name);

  return (
    details && (
      <div className="p-4 shadow-lg" ref={ref}>
        <div className="flex justify-between h-14">
          <p>{addZeros(details.id)}</p>

          <div>
            {details.types.map((type, i) => (
              <p className="text-right" key={i}>
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
        <p className="text-center mt-4 mb-2">{name}</p>
        <img
          className="p-4"
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${addZeros(
            details.id
          )}.png`}
          alt={name}
        />
      </div>
    )
  );
});

export default PokemonCard;
