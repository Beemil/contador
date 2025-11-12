import React from 'react';
import { Toaster } from 'react-hot-toast';
import useContador from '../hooks/useContador';

const Contador: React.FC = () => {
  const {
    contador,
    handleIncremento,
    handleDisminuir,
    handleReiniciar,
  } = useContador();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6 sm:p-10 font-sans">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
            fontWeight: 'bold',
          },
          success: {
            style: { background: '#10b981' },
          },
          error: {
            style: { background: '#ef4444' },
          },
        }}
      />
      
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              Contador de Eventos
            </h1>
            <p className="text-gray-600 text-lg">
              Herramienta para llevar registro de conteos
            </p>
          </div>

          {/* Mostrar el contador */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-8 border-2 border-purple-200">
            <p className="text-center text-sm font-semibold text-gray-600 mb-2">
              Contador Actual
            </p>
            <p className="text-center text-7xl font-bold text-purple-600">
              {contador.valor}
            </p>
          </div>

          {/* Botones */}
          <div className="space-y-4">
            {/* Incrementar */}
            <button
              onClick={handleIncremento}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Incrementar (+1)
            </button>

            {/* Decrementar */}
            <button
              onClick={handleDisminuir}
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Disminuir (-1)
            </button>

            {/* Reiniciar */}
            <button
              onClick={handleReiniciar}
              className="w-full py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Reiniciar (0)
            </button>
          </div>

          {/* Info adicional */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              💡 Tip: Usa los botones para llevar el conteo de tus eventos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;