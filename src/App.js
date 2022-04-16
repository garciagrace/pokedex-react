import { useCallback, useRef, useState } from 'react';
import PokemonCard from './components/PokemonCard';

import useShowList from './hooks/useShowList';

const App = () => {
  const [offset, setOffset] = useState(0);

  const { list, hasMore } = useShowList(offset);

  // Intersection observer - trigger infinite scrolling
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prev) => prev + 40);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <>
      {list &&
        list.map((pokemon, index) => {
          if (list.length === index + 1) {
            return (
              <PokemonCard
                ref={lastElementRef}
                key={index}
                name={pokemon.name}
              />
            );
          } else {
            return <PokemonCard key={index} name={pokemon.name} />;
          }
        })}
    </>
  );
};
export default App;
