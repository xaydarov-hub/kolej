import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { LayoutDashboard, Newspaper, GraduationCap, Images, Settings, LogOut } from 'lucide-react';
import { adminNavLinks } from '../data/navigation';
import useAuth from '../hooks/useAuth';
import { logout } from '../firebase/auth';
import Loader from '../components/Loader/Loader';
import './AdminLayout.css';

const icons = { LayoutDashboard, Newspaper, GraduationCap, Images, Settings };
export default function AdminLayout() {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (!user) return <Navigate to="/admin/login" replace />;
  return <div className="admin-shell"><aside className="admin-sidebar"><div className="admin-logo"><b>2</b><span>Texnikum<br /><small>Admin panel</small></span></div><nav>{adminNavLinks.map((item) => { const Icon = icons[item.icon]; return <NavLink key={item.id} to={item.path} end={item.path === '/admin'}><Icon size={18} />{item.labelKey.replace('admin.nav.', '')}</NavLink>; })}</nav><button className="admin-logout" onClick={logout}><LogOut size={17} />Chiqish</button></aside><div className="admin-main"><header className="admin-topbar"><span>Boshqaruv markazi</span><span>{user.email}</span></header><section className="admin-content"><Outlet /></section></div></div>;
}
