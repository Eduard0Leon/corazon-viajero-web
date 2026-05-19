import React from 'react';
import AdminLayout from '../components/admin/AdminLayout';
import SubBrokersPanel from '../components/admin/SubBrokersPanel';
import CommissionsPanel from '../components/admin/CommissionsPanel';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Administración</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sub-Brokers Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <SubBrokersPanel />
          </div>
          
          {/* Commissions Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <CommissionsPanel />
          </div>
        </div>
        
        {/* Additional Admin Sections (Placeholder) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Otras Secciones Administrativas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Gestión de Contenido</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Administra el contenido del blog, páginas de servicios y testimonios.
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm">
                Ir a Contenido
              </button>
            </div>
            
            {/* Placeholder Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Analíticas del Sitio</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Visualiza estadísticas de visitas, comportamiento de usuarios y rendimiento del sitio.
              </p>
              <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 text-sm">
                Ver Analíticas
              </button>
            </div>
            
            {/* Placeholder Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Configuración General</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Ajusta la configuración del sitio, integraciones y opciones de personalización.
              </p>
              <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300 text-sm">
                Ir a Configuración
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

