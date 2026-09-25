import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function MainLayout() {
  return <div className="site-shell"><Header /><main className="page-content"><Outlet /></main><Footer /><ScrollToTop /></div>;
}
