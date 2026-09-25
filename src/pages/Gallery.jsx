import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageFrame from '../components/PageFrame';
import '../styles/site.css';
import { useGallery } from '../data/gallery';

export default function Gallery(){
	const [active, setActive] = useState(null);
	const images = useGallery();

	return <PageFrame eyebrow="Galereya" title="Texnikum hayotidan" intro="Bizning ta’lim muhitimiz, tadbirlarimiz va kundalik lahzalarimiz.">
		<div className="gallery-grid">
			{images.map((image, index) => <button className="gallery-tile" key={image.id} onClick={() => setActive(index)}>
				<img src={image.url} alt={image.title} loading="lazy" />
				<span>{image.title}</span>
			</button>)}
		</div>
		{active !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
			<button className="lightbox__close" onClick={() => setActive(null)} aria-label="Yopish"><X /></button>
			<button className="lightbox__prev" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Oldingi"><ChevronLeft /></button>
			<img src={images[active].url} alt={images[active].title} onClick={(event) => event.stopPropagation()} />
			<button className="lightbox__next" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Keyingi"><ChevronRight /></button>
		</div>}
	</PageFrame>;
}
