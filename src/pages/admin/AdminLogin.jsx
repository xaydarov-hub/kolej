import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import { loginWithEmail } from '../../firebase/auth';
import '../../styles/site.css';
export default function AdminLogin(){const {user}=useAuth();const navigate=useNavigate();const [error,setError]=useState('');const [loading,setLoading]=useState(false);if(user)return <Navigate to="/admin" replace/>;const submit=async(e)=>{e.preventDefault();setLoading(true);setError('');const r=await loginWithEmail(e.currentTarget.email.value,e.currentTarget.password.value);setLoading(false);if(r.error)setError('Email yoki parol noto‘g‘ri.');else navigate('/admin');};return <div className="admin-login"><form className="form-card" onSubmit={submit}><div className="admin-login__mark"><LockKeyhole/></div><span className="eyebrow">Boshqaruv tizimi</span><h1>Admin panel</h1><p>Texnikum kontentini boshqarish uchun kiring.</p><label>Email<input name="email" type="email" required /></label><label>Parol<input name="password" type="password" required /></label>{error&&<p className="form-error">{error}</p>}<Button type="submit" loading={loading}>Kirish</Button></form></div>}
