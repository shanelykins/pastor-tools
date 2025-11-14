import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscussionGuideGenerator from '../components/generators/DiscussionGuideGenerator';
import DevotionalGenerator from '../components/generators/DevotionalGenerator';
import SocialPostGenerator from '../components/generators/SocialPostGenerator';
import SeriesOutlineGenerator from '../components/generators/SeriesOutlineGenerator';
import IllustrationFinder from '../components/generators/IllustrationFinder';

type GeneratorType = 'discussion' | 'devotional' | 'social' | 'series' | 'illustration';

export default function StructuredGenerators() {
  const [activeGenerator, setActiveGenerator] = useState<GeneratorType>('discussion');
  const navigate = useNavigate();

  const generators = [
    { id: 'discussion' as GeneratorType, name: 'Discussion Guide', icon: '💬' },
    { id: 'devotional' as GeneratorType, name: 'Devotional', icon: '📖' },
    { id: 'social' as GeneratorType, name: 'Social Post', icon: '📱' },
    { id: 'series' as GeneratorType, name: 'Series Outline', icon: '📋' },
    { id: 'illustration' as GeneratorType, name: 'Illustration Finder', icon: '🔍' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-christian-blue-600 hover:text-christian-blue-700"
            >
              ← Home
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-christian-blue-600 hover:text-christian-blue-700"
            >
              Dashboard
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => navigate('/analysis')}
              className="text-christian-blue-600 hover:text-christian-blue-700"
            >
              Analysis
            </button>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Structured Generators
          </h1>
          <p className="text-gray-600">
            Generate materials based on your sermon analysis
          </p>
        </div>

        {/* Generator Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {generators.map((gen) => (
              <button
                key={gen.id}
                onClick={() => setActiveGenerator(gen.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeGenerator === gen.id
                    ? 'border-b-2 border-christian-blue-600 text-christian-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{gen.icon}</span>
                {gen.name}
              </button>
            ))}
          </div>
        </div>

        {/* Generator Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          {activeGenerator === 'discussion' && <DiscussionGuideGenerator />}
          {activeGenerator === 'devotional' && <DevotionalGenerator />}
          {activeGenerator === 'social' && <SocialPostGenerator />}
          {activeGenerator === 'series' && <SeriesOutlineGenerator />}
          {activeGenerator === 'illustration' && <IllustrationFinder />}
        </div>
      </div>
    </div>
  );
}

