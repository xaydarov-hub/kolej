import { useEffect, useState } from 'react';
import { DIRECTIONS_DATA } from '../data/constants';
import { getDirections } from '../firebase/firestore';

// Merges the official, fixed admission directions with any extra
// directions an admin has added in Firestore (mirrors useGallery's pattern).
export function useDirections() {
  const [directions, setDirections] = useState(DIRECTIONS_DATA);

  useEffect(() => {
    let cancelled = false;

    getDirections().then((items) => {
      if (cancelled || !items.length) return;
      setDirections([...DIRECTIONS_DATA, ...items]);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return directions;
}
