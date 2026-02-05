import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Services from './components/Services';
import DarkSection from './components/DarkSection';
import Mission from './components/Mission';
import Footer from './components/Footer';
import ImpactPage from './pages/ImpactPage';
import CommunityProgramsPage from './pages/CommunityProgramsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GalleryPage from './pages/GalleryPage';

const Home = () => (
    <>
        <Hero />
        <Services />
        <DarkSection />
        <Mission />
    </>
);

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

const AppContent = () => {
    const location = useLocation();
    const isProgramsPage = location.pathname === '/programs';

    return (
        <div className="min-h-screen bg-white">
            <ScrollToTop />
            <Navbar />
            <div className={isProgramsPage ? "" : "pt-28"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/programs" element={<CommunityProgramsPage />} />
                    <Route path="/impact" element={<ImpactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
            </div>
            {!isProgramsPage && <Footer />}
        </div>
    );
};

export default App;
