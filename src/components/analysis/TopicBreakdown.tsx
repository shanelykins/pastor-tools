import { TopicBreakdown as TopicBreakdownType } from '../../types';

interface TopicBreakdownProps {
  topics: TopicBreakdownType[];
}

export default function TopicBreakdown({ topics }: TopicBreakdownProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Topic Breakdown</h2>
      
      <div className="space-y-4">
        {topics.map((item, idx) => (
          <div key={idx} className="border-l-4 border-christian-blue-500 pl-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{item.topic}</h3>
              <span className="text-sm font-medium text-christian-blue-600">
                {item.strength}% strength
              </span>
            </div>
            
            {/* Strength bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-christian-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${item.strength}%` }}
              ></div>
            </div>
            
            <div className="text-sm text-gray-600">
              <span className="font-medium">Related Scripture: </span>
              {item.relatedScripture.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

