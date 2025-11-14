import { TeachingPattern } from '../../types';

interface TeachingPatternNotesProps {
  patterns: TeachingPattern[];
}

export default function TeachingPatternNotes({ patterns }: TeachingPatternNotesProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Pattern Notes</h2>
      
      <div className="space-y-4">
        {patterns.map((item, idx) => (
          <div key={idx} className="border-l-4 border-christian-blue-500 pl-4 py-2">
            <p className="text-gray-800 mb-2">{item.pattern}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-christian-blue-600 h-2 rounded-full"
                  style={{ width: `${item.frequency}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 font-medium">
                {item.frequency}% match
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

