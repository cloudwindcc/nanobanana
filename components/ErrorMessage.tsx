
import React from 'react';

interface ErrorMessageProps {
  message: string;
  type?: 'error' | 'warning' | 'info';
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, type = 'error', onRetry }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-900/50 border-yellow-700 text-yellow-300';
      case 'info':
        return 'bg-blue-900/50 border-blue-700 text-blue-300';
      default:
        return 'bg-red-900/50 border-red-700 text-red-300';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'warning':
        return '温馨提示';
      case 'info':
        return '提示信息';
      default:
        return '发生错误';
    }
  };

  const getSuggestions = (msg: string) => {
    if (msg.includes('upload')) {
      return '请确保上传的图片格式正确（JPEG、PNG等）且大小合适';
    }
    if (msg.includes('select')) {
      return '请先选择一个图片效果再尝试生成';
    }
    if (msg.includes('prompt')) {
      return '请输入具体的描述文字来指导AI生成';
    }
    if (msg.includes('network') || msg.includes('failed')) {
      return '网络连接不稳定，请检查网络后重试';
    }
    return '请稍后重试或尝试其他图片';
  };

  return (
    <div className={`w-full max-w-lg p-4 border rounded-lg text-center ${getStyles()}`} role="alert">
      <div className="flex items-center justify-center mb-2">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="font-bold">{getTitle()}</p>
      </div>
      <p className="text-sm mb-3">{message}</p>
      <p className="text-xs opacity-80 mb-3">{getSuggestions(message)}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors"
        >
          重试
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;