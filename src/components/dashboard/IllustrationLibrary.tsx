import { useState } from 'react';
import { FAKE_ARCHIVE } from '../../data/fakeArchive';

export default function IllustrationLibrary() {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allIllustrations = FAKE_ARCHIVE.flatMap(sermon => 
    sermon.illustrations.map(ill => ({
      ...ill,
      sermonTitle: sermon.title,
      sermonDate: sermon.date
    }))
  );

  const types = ['all', ...Array.from(new Set(allIllustrations.map(i => i.type)))];

  const filtered = allIllustrations.filter(ill => {
    const matchesSearch = ill.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ill.sermonTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || ill.type === filterType;
    return matchesSearch && matchesType;
  });

  const typeCounts = types.reduce((acc, type) => {
    if (type === 'all') {
      acc[type] = allIllustrations.length;
    } else {
      acc[type] = allIllustrations.filter(i => i.type === type).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Illustration Library (Archive-Wide)</h2>
        
        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Illustrations
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword, topic, or sermon title..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Type
            </label>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterType === type
                      ? 'bg-christian-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} ({typeCounts[type]})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Found {filtered.length} illustration{filtered.length !== 1 ? 's' : ''}
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No illustrations found. Try adjusting your search or filters.
            </div>
          ) : (
            filtered.map((ill, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-christian-blue-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-800 mb-2">{ill.text}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-christian-blue-100 text-christian-blue-800 rounded text-xs font-medium">
                        {ill.type}
                      </span>
                      <span>{ill.sermonTitle}</span>
                      <span>•</span>
                      <span>{new Date(ill.sermonDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

