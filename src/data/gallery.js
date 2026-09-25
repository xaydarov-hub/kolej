import { useEffect, useState } from 'react';
import galleryAssets from 'virtual:gallery-assets';
import { getGallery } from '../firebase/firestore';

const publicImages = galleryAssets
  .map(({ fileName, modifiedAt }) => ({
    id: `public-${fileName}`,
    title: 'Texnikum hayotidan',
    url: `/${encodeURIComponent(fileName)}`,
    createdAt: modifiedAt,
  }))
  .sort((first, second) => second.createdAt - first.createdAt);

const getCreatedAt = (value) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  if (typeof value.toMillis === 'function') return value.toMillis();
  return new Date(value).getTime() || 0;
};

export function useGallery() {
  const [images, setImages] = useState(publicImages);

  useEffect(() => {
    let cancelled = false;

    getGallery().then((items) => {
      if (cancelled || !items.length) return;

      const firestoreImages = items.map((item) => ({
        ...item,
        id: item.id,
        title: item.title || 'Texnikum hayotidan',
        url: item.image,
        createdAt: getCreatedAt(item.createdAt),
      }));

      setImages([...publicImages, ...firestoreImages].sort(
        (first, second) => second.createdAt - first.createdAt
      ));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return images;
}