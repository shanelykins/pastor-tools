import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SermonAnalysis from './pages/SermonAnalysis';
import StructuredGenerators from './pages/StructuredGenerators';
import TeachingDashboard from './pages/TeachingDashboard';
import TheologyAudit from './pages/TheologyAudit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<SermonAnalysis />} />
        <Route path="/generators" element={<StructuredGenerators />} />
        <Route path="/dashboard" element={<TeachingDashboard />} />
        <Route path="/audit" element={<TheologyAudit />} />
      </Routes>
    </Router>
  );
}

export default App;

