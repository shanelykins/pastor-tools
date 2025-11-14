export default function DevotionalGenerator() {
  const devotional = {
    title: 'Leaving the Nets: A 5-Day Devotional',
    days: [
      {
        day: 1,
        title: 'The Call',
        scripture: 'Matthew 4:18-22',
        reflection: 'Jesus calls us in our ordinary moments. He doesn\'t wait for us to be perfect or ready. Today, reflect on how Jesus has called you in the midst of your everyday life.',
        prayer: 'Lord, help me to recognize your call in my ordinary moments and respond with the same immediacy as the first disciples.'
      },
      {
        day: 2,
        title: 'What We Leave Behind',
        scripture: 'Luke 14:33',
        reflection: 'Following Jesus requires leaving something behind. It might be our comfort, our plans, or our security. What is God asking you to leave behind?',
        prayer: 'Father, give me the courage to leave behind whatever is keeping me from fully following you.'
      },
      {
        day: 3,
        title: 'Ordinary to Extraordinary',
        scripture: '1 Corinthians 1:26-29',
        reflection: 'God uses ordinary people for extraordinary purposes. Your workplace, your neighborhood, your family—these are your mission fields.',
        prayer: 'God, help me see how you can use my ordinary life for your extraordinary purpose.'
      },
      {
        day: 4,
        title: 'Transformation',
        scripture: 'Romans 12:2',
        reflection: 'Following Jesus isn\'t about adding him to your life. It\'s about letting him transform everything. How is God transforming you?',
        prayer: 'Holy Spirit, transform my heart and mind so that I may be more like Christ.'
      },
      {
        day: 5,
        title: 'Taking the Step',
        scripture: 'Philippians 3:7-8',
        reflection: 'The call to follow requires action. It doesn\'t have to be a big step—just a step in the right direction. What step will you take today?',
        prayer: 'Lord, give me the faith to take the next step in following you, trusting you with my future.'
      }
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{devotional.title}</h2>
      
      <div className="space-y-6">
        {devotional.days.map((day) => (
          <div key={day.day} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-christian-blue-600 text-white rounded-full font-bold">
                Day {day.day}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
            </div>
            
            <div className="mb-4">
              <span className="text-sm font-medium text-christian-blue-600">Scripture: </span>
              <span className="text-sm text-gray-700">{day.scripture}</span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Reflection:</h4>
              <p className="text-gray-700">{day.reflection}</p>
            </div>
            
            <div className="bg-christian-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Prayer:</h4>
              <p className="text-gray-700 italic">{day.prayer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 mt-6">
        <button className="px-6 py-2 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors">
          Export as PDF
        </button>
      </div>
    </div>
  );
}

