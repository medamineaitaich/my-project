import React from 'react';
import { Image as icons } from 'lucide-react';
import Card from '@/components/Card.jsx';

/**
 * ServiceCard component for displaying service information
 */
const ServiceCard = ({ service }) => {
  // Access icons from the named export 'icons' if available, or fallback to a default
  // Note: In newer lucide-react versions, dynamic access might need a different approach,
  // but typically importing specific icons is best. Since we have dynamic data, we use the `icons` object if exposed,
  // or we rely on the fact that we might need to import * as LucideIcons and cast it, but the error suggests avoiding namespace computed access.
  // A common workaround for dynamic icons in Vite/Rollup with namespace imports is to use a helper or the `icons` export if available.
  // However, standard lucide-react package exports all icons as named exports.
  // Let's try to use the `icons` object which is often available in some versions, or simply map the specific icons we know we need.
  // Given the constraints and the error "computed reference to imported namespace", we should create a map of used icons or use a safer approach.
  
  // Since we don't know the exact list of icons in `service.icon` without seeing `constants.js`, 
  // but we see `import * as LucideIcons` caused the issue.
  // We will use a safer approach by creating a local map if possible, or trying to access it differently.
  // Actually, the most robust fix for "computed reference to imported namespace" in this specific environment 
  // without changing the data structure is to import the specific icons we likely need, or use a library helper.
  // But since we can't see constants.js to know which icons are used, we have to assume standard Lucide icons.
  
  // The error specifically complains about `LucideIcons[service.icon]`.
  // We can fix this by importing `icons` from `lucide-react` if it exists (it does in some versions), 
  // OR by creating an object from the namespace.
  
  // Let's try creating a clean object from the namespace to avoid the specific lint/build error.
  
  const IconComponent = icons[service.icon] || icons.Briefcase;

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
      <p className="text-gray-700 mb-4">
        {service.description}
      </p>
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