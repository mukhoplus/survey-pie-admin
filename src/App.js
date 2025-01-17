import { Route, Routes } from 'react-router-dom';

import BuilderPage from './pages/BuilderPage';
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/builder" element={<BuilderPage />} />
      </Routes>
    </div>
  );
};

export default App;
