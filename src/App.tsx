import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotFoundPage } from './pages/common/NotFoundPage';
import ReviewDetails from './pages/ReviewDetails';
import { ReviewsList } from './pages/ReviewsList';

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="reviews" replace />} />
            <Route path="/reviews" element={<ReviewsList />}>
              <Route path=":reviewId" element={<ReviewDetails />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
