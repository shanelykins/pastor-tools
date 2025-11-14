import { FAKE_ARCHIVE } from '../../data/fakeArchive';

export default function ArchiveTimeline() {
  // Group sermons by month
  const sermonsByMonth = FAKE_ARCHIVE.reduce((acc, sermon) => {
    const date = new Date(sermon.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(sermon);
    return acc;
  }, {} as Record<string, typeof FAKE_ARCHIVE>);

  const months = Object.keys(sermonsByMonth).sort();

  const getTopicColor = (topics: string[]) => {
    const primaryTopic = topics[0]?.toLowerCase() || '';
    if (primaryTopic.includes('grace') || primaryTopic.includes('forgiveness')) return 'bg-blue-500';
    if (primaryTopic.includes('faith') || primaryTopic.includes('hope')) return 'bg-green-500';
    if (primaryTopic.includes('love') || primaryTopic.includes('community')) return 'bg-pink-500';
    if (primaryTopic.includes('discipleship') || primaryTopic.includes('follow')) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Archive Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-christian-blue-200"></div>
          
          <div className="space-y-8">
            {months.map((monthKey) => {
              const [year, month] = monthKey.split('-');
              const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              });
              const sermons = sermonsByMonth[monthKey];

              return (
                <div key={monthKey} className="relative pl-16">
                  {/* Month marker */}
                  <div className="absolute left-0 top-2 w-16 h-16 bg-white border-4 border-christian-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-xs font-bold text-christian-blue-600 text-center">
                      {new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{monthName}</h3>
                    <div className="space-y-3">
                      {sermons.map((sermon) => (
                        <div
                          key={sermon.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-christian-blue-300 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{sermon.title}</h4>
                              <p className="text-sm text-gray-600">
                                {new Date(sermon.date).toLocaleDateString('en-US', { 
                                  weekday: 'short', 
                                  day: 'numeric' 
                                })} • {sermon.duration} min
                              </p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${getTopicColor(sermon.topics)}`}></div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {sermon.topics.slice(0, 3).map((topic, topicIdx) => (
                              <span
                                key={topicIdx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                {topic}
                              </span>
                            ))}
                            {sermon.topics.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                +{sermon.topics.length - 3} more
                              </span>
                            )}
                          </div>
                          {sermon.series && (
                            <div className="mt-2">
                              <span className="text-xs text-christian-blue-600 font-medium">
                                Series: {sermon.series}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

