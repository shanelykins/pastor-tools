import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AGGREGATE_INSIGHTS } from '../data/fakeArchive';
import NaturalLanguageQuery from '../components/dashboard/NaturalLanguageQuery';
import TopicCoverageHeatmap from '../components/dashboard/TopicCoverageHeatmap';
import ScriptureCoverageMap from '../components/dashboard/ScriptureCoverageMap';
import RepetitionAnalyzer from '../components/dashboard/RepetitionAnalyzer';
import TeachingGapsDetector from '../components/dashboard/TeachingGapsDetector';
import IllustrationLibrary from '../components/dashboard/IllustrationLibrary';
import ArchiveTimeline from '../components/dashboard/ArchiveTimeline';

type DashboardView = 'overview' | 'topics' | 'scripture' | 'repetition' | 'gaps' | 'illustrations' | 'timeline';

export default function TeachingDashboard() {
  const [activeView, setActiveView] = useState<DashboardView>('overview');
  const navigate = useNavigate();

  const views = [
    { id: 'overview' as DashboardView, name: 'Overview', icon: '📊' },
    { id: 'topics' as DashboardView, name: 'Topic Coverage', icon: '🔥' },
    { id: 'scripture' as DashboardView, name: 'Scripture Map', icon: '📖' },
    { id: 'repetition' as DashboardView, name: 'Repetition', icon: '🔄' },
    { id: 'gaps' as DashboardView, name: 'Teaching Gaps', icon: '⚠️' },
    { id: 'illustrations' as DashboardView, name: 'Illustration Library', icon: '🎨' },
    { id: 'timeline' as DashboardView, name: 'Timeline', icon: '📅' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-christian-blue-600 hover:text-christian-blue-700 mb-4"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Teaching Dashboard
          </h1>
          <p className="text-gray-600">
            Insights from {AGGREGATE_INSIGHTS.totalSermons} sermons in your archive
          </p>
        </div>

        {/* Natural Language Query */}
        <div className="mb-8">
          <NaturalLanguageQuery />
        </div>

        {/* Quick Access to Theology Audit */}
        <div className="mb-8">
          <div className="bg-christian-blue-50 border-2 border-christian-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Theology & Discipleship Audit</h3>
                <p className="text-gray-700">
                  Comprehensive review of teaching coverage across core theology, discipleship practices, virtues, and cultural topics
                </p>
              </div>
              <button
                onClick={() => navigate('/audit')}
                className="px-6 py-3 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors"
              >
                View Full Audit →
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeView === view.id
                    ? 'border-b-2 border-christian-blue-600 text-christian-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{view.icon}</span>
                {view.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div>
          {activeView === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Sermons</h3>
                <p className="text-3xl font-bold text-christian-blue-600">{AGGREGATE_INSIGHTS.totalSermons}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Duration</h3>
                <p className="text-3xl font-bold text-christian-blue-600">{Math.floor(AGGREGATE_INSIGHTS.totalDuration / 60)}h {AGGREGATE_INSIGHTS.totalDuration % 60}m</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Topic</h3>
                <p className="text-3xl font-bold text-christian-blue-600">
                  {Object.entries(AGGREGATE_INSIGHTS.topicFrequency).sort((a, b) => b[1] - a[1])[0][0]}
                </p>
              </div>
              <div className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Teaching Patterns</h3>
                <ul className="space-y-2">
                  {AGGREGATE_INSIGHTS.patterns.map((pattern, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-christian-blue-600 mr-2">•</span>
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {activeView === 'topics' && <TopicCoverageHeatmap />}
          {activeView === 'scripture' && <ScriptureCoverageMap />}
          {activeView === 'repetition' && <RepetitionAnalyzer />}
          {activeView === 'gaps' && <TeachingGapsDetector />}
          {activeView === 'illustrations' && <IllustrationLibrary />}
          {activeView === 'timeline' && <ArchiveTimeline />}
        </div>
      </div>
    </div>
  );
}

