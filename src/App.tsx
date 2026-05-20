import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
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

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin' || location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-[#e8f6f4]">
      {!isAdminRoute && <Header />}
      <main className="flex-grow bg-[#e8f6f4]">
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
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppFloat />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
