import { useNavigate } from 'react-router-dom';
import { SAMPLE_SERMON_METADATA } from '../data/sampleTranscript';
import TopicBreakdown from '../components/analysis/TopicBreakdown';
import TheologyAlignment from '../components/analysis/TheologyAlignment';
import ScriptureMap from '../components/analysis/ScriptureMap';
import IllustrationExtraction from '../components/analysis/IllustrationExtraction';
import TeachingPatternNotes from '../components/analysis/TeachingPatternNotes';

export default function SermonAnalysis() {
  const navigate = useNavigate();

  // Analysis data based on the actual sermon transcript
  const topicBreakdown = [
    { topic: 'Problem of Evil', strength: 98, relatedScripture: ['Genesis 2-3', 'Habakkuk 1:2-4', 'Job 1-2'] },
    { topic: 'God\'s Goodness', strength: 95, relatedScripture: ['Genesis 2:15-17', 'Romans 8:28'] },
    { topic: 'Suffering & Pain', strength: 92, relatedScripture: ['Habakkuk 1:2-4', 'Romans 8:28'] },
    { topic: 'Sin & Rebellion', strength: 90, relatedScripture: ['Genesis 3:1-7', 'Romans 3:23'] },
    { topic: 'Free Will', strength: 88, relatedScripture: ['Genesis 2:15-17', 'Genesis 3:1-7'] },
    { topic: 'Mystery & Faith', strength: 85, relatedScripture: ['Romans 8:28', 'Isaiah 55:8-9'] },
    { topic: 'Drawing Near to God', strength: 82, relatedScripture: ['James 4:8', 'Hebrews 4:16'] },
    { topic: 'Eschatology', strength: 75, relatedScripture: ['Revelation 21:4', 'Philippians 2:10-11'] },
  ];

  const theologyCards = [
    {
      doctrine: 'Theodicy (Problem of Evil)',
      emphasis: 'high' as const,
      description: 'Central focus: addressing why a good, all-powerful God allows evil and suffering'
    },
    {
      doctrine: 'God\'s Goodness',
      emphasis: 'high' as const,
      description: 'Strongly emphasized that God is all-good and that evil points to His goodness, not against it'
    },
    {
      doctrine: 'God\'s Sovereignty',
      emphasis: 'high' as const,
      description: 'God is all-powerful and in control, yet allows free will and suffering for greater purposes'
    },
    {
      doctrine: 'Sin & Human Responsibility',
      emphasis: 'high' as const,
      description: 'Humanity created sin through rebellion; God is not the author of evil'
    },
    {
      doctrine: 'Free Will',
      emphasis: 'high' as const,
      description: 'God created humans with genuine choice, not as robots, which requires the possibility of evil'
    },
    {
      doctrine: 'Mystery & Trust',
      emphasis: 'medium' as const,
      description: 'Acknowledges we won\'t always understand why, but must trust God\'s sovereignty'
    },
    {
      doctrine: 'Eschatology',
      emphasis: 'medium' as const,
      description: 'Evil is temporary; final victory belongs to God and Christ'
    },
    {
      doctrine: 'Spiritual Disciplines',
      emphasis: 'low' as const,
      description: 'Limited discussion of specific practices like prayer, fasting, or meditation'
    },
  ];

  const scriptureData = {
    references: [
      'Genesis 2:15-17',
      'Genesis 3:1-7',
      'Genesis 3:21',
      'Habakkuk 1:2-4',
      'Romans 8:28',
      'Job 1-2',
      'James 4:8',
      'Isaiah 55:8-9',
      'Revelation 21:4',
      'Philippians 2:10-11'
    ],
    oldTestament: 7,
    newTestament: 3,
    ratio: 2.33,
  };

  const illustrations = [
    {
      text: 'Woman breaking up with boyfriend over children disagreement - "bridge too far"',
      type: 'story',
      timestamp: 180
    },
    {
      text: 'Restaurant menu price point - "if that\'s the price, I\'m not interested"',
      type: 'cultural',
      timestamp: 240
    },
    {
      text: 'Football game an hour and a half away - distance as barrier',
      type: 'sports',
      timestamp: 300
    },
    {
      text: 'Social media unfriending over political differences',
      type: 'cultural',
      timestamp: 360
    },
    {
      text: 'Job requiring 60 hours a week - work-life balance',
      type: 'work',
      timestamp: 420
    },
    {
      text: 'Pastor appreciation paid person - $500 to say "I love you"',
      type: 'metaphor',
      timestamp: 1200
    },
    {
      text: 'Block O at Buckeye games - seeing others\' mistakes but not your own',
      type: 'sports',
      timestamp: 2400
    },
    {
      text: 'Grandma\'s cross-stitching - seeing from wrong side vs. right side',
      type: 'childhood',
      timestamp: 2700
    },
    {
      text: 'Fire on crisp Ohio day - drawing near for warmth',
      type: 'nature',
      timestamp: 3000
    },
    {
      text: 'DVR sports game - knowing the outcome but still feeling tension',
      type: 'sports',
      timestamp: 3600
    },
  ];

  const patterns = [
    {
      pattern: 'You often frame sermons around tension-resolution arcs.',
      frequency: 95
    },
    {
      pattern: 'Your calls to application are typically placed at the end.',
      frequency: 90
    },
    {
      pattern: 'You rely heavily on narrative intros and personal stories.',
      frequency: 98
    },
    {
      pattern: 'You frequently use rhetorical questions to engage listeners.',
      frequency: 92
    },
    {
      pattern: 'You use multiple illustrations to build understanding of complex topics.',
      frequency: 88
    },
    {
      pattern: 'You address objections and "what if" scenarios throughout.',
      frequency: 85
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-christian-blue-600 hover:text-christian-blue-700"
            >
              ← Home
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-christian-blue-600 hover:text-christian-blue-700"
            >
              Dashboard
            </button>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {SAMPLE_SERMON_METADATA.title}
          </h1>
          <p className="text-gray-600">
            {SAMPLE_SERMON_METADATA.date} • {SAMPLE_SERMON_METADATA.duration} • Part of "{SAMPLE_SERMON_METADATA.series}" series
          </p>
        </div>

        {/* Analysis Sections */}
        <div className="space-y-8">
          <TopicBreakdown topics={topicBreakdown} />
          <TheologyAlignment cards={theologyCards} />
          <ScriptureMap data={scriptureData} />
          <IllustrationExtraction illustrations={illustrations} />
          <TeachingPatternNotes patterns={patterns} />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-christian-blue-50 rounded-lg border-2 border-christian-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Use this sermon to generate materials →
          </h3>
          <p className="text-gray-600 mb-6">
            Create discussion guides, devotionals, social posts, and more based on this analysis.
          </p>
          <button
            onClick={() => navigate('/generators')}
            className="px-8 py-3 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors"
          >
            Generate Materials
          </button>
        </div>
      </div>
    </div>
  );
}
