import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SAMPLE_TRANSCRIPT } from '../data/sampleTranscript';
import { logEvent } from '../utils/tracking';

interface UploadModalProps {
  onClose: () => void;
}

export default function UploadModal({ onClose }: UploadModalProps) {
  const [uploadType, setUploadType] = useState<'youtube' | 'audio' | 'text'>('text');
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadType === 'text') {
      setInput(SAMPLE_TRANSCRIPT.trim());
    } else {
      setInput('');
    }
    logEvent('Upload Type Selected', { type: uploadType });
  }, [uploadType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    logEvent('Upload Started', { type: uploadType });
    
    setTimeout(() => {
      logEvent('Processing Stage', { stage: 'Transcribing' });
    }, 1000);
    
    setTimeout(() => {
      logEvent('Processing Stage', { stage: 'Analyzing' });
    }, 2000);
    
    setTimeout(() => {
      logEvent('Processing Stage', { stage: 'Mapping Themes' });
      setIsProcessing(false);
      navigate('/analysis');
      logEvent('Upload Completed', { type: uploadType });
    }, 3500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Upload a Sermon</h2>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setUploadType('youtube')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              uploadType === 'youtube'
                ? 'bg-christian-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            YouTube Link
          </button>
          <button
            onClick={() => setUploadType('audio')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              uploadType === 'audio'
                ? 'bg-christian-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Audio File
          </button>
          <button
            onClick={() => setUploadType('text')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              uploadType === 'text'
                ? 'bg-christian-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Raw Text
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {uploadType === 'youtube' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                YouTube URL
              </label>
              <input
                type="url"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent"
                required
              />
            </div>
          )}
          
          {uploadType === 'audio' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload MP3 or WAV file
              </label>
              <input
                type="file"
                accept="audio/mp3,audio/wav,audio/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent"
                required
              />
            </div>
          )}
          
          {uploadType === 'text' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste sermon transcript
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your sermon transcript here..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-christian-blue-500 focus:border-transparent font-mono text-sm"
                required
              />
            </div>
          )}
          
          {isProcessing ? (
            <div className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-christian-blue-600 mb-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-christian-blue-600"></div>
                  <span className="font-medium">Processing your sermon...</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Transcribing audio...</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Analyzing content and themes...</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Mapping theology and patterns...</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-christian-blue-600 text-white rounded-lg font-semibold hover:bg-christian-blue-700 transition-colors"
              >
                Analyze Sermon
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

