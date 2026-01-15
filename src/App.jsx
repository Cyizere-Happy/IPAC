import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <div className="min-h-screen bg-[#FDFBF7]">
                <ScrollToTop /> {/* Added ScrollToTop component */}
                <Navbar />
                {/* Global padding for fixed navbar */}
                <div className="pt-28"> {/* Added padding wrapper */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} /> {/* Reordered */}
                        <Route path="/programs" element={<CommunityProgramsPage />} /> {/* Reordered */}
                        <Route path="/impact" element={<ImpactPage />} /> {/* Reordered */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<BlogPostPage />} />
                        <Route path="/gallery" element={<GalleryPage />} /> {/* Added Gallery route */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
