import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DarkSection from './components/DarkSection';
import Mission from './components/Mission';
import Footer from './components/Footer';
import ImpactPage from './pages/ImpactPage';
import CommunityProgramsPage from './pages/CommunityProgramsPage';
import AboutPage from './pages/AboutPage';

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
            <div className="min-h-screen bg-[#F4F4F4]">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/impact" element={<ImpactPage />} />
                        <Route path="/programs" element={<CommunityProgramsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
