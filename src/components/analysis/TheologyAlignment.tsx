import { TheologyCard } from '../../types';

interface TheologyAlignmentProps {
  cards: TheologyCard[];
}

export default function TheologyAlignment({ cards }: TheologyAlignmentProps) {
  const getEmphasisColor = (emphasis: string) => {
    switch (emphasis) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getEmphasisLabel = (emphasis: string) => {
    switch (emphasis) {
      case 'high':
        return 'Strongly Emphasized';
      case 'medium':
        return 'Moderately Covered';
      case 'low':
        return 'Underrepresented';
      default:
        return emphasis;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Theology Alignment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`border-2 rounded-lg p-4 ${getEmphasisColor(card.emphasis)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{card.doctrine}</h3>
              <span className="text-xs font-semibold px-2 py-1 rounded">
                {getEmphasisLabel(card.emphasis)}
              </span>
            </div>
            <p className="text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

