import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadModal from '../components/UploadModal';

export default function Home() {
  const [showUpload, setShowUpload] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative geometric elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-christian-blue-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-christian-blue-100 rounded-full -ml-32 -mb-32 opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl text-center">
          {/* Cross-inspired geometric element */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 border-4 border-christian-blue-500 rotate-45"></div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your sermons hold hidden patterns.
          </h1>
          <h2 className="text-5xl font-bold text-christian-blue-600 mb-6">
            Reveal them.
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Analyze your teaching archive for topic coverage, theology alignment, 
            illustrations, patterns, and more—instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowUpload(true)}
              className="px-8 py-4 bg-christian-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-christian-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Upload a Sermon
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-4 bg-white text-christian-blue-600 border-2 border-christian-blue-600 rounded-lg font-semibold text-lg hover:bg-christian-blue-50 transition-colors"
            >
              View Teaching Dashboard
            </button>
          </div>
        </div>
      </div>
      
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </div>
  );
}

