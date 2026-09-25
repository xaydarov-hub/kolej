import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
export default function NotFound(){return <PageFrame eyebrow="404" title="Sahifa topilmadi" intro="Siz izlayotgan sahifa ko‘chirilgan yoki mavjud emas."><Link className="btn btn-primary btn-md" to="/">Bosh sahifaga qaytish</Link></PageFrame>}
