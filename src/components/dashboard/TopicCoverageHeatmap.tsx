import { AGGREGATE_INSIGHTS } from '../../data/fakeArchive';

export default function TopicCoverageHeatmap() {
  const topics = Object.entries(AGGREGATE_INSIGHTS.topicFrequency)
    .sort((a, b) => b[1] - a[1]);

  const maxFrequency = Math.max(...topics.map(t => t[1]));

  const getIntensity = (frequency: number) => {
    const ratio = frequency / maxFrequency;
    if (ratio > 0.8) return 'bg-christian-blue-700';
    if (ratio > 0.6) return 'bg-christian-blue-600';
    if (ratio > 0.4) return 'bg-christian-blue-500';
    if (ratio > 0.2) return 'bg-christian-blue-400';
    return 'bg-christian-blue-300';
  };

  // Generate monthly data (last 12 months)
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (11 - i));
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  });

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Topic Coverage Heatmap</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Frequency</h3>
          <div className="space-y-2">
            {topics.map(([topic, frequency]) => (
              <div key={topic} className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-700">{topic}</div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div
                      className={`${getIntensity(frequency)} h-6 rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${(frequency / maxFrequency) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{frequency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage Over Time (Last 12 Months)</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Pattern:</span> Heavy on grace and discipleship, 
              lower coverage of spiritual disciplines and eschatology
            </div>
            <div className="grid grid-cols-12 gap-2">
              {months.map((month, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-gray-600 mb-1">{month.split(' ')[0]}</div>
                  <div className="h-8 bg-christian-blue-400 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

