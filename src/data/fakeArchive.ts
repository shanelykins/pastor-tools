import { Sermon } from '../types';

// Generate fake archive data (35-50 sermons)
const topics = [
  'Grace', 'Forgiveness', 'Faith', 'Love', 'Hope', 'Prayer', 'Worship', 
  'Discipleship', 'Evangelism', 'Community', 'Service', 'Generosity',
  'Spiritual Disciplines', 'Suffering', 'Joy', 'Peace', 'Salvation',
  'The Holy Spirit', 'The Church', 'Marriage', 'Parenting', 'Work',
  'Rest', 'Temptation', 'Sin', 'Repentance', 'Heaven', 'Eternity'
];

const illustrationTypes = ['sports', 'family', 'childhood', 'cultural', 'biblical', 'nature', 'work', 'story', 'metaphor'];

const generateSermons = (): Sermon[] => {
  const sermons: Sermon[] = [];
  const startDate = new Date('2022-01-01');
  
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + (i * 7)); // Weekly sermons
    
    const selectedTopics = topics.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 2);
    const otCount = Math.floor(Math.random() * 5);
    const ntCount = Math.floor(Math.random() * 8) + 2;
    
    const illustrations = Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => ({
      text: `Illustration ${i}-${Math.floor(Math.random() * 100)}`,
      type: illustrationTypes[Math.floor(Math.random() * illustrationTypes.length)],
      timestamp: Math.floor(Math.random() * 1800) + 300
    }));
    
    sermons.push({
      id: `sermon-${i + 1}`,
      title: `Sermon ${i + 1}: ${selectedTopics[0]}`,
      date: date.toISOString().split('T')[0],
      topics: selectedTopics,
      scripture: {
        oldTestament: otCount,
        newTestament: ntCount,
        references: [
          ...Array.from({ length: otCount }, (_, idx) => `Psalm ${23 + idx}:${1 + idx}`),
          ...Array.from({ length: ntCount }, (_, idx) => `Matthew ${5 + idx}:${10 + idx}`)
        ]
      },
      illustrations,
      duration: Math.floor(Math.random() * 20) + 20,
      series: i % 7 === 0 ? `Series ${Math.floor(i / 7) + 1}` : null,
    });
  }
  
  return sermons;
};

export const FAKE_ARCHIVE: Sermon[] = generateSermons();

// Generate aggregate insights
export const AGGREGATE_INSIGHTS = {
  totalSermons: 42,
  totalDuration: 1764, // minutes
  topicFrequency: topics.reduce((acc, topic) => {
    acc[topic] = Math.floor(Math.random() * 15) + 2;
    return acc;
  }, {} as Record<string, number>),
  scriptureDistribution: {
    oldTestament: 0.35,
    newTestament: 0.65,
    mostReferenced: ['Matthew', 'John', 'Romans', 'Ephesians', '1 Corinthians'],
    leastReferenced: ['Nahum', 'Obadiah', 'Philemon', '3 John', 'Jude']
  },
  illustrationTypes: illustrationTypes.reduce((acc, type) => {
    acc[type] = Math.floor(Math.random() * 20) + 5;
    return acc;
  }, {} as Record<string, number>),
  patterns: [
    'You often frame sermons around tension-resolution arcs.',
    'Your calls to application are typically placed at the end.',
    'You rely heavily on narrative intros.',
    'You frequently use personal stories from childhood.',
    'Your sermons average 25-30 minutes in length.'
  ],
  gaps: [
    'Limited coverage of spiritual disciplines (fasting, meditation)',
    'Few sermons on eschatology and end times',
    'Underrepresented: Old Testament prophets',
    'Opportunity: More sermons on community and fellowship'
  ]
};

