import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import PageFrame from '../components/PageFrame';
import Loader from '../components/Loader/Loader';
import { getNewsById } from '../firebase/firestore';
import '../styles/site.css';

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default function NewsDetails() {
  const { id } = useParams();
  const isEleven = id === 'admission-11';
  const isNine = id === 'admission-9';
  const isStatic = isEleven || isNine;

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(!isStatic);

  useEffect(() => {
    if (isStatic) return;
    let cancelled = false;
    setLoading(true);
    getNewsById(id).then((data) => {
      if (!cancelled) {
        setNews(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [id, isStatic]);

  if (isStatic) {
    return (
      <PageFrame
        eyebrow="Qabul 2026-2027"
        title={isEleven ? '11-sinf bitiruvchilari uchun qabul' : '9-sinf bitiruvchilari uchun qabul'}
        intro="Qo‘qon shahar 2-son texnikumi"
      >
        <article className="article">
          <p><strong>{isEleven ? '11-sinf bitiruvchilari hamda 11-sinf negizida hujjati borlar' : '9-sinf bitiruvchilari'} uchun o‘qish muddati 2 yil.</strong></p>
          {isEleven ? (
            <>
              <p>Grand (davlat hisobidan):</p>
              <p>50610301 - Axborot xavfsizligi, kunduzgi ta’lim shakli.<br />50610401 - Kompyuter injiniring, dual ta’lim shakli.</p>
              <p>Ta’limni yakunlagandan so‘ng oliy ta’limning 2-bosqichida suhbat asosida, imtihonsiz davom ettirish imkoniyati mavjud.</p>
            </>
          ) : (
            <>
              <p>30711605 - Avtomobillar servisi, 30720433 - Tekstil-galantereya buyumlarini to‘quvchisi, 31010202 - Sartarosh, 30720436 - Moda va tikuv ishlab chiqarish texnologiyasi, 30610105 - Grafik va dizayn texnologiyasi, 30720430 - To‘qimachilik jihozlari, 31010802 - Zargar, 30610203 - IT Dasturchi, 30810106 - Agro-dron operatori.</p>
              <p>Dual ta’lim o‘quvchilariga 2026-2027 o‘quv yilidan maxsus platforma orqali stipendiya to‘lash yo‘lga qo‘yiladi.</p>
            </>
          )}
          <p>Batafsil ma’lumot: +99897-960-90-00, +99890-570-92-71, +99899-300-74-76, +99890-151-43-51.</p>
          <p>Manzil: Qo‘qon shahar, Shaldiramoq MFY, Chorbog‘ ko‘chasi, 2a-uy (sobiq Qo‘qon shahar kasb-hunar maktabi).</p>
          <Link className="text-link" to="/news"><ArrowLeft size={16} /> Yangiliklarga qaytish</Link>
        </article>
      </PageFrame>
    );
  }

  if (loading) {
    return (
      <PageFrame eyebrow="Yangilik" title="Yuklanmoqda...">
        <Loader />
      </PageFrame>
    );
  }

  if (!news) {
    return (
      <PageFrame eyebrow="Yangilik" title="Yangilik topilmadi" intro="Siz izlayotgan yangilik o‘chirilgan yoki mavjud emas.">
        <Link className="text-link" to="/news"><ArrowLeft size={16} /> Yangiliklarga qaytish</Link>
      </PageFrame>
    );
  }

  return (
    <PageFrame eyebrow="Yangilik" title={news.title} intro={news.description}>
      <article className="article">
        {news.image && (
          <img src={news.image} alt={news.title} style={{ width: '100%', marginBottom: 24, objectFit: 'cover' }} />
        )}
        <p className="article__meta" style={{ display: 'flex', gap: 18, color: 'var(--text-light)', fontSize: 14, marginBottom: 10 }}>
          {news.category && <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Tag size={14} />{news.category}</span>}
          {news.createdAt && <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={14} />{formatDate(news.createdAt)}</span>}
        </p>
        <p>{news.content || news.description}</p>
        <Link className="text-link" to="/news"><ArrowLeft size={16} /> Yangiliklarga qaytish</Link>
      </article>
    </PageFrame>
  );
}
