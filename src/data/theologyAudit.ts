// Theology Audit Framework Data Structure

export interface TheologyCategory {
  id: string;
  name: string;
  items: string[];
}

export interface DiscipleshipPractice {
  id: string;
  name: string;
  description: string;
}

export interface ChristianVirtue {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface CulturalTopic {
  id: string;
  name: string;
  description: string;
}

export interface CriticalExperience {
  id: string;
  name: string;
  description: string;
}

export interface SinCategory {
  id: string;
  name: string;
  sins: string[];
}

// Core Christian Theology
export const CORE_THEOLOGY: Record<string, TheologyCategory> = {
  godAndNature: {
    id: 'godAndNature',
    name: 'God & His Nature',
    items: [
      'The Trinity – One God in three persons: Father, Son, and Holy Spirit',
      'Attributes of God – His holiness, love, power, knowledge, etc.',
      'God\'s Sovereignty – His control and rule over everything',
      'God\'s Immanence and Transcendence – He is close and also beyond us',
      'Creation – God made the world on purpose'
    ]
  },
  scriptureRevelation: {
    id: 'scriptureRevelation',
    name: 'Scripture & Revelation',
    items: [
      'Inspiration of Scripture – The Bible is God-breathed',
      'Inerrancy and Infallibility – The Bible is true and trustworthy',
      'Canon of Scripture – Why certain books are in the Bible',
      'Illumination – The Holy Spirit helps us understand the Bible',
      'General and Special Revelation – God shows Himself through nature and Scripture'
    ]
  },
  jesusChrist: {
    id: 'jesusChrist',
    name: 'Jesus Christ',
    items: [
      'Deity of Christ – Jesus is fully God',
      'Humanity of Christ – Jesus is fully human',
      'Incarnation – God became human in Jesus',
      'Virgin Birth – Jesus was born of a virgin by the Spirit',
      'Sinless Life of Christ – Jesus never sinned',
      'Death of Christ – He died in our place',
      'Resurrection of Christ – He rose from the dead',
      'Ascension of Christ – He went back to heaven',
      'Second Coming – Jesus will come again'
    ]
  },
  holySpirit: {
    id: 'holySpirit',
    name: 'Holy Spirit',
    items: [
      'Personhood of the Holy Spirit – He is a person, not a force',
      'Work in Salvation – Convicts, saves, lives in believers',
      'Sanctification – Helps us grow more like Jesus',
      'Spiritual Gifts – Special abilities for serving others',
      'Fruit of the Spirit – Signs of a Spirit-led life'
    ]
  },
  humanitySin: {
    id: 'humanitySin',
    name: 'Humanity & Sin',
    items: [
      'Image of God – We are made like God',
      'The Fall – Sin entered through Adam and Eve',
      'Original Sin – We are born with a sinful nature',
      'Total Depravity – Sin affects all parts of us',
      'Human Responsibility – We are accountable to God',
      'Biblical Anthropology - What does it mean to be human',
      'Biblical Gender - What does it mean to be a man or woman',
      'Biblical Marriage - What is purpose of marriage',
      'Biblical Family - What is the purpose of family',
      'Biblical Sexuality - What is the point and purpose of sexuality'
    ]
  },
  salvation: {
    id: 'salvation',
    name: 'Salvation',
    items: [
      'Grace – God\'s free and undeserved favor',
      'Faith – Trusting in Jesus alone',
      'Justification – God declares us righteous',
      'Adoption – God makes us His children',
      'Regeneration – The new birth by the Holy Spirit',
      'Election and Predestination – God\'s sovereign choice',
      'Repentance – Turning from sin to God',
      'Perseverance – True believers will endure',
      'Union with Christ – We are joined to Jesus'
    ]
  },
  church: {
    id: 'church',
    name: 'Church',
    items: [
      'Nature of the Church – God\'s people together',
      'Mission of the Church – Worship, grow, serve, share',
      'Baptism – Symbol of new life in Christ',
      'Lord\'s Supper – Remembering Jesus\' death',
      'Church Leadership – Elders, pastors, deacons',
      'Church Discipline – Loving correction'
    ]
  },
  lastThings: {
    id: 'lastThings',
    name: 'Last Things',
    items: [
      'Heaven and Hell – Eternal life or separation from God',
      'Final Judgment – Everyone will stand before God',
      'Resurrection – Dead will rise again',
      'New Heaven and Earth – God will renew everything',
      'Millennium and Tribulation – Events before Jesus returns',
      'Hope of Glory – Eternal life with God'
    ]
  }
};

// Core Discipleship Practices
export const DISCIPLESHIP_PRACTICES: DiscipleshipPractice[] = [
  { id: 'bibleReading', name: 'Bible Reading', description: 'Regularly engaging Scripture to know God\'s heart and truth.' },
  { id: 'prayer', name: 'Prayer', description: 'Talking to God with honesty, dependence, and faith.' },
  { id: 'worship', name: 'Worship', description: 'Honoring God with your whole life, both privately and corporately.' },
  { id: 'confessionRepentance', name: 'Confession and Repentance', description: 'Regularly turning from sin and realigning with God.' },
  { id: 'obedience', name: 'Obedience to God\'s Word', description: 'Living out what you read and hear in Scripture.' },
  { id: 'fellowship', name: 'Fellowship with Believers', description: 'Committing to deep, accountable community.' },
  { id: 'gathering', name: 'Gathering with the Church', description: 'Participating in weekly worship and sacraments.' },
  { id: 'baptism', name: 'Baptism', description: 'Publicly identifying with Christ\'s death and resurrection.' },
  { id: 'lordsSupper', name: 'The Lord\'s Supper', description: 'Remembering and proclaiming Christ\'s sacrifice.' },
  { id: 'disciplingOthers', name: 'Discipling Others', description: 'Helping others follow Jesus as you grow.' },
  { id: 'beingDiscipled', name: 'Being Discipled', description: 'Placing yourself under the guidance of a mature believer.' },
  { id: 'evangelism', name: 'Evangelism', description: 'Sharing the gospel with those who don\'t know Christ.' },
  { id: 'serving', name: 'Serving Others', description: 'Using your time, talents, and gifts to meet needs.' },
  { id: 'generosity', name: 'Generosity', description: 'Giving your money and resources joyfully and sacrificially.' },
  { id: 'sabbath', name: 'Sabbath and Rest', description: 'Trusting God by resting and worshiping regularly.' },
  { id: 'meditation', name: 'Scripture Meditation and Memorization', description: 'Hiding God\'s Word in your heart.' },
  { id: 'discernment', name: 'Spiritual Discernment', description: 'Testing ideas and choices by God\'s Word and Spirit.' },
  { id: 'submission', name: 'Submission to Spiritual Authority', description: 'Respecting and learning from leaders.' },
  { id: 'holiness', name: 'Pursuit of Holiness', description: 'Actively putting off sin and pursuing righteousness.' },
  { id: 'perseverance', name: 'Perseverance in Trials', description: 'Trusting God through suffering and hardship.' }
];

// Christian Virtues
export const CHRISTIAN_VIRTUES: ChristianVirtue[] = [
  // Heart Virtues
  { id: 'humility', name: 'Humility', category: 'Heart', description: 'Thinking of others before yourself' },
  { id: 'gratitude', name: 'Gratitude', category: 'Heart', description: 'A continual posture of thanksgiving' },
  { id: 'peacefulness', name: 'Peacefulness', category: 'Heart', description: 'An inner calm rooted in God\'s sovereignty' },
  { id: 'contentment', name: 'Contentment', category: 'Heart', description: 'Trusting God\'s provision and rejection of materialism' },
  
  // Worship Virtues
  { id: 'faith', name: 'Faith', category: 'Worship', description: 'Trusting in God\'s character and promises' },
  { id: 'hope', name: 'Hope', category: 'Worship', description: 'Confident expectation in God\'s future' },
  { id: 'loveForGod', name: 'Love for God', category: 'Worship', description: 'Wholehearted devotion and worship' },
  { id: 'reverence', name: 'Reverence (Fear of the Lord)', category: 'Worship', description: 'Holy awe and submission' },
  
  // Relational Virtues
  { id: 'kindness', name: 'Kindness', category: 'Relational', description: 'Choosing gentleness and compassion' },
  { id: 'forgiveness', name: 'Forgiveness', category: 'Relational', description: 'Letting go of offense' },
  { id: 'patience', name: 'Patience', category: 'Relational', description: 'Bearing with others without irritation' },
  { id: 'peacemaking', name: 'Peacemaking', category: 'Relational', description: 'Actively seeking reconciliation' },
  { id: 'service', name: 'Service', category: 'Relational', description: 'Working sacrificially for the good of others' },
  { id: 'honesty', name: 'Honesty', category: 'Relational', description: 'Telling and living the truth' },
  
  // Strength Virtues
  { id: 'perseverance', name: 'Perseverance', category: 'Strength', description: 'Staying faithful under pressure and persecution' },
  { id: 'courage', name: 'Courage', category: 'Strength', description: 'Standing firm in faith' },
  { id: 'selfControl', name: 'Self-Control', category: 'Strength', description: 'Mastering desires and emotions' },
  { id: 'diligence', name: 'Diligence', category: 'Strength', description: 'Persistent and faithful work' },
  
  // Wisdom Virtues
  { id: 'discernment', name: 'Discernment', category: 'Wisdom', description: 'Distinguishing truth from error' },
  { id: 'teachability', name: 'Teachability', category: 'Wisdom', description: 'Willingness to learn and grow' },
  { id: 'wisdom', name: 'Wisdom', category: 'Wisdom', description: 'Living skillfully and righteously' },
  { id: 'integrity', name: 'Integrity', category: 'Wisdom', description: 'Wholeness of character' },
  
  // Missional Virtues
  { id: 'generosity', name: 'Generosity', category: 'Missional', description: 'Open-handed giving' },
  { id: 'hospitality', name: 'Hospitality', category: 'Missional', description: 'Welcoming others' },
  { id: 'justice', name: 'Justice', category: 'Missional', description: 'Standing for what is right' },
  { id: 'compassion', name: 'Compassion', category: 'Missional', description: 'Care for the poor and hurting' },
  { id: 'evangelisticBoldness', name: 'Evangelistic Boldness', category: 'Missional', description: 'Sharing Christ clearly and courageously' }
];

// Cultural Topics
export const CULTURAL_TOPICS: CulturalTopic[] = [
  { id: 'biblicalAuthority', name: 'Biblical Authority Over Personal Authority', description: 'Trusting God\'s Word over personal feelings or cultural opinions.' },
  { id: 'sexualIntegrity', name: 'Sexual Integrity', description: 'Living according to God\'s design for sex, marriage, and purity.' },
  { id: 'identityInChrist', name: 'Identity in Christ vs. Self-Defined', description: 'Rooting our identity in who God says we are, not how we feel or what culture says.' },
  { id: 'holiness', name: 'Holiness vs. Cultural Tolerance', description: 'Living set apart for God rather than blending into the world.' },
  { id: 'convictionalKindness', name: 'Convictional Kindness', description: 'Holding to truth with a loving, gracious posture.' },
  { id: 'sacrificialCommunity', name: 'Sacrificial Community vs. Consumer Individualism', description: 'Committing to the church family, not just attending for personal benefit.' },
  { id: 'humility', name: 'Humility vs. Self-Promotion', description: 'Serving others instead of seeking to elevate ourselves.' },
  { id: 'generosity', name: 'Generosity in a Greedy Culture', description: 'Using our money and possessions to bless others and honor God.' },
  { id: 'sacrednessOfLife', name: 'The Sacredness of Life', description: 'Valuing all human life as made in God\'s image, from womb to grave.' },
  { id: 'trueJustice', name: 'True Justice vs. Ideological Activism', description: 'Pursuing justice God\'s way—not just following political or cultural trends.' },
  { id: 'forgiveness', name: 'Forgiveness Over Bitterness', description: 'Letting go of offenses and extending grace to others.' },
  { id: 'sabbath', name: 'Sabbath and Rest in a Hustle Culture', description: 'Trusting God enough to rest and honor rhythms of work and worship.' },
  { id: 'resilientFaith', name: 'Resilient Faith Under Pressure', description: 'Following Jesus even when it\'s unpopular or costly.' },
  { id: 'biblicalLiteracy', name: 'Biblical Literacy vs. Soundbite Theology', description: 'Knowing the Bible deeply, not just quoting verses out of context.' },
  { id: 'spiritualDiscernment', name: 'Spiritual Discernment in a World of Noise', description: 'Learning to recognize what is true and what is deceptive.' },
  { id: 'witness', name: 'Witness and Evangelism in a Hostile World', description: 'Boldly and wisely sharing the gospel with others.' },
  { id: 'dailySurrender', name: 'Discipleship as Daily Surrender', description: 'Following Jesus in every area of life, not just going to church.' },
  { id: 'biblicalGender', name: 'Biblical Masculinity and Femininity', description: 'Embracing God\'s good design for men and women.' },
  { id: 'hopeEternity', name: 'Hope and Eternity vs. Present Comfort', description: 'Living for eternal reward, not just temporary ease.' },
  { id: 'prayerDependence', name: 'Prayer and Dependence in a Self-Sufficient World', description: 'Relying on God daily instead of trusting in ourselves.' },
  { id: 'faithfulnessSuffering', name: 'Faithfulness in Suffering', description: 'Trusting God and remaining loyal to Him even in hardship, loss, or unanswered prayers.' },
  { id: 'obedience', name: 'Obedience vs. Moral Relativism', description: 'Following God\'s commands even when the world says truth is flexible or optional.' },
  { id: 'spiritualWarfare', name: 'Spiritual Warfare Awareness', description: 'Recognizing we have a real enemy and learning to stand firm through prayer and truth.' },
  { id: 'selfControl', name: 'Self-Control in an Impulsive Age', description: 'Practicing discipline over desires, screens, habits, and appetites.' },
  { id: 'gratitude', name: 'Gratitude vs. Entitlement', description: 'Cultivating thankfulness instead of demanding what we think we deserve.' },
  { id: 'honoringBodies', name: 'Honoring God with Our Bodies', description: 'Living out worship through how we eat, rest, exercise, dress, and express ourselves physically.' },
  { id: 'stewardingTime', name: 'Stewarding Time in a Distracted World', description: 'Using time wisely for kingdom purposes instead of wasting it on endless entertainment.' },
  { id: 'honestyIntegrity', name: 'Honesty and Integrity', description: 'Speaking the truth, keeping promises, and living consistently in public and private.' },
  { id: 'livingBySpirit', name: 'Living by the Spirit vs. Living by the Flesh', description: 'Letting the Holy Spirit guide decisions, emotions, and habits rather than sinful desires.' },
  { id: 'engagingCulture', name: 'Engaging Culture Without Compromise', description: 'Learning how to participate in society while maintaining gospel distinctiveness.' }
];

// Critical Experiences
export const CRITICAL_EXPERIENCES: CriticalExperience[] = [
  { id: 'gospelEncounter', name: 'A Clear Encounter with the Gospel', description: 'A moment of clarity and conviction about Jesus\' saving work—often marking true conversion or spiritual awakening.' },
  { id: 'repentance', name: 'Repentance from a Personal Stronghold', description: 'A deep break from a sinful habit, idol, or false identity that leads to freedom and transformation.' },
  { id: 'riskyObedience', name: 'Answering God\'s Call to Risky Obedience', description: 'Following God in a situation that requires courage, sacrifice, or surrender—like forgiving someone deeply, changing careers, or moving in obedience.' },
  { id: 'gracePresence', name: 'Profound Experience of God\'s Grace or Presence', description: 'A moment (or season) of deep spiritual intimacy—often during prayer, worship, or suffering—that changes how you see God.' },
  { id: 'sufferingLoss', name: 'Walking Through Suffering or Loss with God', description: 'Trusting God through pain, grief, disappointment, or unfulfilled expectations—maturity deepens in the valley.' },
  { id: 'deeplyKnown', name: 'Being Deeply Known in Christian Community', description: 'Letting others see your real life—sins, struggles, hopes—and receiving love, correction, and encouragement.' },
  { id: 'costlyService', name: 'Serving in a Way that Costs Something', description: 'Sacrificial ministry, leadership, or generosity that stretches your faith and breaks self-reliance.' },
  { id: 'gospelWitness', name: 'Sharing the Gospel and Seeing God Work', description: 'Witnessing the power of God in someone else\'s life through your obedience—boosting both faith and purpose.' },
  { id: 'correction', name: 'Receiving Correction or Discipline from Others', description: 'Humbly accepting truth from spiritual leaders or friends and growing as a result.' },
  { id: 'doubt', name: 'Wrestling with Doubt and Finding God Faithful', description: 'A season of questions, theological tension, or disappointment—ending with deeper conviction and trust.' },
  { id: 'leadership', name: 'Stepping into Leadership or Spiritual Responsibility', description: 'Being entrusted with influence or care for others, which drives dependence on Christ and intentional growth.' },
  { id: 'crossCultural', name: 'Participating in a Cross-Cultural or Missional Context', description: 'Seeing God\'s work beyond your comfort zone—broadening your view of the gospel and the Church.' },
  { id: 'lettingGo', name: 'Letting Go of Control', description: 'Releasing something you love (a dream, a relationship, a reputation) in surrender to God\'s will.' },
  { id: 'hearingGod', name: 'Learning to Hear God\'s Voice', description: 'Distinguishing God\'s leading through Scripture, prayer, wise counsel, and the Spirit\'s nudging.' },
  { id: 'faithfulness', name: 'Witnessing God\'s Faithfulness Over Time', description: 'Looking back over years and recognizing God\'s provision, sanctification, and sovereignty in your story' }
];

// Sin Categories
export const SIN_CATEGORIES: SinCategory[] = [
  {
    id: 'heart',
    name: 'Sins of the Heart',
    sins: ['Pride', 'Greed', 'Envy', 'Anger', 'Unforgiveness', 'Idolatry', 'Materialism', 'Fear of Man', 'Covetousness', 'Ingratitude', 'Spiritual Apathy', 'Complacency', 'Cynicism', 'Harboring Shame']
  },
  {
    id: 'tongue',
    name: 'Sins of the Tongue',
    sins: ['Gossip', 'Slander', 'Dishonesty', 'Flattery', 'Boasting', 'Judgmentalism', 'Complaining']
  },
  {
    id: 'omission',
    name: 'Sins of Omission',
    sins: ['Neglect of the Poor', 'Neglecting Prayer and the Word', 'Neglecting Fellowship', 'Withholding Generosity', 'Neglecting Sabbath Rest', 'Disobedience to the Spirit']
  },
  {
    id: 'againstOthers',
    name: 'Sins Against Others',
    sins: ['Divisiveness', 'Manipulation', 'Disrespecting Parents', 'Unforgiveness', 'Lack of Compassion', 'Neglect of the Poor']
  },
  {
    id: 'againstGod',
    name: 'Sins Against God',
    sins: ['Rebellion', 'Idolatry', 'Worldliness', 'Spiritual Apathy', 'Neglecting Prayer and the Word', 'Disobedience to the Spirit', 'Complacency']
  }
];

// All Sins List
export const ALL_SINS: string[] = [
  'Pride', 'Greed', 'Lust', 'Envy', 'Anger', 'Gluttony', 'Laziness', 'Gossip', 'Slander',
  'Hypocrisy', 'Dishonesty', 'Self-Righteousness', 'Idolatry', 'Materialism', 'Fear of Man',
  'Unforgiveness', 'Sexual Immorality', 'Divisiveness', 'Arrogance in Knowledge', 'Neglect of the Poor',
  'Ingratitude', 'Rebellion', 'Addictions', 'Covetousness', 'Manipulation', 'Neglecting Prayer and the Word',
  'Worldliness', 'Spiritual Apathy', 'Judgmentalism', 'Disobedience to the Spirit', 'Complacency',
  'Neglecting Fellowship', 'Withholding Generosity', 'Neglecting Sabbath Rest', 'Cynicism', 'Harboring Shame',
  'Impatience', 'Flattery', 'Disrespecting Parents', 'Boasting'
];

