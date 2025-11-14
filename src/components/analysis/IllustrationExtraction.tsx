import { Illustration } from '../../types';

interface IllustrationExtractionProps {
  illustrations: Illustration[];
}

export default function IllustrationExtraction({ illustrations }: IllustrationExtractionProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      childhood: 'bg-blue-100 text-blue-800',
      biblical: 'bg-purple-100 text-purple-800',
      metaphor: 'bg-green-100 text-green-800',
      sports: 'bg-orange-100 text-orange-800',
      family: 'bg-pink-100 text-pink-800',
      cultural: 'bg-yellow-100 text-yellow-800',
      story: 'bg-indigo-100 text-indigo-800',
      nature: 'bg-teal-100 text-teal-800',
      work: 'bg-gray-100 text-gray-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Illustration Extraction</h2>
      
      <div className="space-y-4">
        {illustrations.map((illustration, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-4 hover:border-christian-blue-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="text-gray-800 mb-2">{illustration.text}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(illustration.type)}`}>
                    {illustration.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    @ {formatTime(illustration.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

