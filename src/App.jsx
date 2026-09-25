import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const GalleryPreview = lazy(() => import("./components/GalleryPreview"));
const About = lazy(() => import("./pages/About"));
const Directions = lazy(() => import("./pages/Directions"));
const DirectionDetails = lazy(() => import("./pages/DirectionDetails"));
const Students = lazy(() => import("./pages/Students"));
const News = lazy(() => import("./pages/News"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Admission = lazy(() => import("./pages/Admission"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminNews = lazy(() => import("./pages/admin/AdminNews"));
const AdminDirections = lazy(() => import("./pages/admin/AdminDirections"));
const AdminGallery = lazy(() => import("./pages/admin/AdminGallery"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader fullScreen />}>
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
    </Suspense>
  );
}

export default AppRoutes;
