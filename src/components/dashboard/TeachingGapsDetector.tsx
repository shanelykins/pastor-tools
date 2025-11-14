import { AGGREGATE_INSIGHTS } from '../../data/fakeArchive';

export default function TeachingGapsDetector() {
  const gaps = AGGREGATE_INSIGHTS.gaps;

  const opportunities = [
    {
      area: 'Spiritual Disciplines',
      description: 'Consider a series on fasting, meditation, and contemplative prayer',
      priority: 'high'
    },
    {
      area: 'Eschatology',
      description: 'Opportunity to teach on end times, resurrection, and eternal life',
      priority: 'medium'
    },
    {
      area: 'Old Testament Prophets',
      description: 'Expand coverage of prophetic books and their relevance today',
      priority: 'medium'
    },
    {
      area: 'Community & Fellowship',
      description: 'More emphasis on the importance of Christian community',
      priority: 'high'
    },
    {
      area: 'Liturgical Calendar',
      description: 'Consider aligning sermons with Advent, Lent, and other seasons',
      priority: 'low'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Gaps Detector</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Identified Gaps</h3>
          <div className="space-y-3">
            {gaps.map((gap, idx) => (
              <div key={idx} className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50 rounded">
                <p className="text-gray-800">{gap}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preaching Opportunities</h3>
          <div className="space-y-4">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{opp.area}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    opp.priority === 'high' ? 'bg-red-100 text-red-800' :
                    opp.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {opp.priority} priority
                  </span>
                </div>
                <p className="text-sm text-gray-600">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-christian-blue-50 rounded-lg border border-christian-blue-200">
          <h4 className="font-semibold text-gray-900 mb-2">Seasonal Patterns</h4>
          <p className="text-sm text-gray-700 mb-2">
            Your archive shows stronger coverage during certain seasons:
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Higher frequency of grace/forgiveness themes in spring</li>
            <li>• More focus on hope and joy during holiday seasons</li>
            <li>• Limited coverage of Advent and Lent themes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

