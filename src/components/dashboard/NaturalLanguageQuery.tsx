import { useState } from 'react';
import { FAKE_ARCHIVE } from '../../data/fakeArchive';

export default function NaturalLanguageQuery() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const exampleQueries = [
    "When did I last preach on forgiveness?",
    "What was that football story I used last year?",
    "Show me sermons where I emphasized rest.",
    "How many times have I preached on grace?",
    "Find sermons about discipleship from 2023"
  ];

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      // Mock query processing
      const lowerQuery = query.toLowerCase();
      let mockResults: string[] = [];

      if (lowerQuery.includes('forgiveness')) {
        mockResults = [
          'Found 3 sermons on forgiveness:',
          '• "The Power of Forgiveness" - March 15, 2023',
          '• "Forgiving as We\'ve Been Forgiven" - September 8, 2023',
          '• "Letting Go of Resentment" - November 20, 2023'
        ];
      } else if (lowerQuery.includes('football') || lowerQuery.includes('sports')) {
        mockResults = [
          'Found illustration:',
          '• "The football game where the underdog team came back to win..."',
          'Used in: "Victory in Christ" - October 12, 2023'
        ];
      } else if (lowerQuery.includes('rest')) {
        mockResults = [
          'Found 2 sermons emphasizing rest:',
          '• "Entering God\'s Rest" - July 3, 2023',
          '• "Sabbath and Soul Care" - August 14, 2023'
        ];
      } else if (lowerQuery.includes('grace')) {
        const graceCount = FAKE_ARCHIVE.filter(s => s.topics.includes('Grace')).length;
        mockResults = [
          `You've preached on grace ${graceCount} times in your archive.`,
          'Most recent: "Amazing Grace" - December 10, 2023'
        ];
      } else if (lowerQuery.includes('discipleship')) {
        mockResults = [
          'Found 5 sermons on discipleship:',
          '• "The Call to Follow" - January 14, 2024',
          '• "Making Disciples" - June 18, 2023',
          '• "Following Jesus Daily" - March 22, 2023',
          '• "The Cost of Discipleship" - May 5, 2023',
          '• "Discipleship in Community" - September 29, 2023'
        ];
      } else {
        mockResults = [
          `I found ${Math.floor(Math.random() * 5) + 1} relevant results for "${query}".`,
          'Try being more specific, or use one of the example queries below.'
        ];
      }

      setResults(mockResults);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="bg-white border-2 border-christian-blue-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Ask Your Archive</h2>
      
      <form onSubmit={handleQuery} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="When did I last preach on forgiveness?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-3 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors disabled:opacity-50"
          >
            {isProcessing ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {isProcessing && (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-christian-blue-600"></div>
        </div>
      )}

      {results.length > 0 && !isProcessing && (
        <div className="bg-christian-blue-50 rounded-lg p-4 border border-christian-blue-200">
          {results.map((result, idx) => (
            <p key={idx} className="text-gray-800 mb-1">{result}</p>
          ))}
        </div>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Example queries:</p>
        <div className="flex flex-wrap gap-2">
          {exampleQueries.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(example)}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

