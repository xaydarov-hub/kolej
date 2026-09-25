import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO, SITE_NAME } from '../../data/constants';
import { navigationLinks } from '../../data/navigation';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  return <footer className="footer"><div className="container"><div className="footer__grid"><div className="footer__brand"><div className="footer__mark">2</div><h2>{SITE_NAME}</h2><p>Zamonaviy ta'lim, amaliy bilim va kelajak uchun mustahkam poydevor.</p></div><div><h3>Texnikum</h3><ul>{navigationLinks.slice(1, 4).map((item) => <li key={item.id}><Link to={item.path}>{t(item.labelKey)}</Link></li>)}</ul></div><div><h3>Qabul</h3><ul><li><Link to="/admission">Qabul haqida</Link></li><li><Link to="/directions">Ta'lim yo'nalishlari</Link></li><li><Link to="/contact">Aloqa</Link></li></ul></div><div><h3>Aloqa</h3><ul><li><a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a></li><li><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li><li>{CONTACT_INFO.address}</li></ul><div className="footer__social"><a href={CONTACT_INFO.telegram} aria-label="Telegram"><Send size={17} /></a><a href={CONTACT_INFO.instagram} aria-label="Instagram"><Camera size={17} /></a><Link to="/contact" aria-label="Aloqa"><ArrowUpRight size={17} /></Link></div></div></div><div className="footer__bottom"><span>© 2026 {SITE_NAME}</span><span>Barcha huquqlar himoyalangan.</span></div></div></footer>;
}
