import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import HomePage from './pages/HomePage';
import CertificadosPage from './pages/CertificadosPage';
import DescuentosPage from './pages/DescuentosPage';
import VisasPage from './pages/VisasPage';
import ServiciosPage from './pages/ServiciosPage';
import SubBrokersPage from './pages/SubBrokersPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificados" element={<CertificadosPage />} />
            <Route path="/descuentos" element={<DescuentosPage />} />
            <Route path="/visas" element={<VisasPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/sub-brokers" element={<SubBrokersPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
