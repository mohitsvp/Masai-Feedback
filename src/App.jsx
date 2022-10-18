import { Route, Routes } from 'react-router-dom';
import './App.css';
import FeedbackForm from './pages/FeedbackForm';
import Feedback from './pages/Feedback';
import FeedbackFormBatch from './pages/FeedbackFormBatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/feedback/:id" element={<FeedbackForm/>} />
        <Route path="/feedback/batch" element={<FeedbackFormBatch/>} />
      </Routes>
    </div>
  );
}

export default App;
