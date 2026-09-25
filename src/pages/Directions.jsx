import PageFrame from '../components/PageFrame';
import DirectionCard from '../components/DirectionCard/DirectionCard';
import { useDirections } from '../hooks/useDirections';
import '../styles/site.css';
export default function Directions(){const directions=useDirections();return <PageFrame eyebrow="Ta’lim yo‘nalishlari" title="2026-2027 o‘quv yili qabuli" intro="9-sinf va 11-sinf bitiruvchilari uchun rasmiy ta’lim yo‘nalishlari."><div className="filter-row"><span>{directions.length} ta yo‘nalish</span><span className="filter-pill">Dual va kunduzgi</span><span className="filter-pill">2 yil</span></div><div className="cards-grid">{directions.map((item,i)=><DirectionCard key={item.id} direction={item} index={i}/>)}</div></PageFrame>}
