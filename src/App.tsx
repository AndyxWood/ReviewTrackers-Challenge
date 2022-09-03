import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/common/NotFoundPage';
import { ReviewPage } from './pages/ReviewPage';
import './themes/App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<ReviewPage />} />
          <Route path='/reviews' element={<ReviewPage />} />
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;