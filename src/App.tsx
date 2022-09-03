import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { NotFoundPage } from './pages/common/NotFoundPage';
import { ReviewPage } from './pages/ReviewPage';
import './themes/App.css';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <ReviewPage />},
    { path: '/reviews', element: <ReviewPage />},
    { path: '*', element: <NotFoundPage />},
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </>
  );
};

export default App;