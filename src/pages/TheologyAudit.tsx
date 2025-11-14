import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CORE_THEOLOGY, 
  DISCIPLESHIP_PRACTICES, 
  CHRISTIAN_VIRTUES, 
  CULTURAL_TOPICS, 
  CRITICAL_EXPERIENCES,
  SIN_CATEGORIES
} from '../data/theologyAudit';

type AuditCategory = 'theology' | 'practices' | 'virtues' | 'cultural' | 'experiences' | 'sins' | 'overview';

export default function TheologyAudit() {
  const [activeCategory, setActiveCategory] = useState<AuditCategory>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock coverage data - in real app, this would be calculated from actual sermons
  const getCoverage = () => {
    // Simulate coverage based on fake archive
    const coverage = Math.floor(Math.random() * 100);
    return {
      count: Math.floor(coverage / 10),
      percentage: coverage,
      lastPreached: '2023-11-15'
    };
  };

  const categories = [
    { id: 'overview' as AuditCategory, name: 'Overview', icon: '📊' },
    { id: 'theology' as AuditCategory, name: 'Core Theology', icon: '✝️' },
    { id: 'practices' as AuditCategory, name: 'Discipleship Practices', icon: '📖' },
    { id: 'virtues' as AuditCategory, name: 'Christian Virtues', icon: '💎' },
    { id: 'cultural' as AuditCategory, name: 'Cultural Topics', icon: '🌍' },
    { id: 'experiences' as AuditCategory, name: 'Critical Experiences', icon: '🔥' },
    { id: 'sins' as AuditCategory, name: 'Sins to Address', icon: '⚠️' },
  ];

  const getCoverageColor = (percentage: number) => {
    if (percentage >= 70) return 'bg-green-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getCoverageLabel = (percentage: number) => {
    if (percentage >= 70) return 'Well Covered';
    if (percentage >= 40) return 'Moderate Coverage';
    return 'Needs Attention';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-christian-blue-600 hover:text-christian-blue-700 mb-4"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Theology & Discipleship Audit
          </h1>
          <p className="text-gray-600">
            Comprehensive review of teaching coverage across core categories
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search topics, practices, virtues, or sins..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Tabs */}
        <div className="mb-8 border-b border-gray-200 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'border-b-2 border-christian-blue-600 text-christian-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          {activeCategory === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Theology</h3>
                  <div className="space-y-3">
                    {Object.values(CORE_THEOLOGY).slice(0, 3).map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{category.name}</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                          {Math.floor(Math.random() * 5) + 2} topics
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Discipleship Practices</h3>
                  <div className="space-y-3">
                    {DISCIPLESHIP_PRACTICES.slice(0, 3).map((practice) => {
                      const coverage = getCoverage();
                      return (
                        <div key={practice.id} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{practice.name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${getCoverageColor(coverage.percentage)} text-white`}>
                            {coverage.count}x
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage Summary</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Well Covered</span>
                      <span className="text-sm font-semibold text-green-600">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Moderate</span>
                      <span className="text-sm font-semibold text-yellow-600">38%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Needs Attention</span>
                      <span className="text-sm font-semibold text-red-600">20%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Areas Needing Attention</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Spiritual Gifts - Only mentioned 1 time in last 12 months</li>
                  <li className="text-gray-700">• Church Discipline - Not addressed in recent sermons</li>
                  <li className="text-gray-700">• Biblical Sexuality - Limited coverage of God's design</li>
                  <li className="text-gray-700">• Scripture Meditation - Practice not taught recently</li>
                  <li className="text-gray-700">• Hospitality - Virtue needs more emphasis</li>
                </ul>
              </div>
            </div>
          )}

          {activeCategory === 'theology' && (
            <div className="space-y-6">
              {Object.values(CORE_THEOLOGY).map((category) => (
                <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => {
                      const coverage = getCoverage();
                      const matchesSearch = searchTerm === '' || item.toLowerCase().includes(searchTerm.toLowerCase());
                      if (!matchesSearch) return null;
                      
                      return (
                        <div key={idx} className="border-l-4 border-christian-blue-500 pl-4 py-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-800">{item}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-1 rounded text-white ${getCoverageColor(coverage.percentage)}`}>
                                {getCoverageLabel(coverage.percentage)}
                              </span>
                              <span className="text-xs text-gray-500">{coverage.count}x</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getCoverageColor(coverage.percentage)}`}
                              style={{ width: `${coverage.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCategory === 'practices' && (
            <div className="space-y-4">
              {DISCIPLESHIP_PRACTICES.map((practice) => {
                const coverage = getCoverage();
                const matchesSearch = searchTerm === '' || 
                  practice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  practice.description.toLowerCase().includes(searchTerm.toLowerCase());
                if (!matchesSearch) return null;

                return (
                  <div key={practice.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{practice.name}</h3>
                        <p className="text-sm text-gray-600">{practice.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className={`text-xs px-3 py-1 rounded text-white mb-1 ${getCoverageColor(coverage.percentage)}`}>
                          {getCoverageLabel(coverage.percentage)}
                        </div>
                        <div className="text-xs text-gray-500">{coverage.count} times</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${getCoverageColor(coverage.percentage)}`}
                        style={{ width: `${coverage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeCategory === 'virtues' && (
            <div className="space-y-6">
              {['Heart', 'Worship', 'Relational', 'Strength', 'Wisdom', 'Missional'].map((category) => {
                const virtues = CHRISTIAN_VIRTUES.filter(v => v.category === category);
                const matchesCategory = virtues.some(v => 
                  searchTerm === '' || 
                  v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  v.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
                if (!matchesCategory) return null;

                return (
                  <div key={category} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {category} Virtues
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {virtues.map((virtue) => {
                        const coverage = getCoverage();
                        const matchesSearch = searchTerm === '' || 
                          virtue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          virtue.description.toLowerCase().includes(searchTerm.toLowerCase());
                        if (!matchesSearch) return null;

                        return (
                          <div key={virtue.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{virtue.name}</h4>
                              <span className={`text-xs px-2 py-1 rounded text-white ${getCoverageColor(coverage.percentage)}`}>
                                {coverage.count}x
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{virtue.description}</p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full ${getCoverageColor(coverage.percentage)}`}
                                style={{ width: `${coverage.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeCategory === 'cultural' && (
            <div className="space-y-4">
              {CULTURAL_TOPICS.map((topic) => {
                const coverage = getCoverage();
                const matchesSearch = searchTerm === '' || 
                  topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  topic.description.toLowerCase().includes(searchTerm.toLowerCase());
                if (!matchesSearch) return null;

                return (
                  <div key={topic.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.name}</h3>
                        <p className="text-sm text-gray-600">{topic.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className={`text-xs px-3 py-1 rounded text-white mb-1 ${getCoverageColor(coverage.percentage)}`}>
                          {getCoverageLabel(coverage.percentage)}
                        </div>
                        <div className="text-xs text-gray-500">{coverage.count} times</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${getCoverageColor(coverage.percentage)}`}
                        style={{ width: `${coverage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeCategory === 'experiences' && (
            <div className="space-y-4">
              {CRITICAL_EXPERIENCES.map((experience) => {
                const coverage = getCoverage();
                const matchesSearch = searchTerm === '' || 
                  experience.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  experience.description.toLowerCase().includes(searchTerm.toLowerCase());
                if (!matchesSearch) return null;

                return (
                  <div key={experience.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{experience.name}</h3>
                        <p className="text-sm text-gray-600">{experience.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className={`text-xs px-3 py-1 rounded text-white mb-1 ${getCoverageColor(coverage.percentage)}`}>
                          {getCoverageLabel(coverage.percentage)}
                        </div>
                        <div className="text-xs text-gray-500">{coverage.count} times</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${getCoverageColor(coverage.percentage)}`}
                        style={{ width: `${coverage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeCategory === 'sins' && (
            <div className="space-y-6">
              {SIN_CATEGORIES.map((category) => (
                <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.sins.map((sin) => {
                      const coverage = getCoverage();
                      const matchesSearch = searchTerm === '' || sin.toLowerCase().includes(searchTerm.toLowerCase());
                      if (!matchesSearch) return null;

                      return (
                        <div key={sin} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-800">{sin}</span>
                            <span className={`text-xs px-2 py-1 rounded text-white ${getCoverageColor(coverage.percentage)}`}>
                              {coverage.count}x
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${getCoverageColor(coverage.percentage)}`}
                              style={{ width: `${coverage.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

