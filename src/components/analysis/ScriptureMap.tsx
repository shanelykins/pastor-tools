interface ScriptureMapProps {
  data: {
    references: string[];
    oldTestament: number;
    newTestament: number;
    ratio: number;
  };
}

export default function ScriptureMap({ data }: ScriptureMapProps) {
  const total = data.oldTestament + data.newTestament;
  const otPercent = total > 0 ? (data.oldTestament / total) * 100 : 0;
  const ntPercent = total > 0 ? (data.newTestament / total) * 100 : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Scripture Reference Map</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Distribution</h3>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Old Testament</span>
                <span>{data.oldTestament} ({otPercent.toFixed(0)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-christian-blue-600 h-3 rounded-full"
                  style={{ width: `${otPercent}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>New Testament</span>
                <span>{data.newTestament} ({ntPercent.toFixed(0)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-christian-blue-400 h-3 rounded-full"
                  style={{ width: `${ntPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">References</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-1">
              {data.references.map((ref, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  • {ref}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-christian-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Total References:</span> {total} | 
          <span className="font-semibold"> OT/NT Ratio:</span> {data.oldTestament}:{data.newTestament}
        </p>
      </div>
    </div>
  );
}

