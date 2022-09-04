import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotFoundPage } from './pages/common/NotFoundPage';
import ReviewDetails from './pages/ReviewDetails';
import { ReviewsList } from './pages/ReviewsList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="reviews" replace />} />
        <Route path="/reviews" element={<ReviewsList />}>
          <Route path=":reviewId" element={<ReviewDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <div className="App">
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;
