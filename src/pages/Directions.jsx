import PageFrame from '../components/PageFrame';
import DirectionCard from '../components/DirectionCard/DirectionCard';
import { DIRECTIONS_DATA } from '../data/constants';
import '../styles/site.css';
export default function Directions(){return <PageFrame eyebrow="Ta’lim yo‘nalishlari" title="2026-2027 o‘quv yili qabuli" intro="9-sinf va 11-sinf bitiruvchilari uchun rasmiy ta’lim yo‘nalishlari."><div className="filter-row"><span>{DIRECTIONS_DATA.length} ta yo‘nalish</span><span className="filter-pill">Dual va kunduzgi</span><span className="filter-pill">2 yil</span></div><div className="cards-grid">{DIRECTIONS_DATA.map((item,i)=><DirectionCard key={item.id} direction={item} index={i}/>)}</div></PageFrame>}
