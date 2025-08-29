import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this imports Tailwind

function App() {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const handleLogoClick = () => {
    showNotification('⚡ Quick Actions Activated!');
  };

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCenterCircleClick = () => {
    showNotification('🎯 Main interface activated!');
  };

  const handleMicClick = () => {
    showNotification('🎤 Voice input ready!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col relative font-sans">
      {/* Navigation */}
      <div className="flex justify-between items-center p-5 relative z-10">
        {/* Logo */}
        <div 
          onClick={handleLogoClick}
          className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:shadow-orange-400/30 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95 relative overflow-hidden group"
        >
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-500"></div>
          <img src="/image-2.png" alt="Logo" className="w-8 h-8 z-10" />
        </div>

        {/* Info Icon */}
        <div 
          onClick={handleInfoClick}
          className="w-8 h-8 border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-400 font-bold text-lg cursor-pointer transition-all duration-300 ease-out bg-white/80 backdrop-blur-sm hover:bg-orange-400 hover:text-white hover:rotate-[360deg] hover:scale-110 active:scale-95"
        >
          i
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-10">
        <div 
          onClick={handleCenterCircleClick}
          className="w-50 h-50 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-8 shadow-2xl shadow-orange-400/30 relative cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ 
            width: '200px', 
            height: '200px',
            animation: 'pulse 3s infinite'
          }}
        >
          <div className="absolute -inset-2.5 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full -z-10"></div>
        </div>
        <div className="text-gray-600 text-base mb-10">[subtitle text here]</div>
      </div>

      {/* Mic Button */}
      <div className="flex justify-center pb-10">
        <div 
          onClick={handleMicClick}
          className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-out shadow-lg shadow-orange-400/30 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-orange-400/40 active:-translate-y-0.5 active:scale-105"
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H6c0 3.53 2.61 6.43 6 6.92V21h4v-2.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          style={{ animation: 'fadeIn 0.3s ease' }}
          onClick={closeModal}
        >
          <div 
            className="bg-white p-8 rounded-2xl max-w-md mx-5 shadow-2xl transform"
            style={{ animation: 'slideIn 0.3s ease forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              THIA is -
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Click to dismiss
            </p>
            <button 
              onClick={closeModal}
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-400/30 transition-all duration-300 active:translate-y-0"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div 
          className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-orange-400/30 z-50"
          style={{ animation: 'slideInFromTop 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {notification.message}
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); }
          to { transform: translateY(0); }
        }
        
        @keyframes slideInFromTop {
          from { transform: translateX(-50%) translateY(-100px); }
          to { transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);