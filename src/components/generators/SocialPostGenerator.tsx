export default function SocialPostGenerator() {
  const posts = [
    {
      platform: 'Instagram',
      content: `"Come, follow me," Jesus said, "and I will send you out to fish for people."

Jesus doesn't wait for us to be ready. He calls us in our mess, in our ordinary lives, and transforms our purpose.

What nets are you still holding onto? 🎣

#FollowingJesus #Discipleship #Faith`,
      hashtags: ['#FollowingJesus', '#Discipleship', '#Faith', '#ChristianLife']
    },
    {
      platform: 'Twitter',
      content: `Jesus called fishermen, not theologians. He called ordinary people to do extraordinary things.

Your workplace is your mission field. Your neighborhood is your congregation. You don't need a pulpit to be a fisher of men.

What step will you take today?`,
      hashtags: ['#Discipleship', '#Faith', '#Christian']
    },
    {
      platform: 'Facebook',
      content: `This week's message: "Leaving the Nets Behind"

When Jesus called Peter and Andrew, they left their nets immediately. They left their security, their livelihood, their comfort zone.

Following Jesus requires leaving something behind. What is God asking you to leave behind?

Key points:
• Jesus calls us where we are
• Following requires leaving something
• The call is for everyone
• Transformation is about being, not just doing

Full message available on our website.`,
      hashtags: ['#Sermon', '#Discipleship', '#Faith']
    }
  ];

  const quotes = [
    '"Jesus doesn\'t wait for us to be ready. He calls us in our mess."',
    '"Following Jesus isn\'t about adding him to your life. It\'s about letting him reshape everything."',
    '"Your workplace is your mission field. Your neighborhood is your congregation."',
    '"God wants to take your ordinary life and use it for his extraordinary purpose."'
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Post Generator</h2>
      
      <div className="space-y-6">
        {/* Platform Posts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform-Specific Posts</h3>
          <div className="space-y-4">
            {posts.map((post, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-christian-blue-100 text-christian-blue-800 rounded text-xs font-semibold">
                    {post.platform}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-line mb-3">{post.content}</p>
                <div className="flex flex-wrap gap-1">
                  {post.hashtags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs text-christian-blue-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-3 text-sm text-christian-blue-600 hover:text-christian-blue-700">
                  Copy to Clipboard
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Cards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quote Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quotes.map((quote, idx) => (
              <div key={idx} className="border-2 border-christian-blue-200 rounded-lg p-6 bg-christian-blue-50">
                <p className="text-lg text-gray-800 italic mb-4">"{quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">— From this week's message</span>
                  <button className="text-sm text-christian-blue-600 hover:text-christian-blue-700">
                    Download Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

