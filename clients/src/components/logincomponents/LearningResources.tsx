import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const LearningResources: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Learning Resources</h2>
        <BookOpen className="h-6 w-6 text-purple-600" />
      </div>
      <ul className="space-y-3">
        {[
          { title: 'Guide to Climate-Resilient Crops', color: 'green' },
          { title: 'Water Management Best Practices', color: 'blue' },
          { title: 'Using AI in Agriculture', color: 'purple' }
        ].map((resource, index) => (
          <li key={index}>
            <a
              href="#"
              className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700 group-hover:text-gray-900">
                {resource.title}
              </span>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningResources;