import { AGGREGATE_INSIGHTS } from '../../data/fakeArchive';

export default function RepetitionAnalyzer() {
  const topics = Object.entries(AGGREGATE_INSIGHTS.topicFrequency)
    .sort((a, b) => b[1] - a[1]);

  const frequent = topics.slice(0, 5);
  const rare = topics.slice(-5).reverse();

  // Analyze sermon arc patterns
  const arcPatterns = [
    { pattern: 'Tension-Resolution Arc', frequency: 85, description: 'Most sermons follow a problem-solution structure' },
    { pattern: 'Narrative Introduction', frequency: 90, description: 'Personal stories or illustrations typically open sermons' },
    { pattern: 'Application at End', frequency: 88, description: 'Calls to action are placed in the final third' },
    { pattern: 'Scripture → Illustration → Application', frequency: 75, description: 'Common three-part structure' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Repetition Analyzer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Preached Themes</h3>
            <div className="space-y-3">
              {frequent.map(([topic, count]) => (
                <div key={topic} className="border-l-4 border-christian-blue-600 pl-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{topic}</span>
                    <span className="text-sm text-christian-blue-600 font-semibold">{count} times</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-christian-blue-600 h-2 rounded-full"
                      style={{ width: `${(count / Math.max(...topics.map(t => t[1]))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rarely Preached Themes</h3>
            <div className="space-y-3">
              {rare.map(([topic, count]) => (
                <div key={topic} className="border-l-4 border-yellow-400 pl-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{topic}</span>
                    <span className="text-sm text-yellow-600 font-semibold">{count} times</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${(count / Math.max(...topics.map(t => t[1]))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sermon Arc Patterns</h3>
          <div className="space-y-4">
            {arcPatterns.map((arc, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{arc.pattern}</h4>
                  <span className="text-sm text-christian-blue-600 font-medium">{arc.frequency}% match</span>
                </div>
                <p className="text-sm text-gray-600">{arc.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-christian-blue-600 h-2 rounded-full"
                    style={{ width: `${arc.frequency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-christian-blue-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Reused Analogies</h4>
          <p className="text-sm text-gray-700">
            Analysis shows you frequently return to themes of transformation, grace, and the call to follow. 
            Your fishing/leaving nets analogy appears in 8 sermons across the archive.
          </p>
        </div>
      </div>
    </div>
  );
}

