import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
