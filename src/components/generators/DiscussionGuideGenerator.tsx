export default function DiscussionGuideGenerator() {
  const guide = {
    mainPoints: [
      'Jesus calls us where we are, not where we think we should be',
      'Following Jesus requires leaving something behind',
      'The call to follow is for everyone, not just pastors',
      'Transformation is about being, not just doing'
    ],
    questions: [
      'What "nets" are you still holding onto that might be keeping you from fully following Jesus?',
      'How does the story of Peter and Andrew leaving their nets challenge your own response to Jesus\' call?',
      'In what ways have you experienced Jesus meeting you "where you are" rather than waiting for you to be ready?',
      'What does it look like to be a "fisher of men" in your everyday context (work, neighborhood, family)?',
      'How can we balance the call to leave things behind with our responsibilities and commitments?',
      'Share a time when you felt God transforming your ordinary life for his extraordinary purpose.',
      'What step can you take this week to follow Jesus more fully?'
    ],
    scripture: [
      'Matthew 4:18-22',
      'Luke 9:23',
      'Romans 12:2',
      'Ephesians 2:8-9'
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Discussion Guide Generator</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Points</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {guide.mainPoints.map((point, idx) => (
              <li key={idx} className="pl-2">{point}</li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Discussion Questions</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {guide.questions.map((question, idx) => (
              <li key={idx} className="pl-2">{question}</li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Scripture References</h3>
          <div className="flex flex-wrap gap-2">
            {guide.scripture.map((ref, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-christian-blue-100 text-christian-blue-800 rounded-lg text-sm font-medium"
              >
                {ref}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <button className="px-6 py-2 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors">
            Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

