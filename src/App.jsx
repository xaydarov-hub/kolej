import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import GalleryPreview from "./components/GalleryPreview";
import About from "./pages/About";
import Directions from "./pages/Directions";
import DirectionDetails from "./pages/DirectionDetails";
import Students from "./pages/Students";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNews from "./pages/admin/AdminNews";
import AdminDirections from "./pages/admin/AdminDirections";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "./layouts/AdminLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<><Home /><GalleryPreview /></>} />
        <Route path="/about" element={<About />} />

        <Route path="/directions" element={<Directions />} />
        <Route
          path="/directions/:id"
          element={<DirectionDetails />}
        />

        <Route path="/students" element={<Students />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route
          path="/admin/directions"
          element={<AdminDirections />}
        />
        <Route path="/admin/gallery" element={<AdminGallery />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;