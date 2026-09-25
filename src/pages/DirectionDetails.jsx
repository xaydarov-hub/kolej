import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageFrame from '../components/PageFrame';
import Button from '../components/Button/Button';
import { DIRECTIONS_DATA } from '../data/constants';
import '../styles/site.css';
export default function DirectionDetails(){const {id}=useParams();const item=DIRECTIONS_DATA.find((direction)=>direction.id===id)||DIRECTIONS_DATA[0];return <PageFrame eyebrow="Ta’lim yo‘nalishi" title={item.name} intro={item.description}><div className="detail-layout"><div className="detail-main"><h2>Qabul ma’lumotlari</h2><p>{item.description}</p><ul className="check-list"><li><CheckCircle2 size={18}/>O‘qish muddati: {item.duration}</li><li><CheckCircle2 size={18}/>Ta’lim shakli: {item.qualification}</li><li><CheckCircle2 size={18}/>Qo‘qon shahar 2-son texnikumi, 2026-2027 o‘quv yili qabuli</li></ul><Button href="/admission">Ariza topshirish</Button></div><aside className="detail-aside"><span>Davomiyligi</span><strong>{item.duration}</strong><span>Ta’lim shakli</span><strong>{item.qualification}</strong><Link to="/directions"><ArrowLeft size={16}/> Barcha yo‘nalishlar</Link></aside></div></PageFrame>}
