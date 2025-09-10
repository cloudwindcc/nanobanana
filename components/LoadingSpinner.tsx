
import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  progress?: number;
  showProgress?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Generating...图片生成中', 
  progress,
  showProgress = false 
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-300 p-6">
      <div className="relative">
        <svg className="animate-spin h-12 w-12 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        
        {showProgress && progress !== undefined && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-orange-500">{Math.round(progress)}%</span>
          </div>
        )}
      </div>
      
      <div className="text-center">
        <p className="text-lg font-medium mb-2">{message}</p>
        <p className="text-sm text-gray-400">请稍等，AI正在努力创作中...</p>
      </div>
      
      {showProgress && progress !== undefined && (
        <div className="w-48 bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      <div className="flex gap-1">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
