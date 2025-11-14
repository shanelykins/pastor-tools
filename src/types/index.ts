export interface Sermon {
  id: string;
  title: string;
  date: string;
  topics: string[];
  scripture: {
    oldTestament: number;
    newTestament: number;
    references: string[];
  };
  illustrations: Illustration[];
  duration: number;
  series: string | null;
}

export interface Illustration {
  text: string;
  type: string;
  timestamp: number;
}

export interface TopicBreakdown {
  topic: string;
  strength: number;
  relatedScripture: string[];
}

export interface TheologyCard {
  doctrine: string;
  emphasis: 'high' | 'medium' | 'low';
  description: string;
}

export interface TeachingPattern {
  pattern: string;
  frequency: number;
}

