import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useShowBasics(name) {
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(({ data }) => setDetails({ id: data.id, types: data.types }));
  }, [name]);

  return { details };
}
