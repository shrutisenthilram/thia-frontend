import React from 'react';

const AnimatedCircle = () => {
  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Header with logo */}
      <div className="absolute top-6 left-6">
        <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
        </div>
      </div>

      {/* Info icon */}
      <div className="absolute top-6 right-6">
        <div className="w-8 h-8 border-2 border-orange-400 rounded-full flex items-center justify-center">
          <span className="text-orange-400 text-sm font-bold">i</span>
        </div>
      </div>

      {/* Main animated circle */}
      <div className="relative">
        <div 
          className="w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%,rgb(99, 38, 255),rgb(255, 67, 180))',
            animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Subtitle text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">[subtitle text here!!!]</p>
        </div>
      </div>

      {/* Microphone icon at bottom */}
      <div className="absolute bottom-12">
        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-20px) scale(1.02);
          }
          66% {
            transform: translateY(10px) scale(0.98);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 167, 38, 0.4);
          }
          100% {
            box-shadow: 0 0 0 30px rgba(255, 167, 38, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCircle;
