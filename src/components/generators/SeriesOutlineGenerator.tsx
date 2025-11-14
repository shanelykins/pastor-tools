export default function SeriesOutlineGenerator() {
  const series = {
    title: 'The Call to Follow',
    description: 'A 5-week series exploring what it means to follow Jesus in our everyday lives',
    weeks: [
      {
        week: 1,
        title: 'Leaving the Nets Behind',
        scripture: 'Matthew 4:18-22',
        focus: 'The immediate call to follow Jesus and what we must leave behind',
        keyPoints: [
          'Jesus calls us where we are',
          'Following requires leaving something',
          'The call is immediate and transformative'
        ]
      },
      {
        week: 2,
        title: 'Counting the Cost',
        scripture: 'Luke 14:25-33',
        focus: 'Understanding what following Jesus truly costs us',
        keyPoints: [
          'Following Jesus has a cost',
          'We must prioritize Jesus above all',
          'The cost is worth the reward'
        ]
      },
      {
        week: 3,
        title: 'Taking Up Your Cross',
        scripture: 'Luke 9:23-26',
        focus: 'Daily commitment to following Jesus',
        keyPoints: [
          'Following is a daily choice',
          'Denying ourselves is part of the call',
          'The cross represents our commitment'
        ]
      },
      {
        week: 4,
        title: 'Fishers of Men',
        scripture: 'Matthew 4:19, Mark 1:17',
        focus: 'Our mission as followers of Jesus',
        keyPoints: [
          'We are called to make disciples',
          'Our mission field is everywhere',
          'We fish for people, not for ourselves'
        ]
      },
      {
        week: 5,
        title: 'The Great Commission',
        scripture: 'Matthew 28:18-20',
        focus: 'Our ongoing call to make disciples',
        keyPoints: [
          'The call extends to all nations',
          'We are sent with authority',
          'Jesus is with us always'
        ]
      }
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Teaching Series Outline Generator</h2>
      <p className="text-gray-600 mb-6">If this sermon were part of a series, here's what the arc would look like:</p>
      
      <div className="mb-6 p-4 bg-christian-blue-50 rounded-lg border border-christian-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{series.title}</h3>
        <p className="text-gray-700">{series.description}</p>
      </div>

      <div className="space-y-6">
        {series.weeks.map((week) => (
          <div key={week.week} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-christian-blue-600 text-white rounded-lg font-bold">
                Week {week.week}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">{week.title}</h3>
            </div>
            
            <div className="mb-4">
              <span className="text-sm font-medium text-christian-blue-600">Scripture: </span>
              <span className="text-sm text-gray-700">{week.scripture}</span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Focus:</h4>
              <p className="text-gray-700">{week.focus}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Points:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {week.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 mt-6">
        <button className="px-6 py-2 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors">
          Export Series Outline
        </button>
      </div>
    </div>
  );
}

