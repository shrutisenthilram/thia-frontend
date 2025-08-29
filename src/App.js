import React, { useState } from 'react';
import './App.css';

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
    <div className="app">
      {/* Navigation */}
      <div className="nav">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick}>
          <svg viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>

        {/* Info Icon */}
        <div className="info-icon" onClick={handleInfoClick}>
          i
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="center-circle" onClick={handleCenterCircleClick}></div>
        <div className="subtitle">[subtitle text here]</div>
      </div>

      {/* Mic Button */}
      <div className="mic-container">
        <div className="mic-button" onClick={handleMicClick}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H6c0 3.53 2.61 6.43 6 6.92V21h4v-2.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>About This Interface</h2>
            <p>This is a modern voice interface with interactive elements. The lightning bolt logo represents quick actions and energy, while this info button provides helpful details about the interface.</p>
            <p>Click anywhere outside this modal or the close button to dismiss it.</p>
            <button className="close-btn" onClick={closeModal}>Got it!</button>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div className="notification show">
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;