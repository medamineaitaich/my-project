import React from 'react';
import { Code2, FileText, ShoppingCart, Shirt, Server, Briefcase } from 'lucide-react';
import Card from '@/components/Card.jsx';

const ICON_MAP = {
  Code2,
  FileText,
  ShoppingCart,
  Shirt,
  Server,
  Briefcase,
};

const ServiceCard = ({ service }) => {
  const IconComponent = ICON_MAP[service.icon] || Briefcase;

  return (
    <Card hover className="h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-medait-light rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-medait-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-medait-dark mb-2">
            {service.name}
          </h3>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{service.description}</p>

      {service.features && (
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-medait-primary mr-2 mt-1">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default ServiceCard;
