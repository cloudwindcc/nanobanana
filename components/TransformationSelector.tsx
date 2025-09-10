
import React, { useState } from 'react';
import type { Transformation } from '../types';
import { getTransformationPreview, hasPreview } from '../utils/previewUtils';

interface TransformationSelectorProps {
  transformations: Transformation[];
  onSelect: (transformation: Transformation) => void;
  hasPreviousResult: boolean;
}

const TransformationSelector: React.FC<TransformationSelectorProps> = ({ transformations, onSelect, hasPreviousResult }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-4 md:p-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">Pick effect. 选择图片效果</h2>
      <p className="text-lg text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        {hasPreviousResult 
          ? "Previous result loaded. Select a new one. 请选择新的图片效果"
          : "Select effect and upload image. 选择效果并上传图片"
        }
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {transformations.map((trans, index) => (
          <button
            key={index}
            onClick={() => onSelect(trans)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex flex-col items-center justify-center text-center p-3 aspect-video bg-gray-950/80 backdrop-blur-sm rounded-xl border border-white/20 hover:border-orange-500 transition-all duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-orange-500"
          >
            <span className="text-3xl mb-1 transition-transform duration-200 group-hover:scale-110">{trans.emoji}</span>
            <span className="font-semibold text-sm text-gray-200 leading-tight">{trans.title}</span>
            
            {/* Preview tooltip */}
            {hoveredIndex === index && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-3 bg-gray-900 border border-white/20 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="text-xs text-gray-300 mb-2">{trans.description}</div>
                <div className="text-2xl text-center">{getTransformationPreview(trans)}</div>
                <div className="text-xs text-gray-500 mt-1">预览效果</div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransformationSelector;
