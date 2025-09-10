import React from 'react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-gray-500 mx-2">/</span>
          )}
          <button
            onClick={item.onClick}
            disabled={!item.onClick || item.active}
            className={`transition-colors duration-200 ${
              item.active
                ? 'text-orange-500 font-semibold cursor-default'
                : 'text-gray-400 hover:text-gray-200 cursor-pointer'
            } ${!item.onClick ? 'cursor-default' : ''}`}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;