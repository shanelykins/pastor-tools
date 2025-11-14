import { AGGREGATE_INSIGHTS } from '../../data/fakeArchive';

export default function ScriptureCoverageMap() {
  const { scriptureDistribution } = AGGREGATE_INSIGHTS;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Scripture Coverage Map</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Old vs New Testament</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Old Testament</span>
                  <span>{(scriptureDistribution.oldTestament * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className="bg-christian-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${scriptureDistribution.oldTestament * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      {scriptureDistribution.oldTestament * 100}%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>New Testament</span>
                  <span>{(scriptureDistribution.newTestament * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className="bg-christian-blue-400 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${scriptureDistribution.newTestament * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      {scriptureDistribution.newTestament * 100}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution Analysis</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Ratio:</span> {scriptureDistribution.oldTestament.toFixed(2)}:{scriptureDistribution.newTestament.toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Balance:</span> {scriptureDistribution.newTestament > 0.6 ? 'Heavy on New Testament' : 'Well balanced'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Referenced Books</h3>
            <div className="space-y-2">
              {scriptureDistribution.mostReferenced.map((book, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-christian-blue-50 rounded">
                  <span className="text-gray-800">{book}</span>
                  <span className="text-sm text-christian-blue-600 font-medium">
                    {Math.floor(Math.random() * 20) + 15} references
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Under-Referenced Books</h3>
            <div className="space-y-2">
              {scriptureDistribution.leastReferenced.map((book, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="text-gray-800">{book}</span>
                  <span className="text-sm text-yellow-600 font-medium">
                    {Math.floor(Math.random() * 3)} references
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

