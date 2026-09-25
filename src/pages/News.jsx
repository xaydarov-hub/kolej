import PageFrame from '../components/PageFrame';
import NewsCard from '../components/NewsCard/NewsCard';
import { getPublishedNews } from '../firebase/firestore';
import { useEffect, useState } from 'react';
import '../styles/site.css';
const fallback=[
	{id:'admission-11',category:'Qabul 2026-2027',title:'11-sinf bitiruvchilari uchun qabul',description:'50610301 - Axborot xavfsizligi (kunduzgi) va 50610401 - Kompyuter injiniring (dual). O‘qish muddati 2 yil, grand asosida.',createdAt:'2026-08-25'},
	{id:'admission-9',category:'Qabul 2026-2027',title:'9-sinf bitiruvchilari uchun qabul',description:'Avtomobillar servisi, tekstil, sartaroshlik, moda va tikuv, grafik dizayn, to‘qimachilik, zargarlik, IT dasturlash va agro-dron operatori yo‘nalishlari. O‘qish muddati 2 yil.',createdAt:'2026-08-25'}
];
export default function News(){const [items,setItems]=useState(fallback);useEffect(()=>{getPublishedNews(12).then((data)=>{if(data.length)setItems(data)});},[]);return <PageFrame eyebrow="Yangiliklar" title="Texnikum hayotidan yangiliklar" intro="Muhim voqealar, e’lonlar va o‘quvchilarimiz yutuqlari."><div className="news-grid">{items.map((item,i)=><NewsCard key={item.id} news={item} index={i}/>)}</div></PageFrame>}
