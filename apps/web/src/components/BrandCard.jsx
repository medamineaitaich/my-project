import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '@/components/Card.jsx';
import Button from '@/components/Button.jsx';

/**
 * BrandCard component for displaying brand information
 */
const BrandCard = ({ brand }) => {
  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-medait-dark mb-2">
          {brand.name}
        </h3>
        <p className="text-sm font-semibold text-medait-primary mb-3">
          {brand.focusArea}
        </p>
        <p className="text-gray-700 mb-4">
          {brand.description}
        </p>
        {brand.services && (
          <ul className="space-y-2 mb-6">
            {brand.services.slice(0, 3).map((service, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-medait-primary mr-2">•</span>
                {service}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 italic">
            Operated by MEDAIT LLC
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(brand.url, '_blank')}
            className="gap-2"
          >
            Visit Site
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BrandCard;