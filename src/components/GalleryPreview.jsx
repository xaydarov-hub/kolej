import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle/SectionTitle';
import GalleryCard from './GalleryCard/GalleryCard';
import { useGallery } from '../data/gallery';

export default function GalleryPreview() {
  const images = useGallery();

  return (
    <section className="section home-gallery">
      <div className="container">
        <SectionTitle eyebrow="Galereya" title="Texnikum hayotidan" description="Eng yangi lahzalar bilan tanishing." />
        <div className="home-gallery__grid">
          {images.slice(0, 6).map((image, index) => (
            <GalleryCard key={image.id} image={image} index={index} />
          ))}
        </div>
        <div className="center-action">
          <Link className="btn btn-outline btn-md" to="/gallery">
            Hammasini ko‘rish <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
