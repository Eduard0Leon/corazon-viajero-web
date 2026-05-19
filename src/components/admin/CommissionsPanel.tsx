import React, { useState } from 'react';

interface CommissionData {
  id: string;
  subBrokerId: string;
  subBrokerName: string;
  productType: 'certificado' | 'descuento' | 'visa' | 'servicio';
  saleAmount: number;
  commissionAmount: number;
  status: 'pending' | 'paid' | 'processing';
  saleDate: string;
  paymentDate: string | null;
}

const CommissionsPanel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [productFilter, setProductFilter] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  
  // Mock data for commissions
  const commissions: CommissionData[] = [
    {
      id: 'COM001',
      subBrokerId: 'SB001',
      subBrokerName: 'Roberto Gómez',
      productType: 'certificado',
      saleAmount: 12500,
      commissionAmount: 1187.50,
      status: 'paid',
      saleDate: '2025-05-10',
      paymentDate: '2025-05-25'
    },
    {
      id: 'COM002',
      subBrokerId: 'SB001',
      subBrokerName: 'Roberto Gómez',
      productType: 'visa',
      saleAmount: 3800,
      commissionAmount: 361,
      status: 'pending',
      saleDate: '2025-06-05',
      paymentDate: null
    },
    {
      id: 'COM003',
      subBrokerId: 'SB002',
      subBrokerName: 'Laura Sánchez',
      productType: 'descuento',
      saleAmount: 5200,
      commissionAmount: 494,
      status: 'processing',
      saleDate: '2025-06-02',
      paymentDate: null
    },
    {
      id: 'COM004',
      subBrokerId: 'SB002',
      subBrokerName: 'Laura Sánchez',
      productType: 'servicio',
      saleAmount: 8900,
      commissionAmount: 845.50,
      status: 'pending',
      saleDate: '2025-06-08',
      paymentDate: null
    },
    {
      id: 'COM005',
      subBrokerId: 'SB005',
      subBrokerName: 'Miguel Torres',
      productType: 'certificado',
      saleAmount: 15000,
      commissionAmount: 1425,
      status: 'paid',
      saleDate: '2025-05-20',
      paymentDate: '2025-06-05'
    }
  ];

  // Filter commissions based on search term, status, product type, and date range
  const filteredCommissions = commissions.filter(commission => {
    const matchesSearch = 
      commission.subBrokerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.subBrokerId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || commission.status === statusFilter;
    const matchesProduct = productFilter === 'all' || commission.productType === productFilter;
    
    let matchesDate = true;
    if (dateRange.start && dateRange.end) {
      const saleDate = new Date(commission.saleDate);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      matchesDate = saleDate >= startDate && saleDate <= endDate;
    }
    
    return matchesSearch && matchesStatus && matchesProduct && matchesDate;
  });

  // Status badge component
  const StatusBadge: React.FC<{ status: 'pending' | 'paid' | 'processing' }> = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    let statusText = '';

    switch (status) {
      case 'paid':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        statusText = 'Pagada';
        break;
      case 'processing':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        statusText = 'En proceso';
        break;
      case 'pending':
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-800';
        statusText = 'Pendiente';
        break;
    }

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {statusText}
      </span>
    );
  };

  // Product type badge component
  const ProductBadge: React.FC<{ type: 'certificado' | 'descuento' | 'visa' | 'servicio' }> = ({ type }) => {
    let bgColor = '';
    let textColor = '';
    let typeText = '';

    switch (type) {
      case 'certificado':
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
        typeText = 'Certificado';
        break;
      case 'descuento':
        bgColor = 'bg-cyan-100';
        textColor = 'text-cyan-800';
        typeText = 'Descuento';
        break;
      case 'visa':
        bgColor = 'bg-indigo-100';
        textColor = 'text-indigo-800';
        typeText = 'Visa';
        break;
      case 'servicio':
        bgColor = 'bg-purple-100';
        textColor = 'text-purple-800';
        typeText = 'Servicio';
        break;
    }

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {typeText}
      </span>
    );
  };

  // Calculate total commissions
  const totalCommissions = filteredCommissions.reduce((sum, commission) => sum + commission.commissionAmount, 0);
  const pendingCommissions = filteredCommissions
    .filter(commission => commission.status === 'pending')
    .reduce((sum, commission) => sum + commission.commissionAmount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Comisiones</h3>
              <p className="text-2xl font-semibold text-gray-800">${totalCommissions.toLocaleString('es-MX')}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Comisiones Pendientes</h3>
              <p className="text-2xl font-semibold text-gray-800">${pendingCommissions.toLocaleString('es-MX')}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Sub-Brokers Activos</h3>
              <p className="text-2xl font-semibold text-gray-800">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Comisiones</h2>
          <div className="flex space-x-2">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Exportar
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Procesar Pagos
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Todos los estados</option>
              <option value="pending">Pendientes</option>
              <option value="processing">En proceso</option>
              <option value="paid">Pagadas</option>
            </select>
          </div>
          <div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
            >
              <option value="all">Todos los productos</option>
              <option value="certificado">Certificados</option>
              <option value="descuento">Descuentos</option>
              <option value="visa">Visas</option>
              <option value="servicio">Servicios</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>

        {/* Commissions table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sub-Broker
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monto de Venta
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comisión
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Venta
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Pago
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCommissions.map((commission) => (
                <tr key={commission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {commission.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{commission.subBrokerName}</div>
                      <div className="text-xs text-gray-500 ml-1">({commission.subBrokerId})</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ProductBadge type={commission.productType} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${commission.saleAmount.toLocaleString('es-MX')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${commission.commissionAmount.toLocaleString('es-MX')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={commission.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(commission.saleDate).toLocaleDateString('es-MX')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {commission.paymentDate ? new Date(commission.paymentDate).toLocaleDateString('es-MX') : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      {commission.status === 'pending' && (
                        <button className="text-green-600 hover:text-green-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium">{filteredCommissions.length}</span> de <span className="font-medium">{commissions.length}</span> comisiones
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
              Anterior
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-blue-50 text-blue-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionsPanel;
