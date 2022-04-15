import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useShowList(offset) {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=40`
      )
      .then(({ data }) => {
        setList((prev) => [...prev, ...data.results]);
        if (data.next) setHasMore(true);
      });
  }, [offset]);

  return { list, hasMore };
}
