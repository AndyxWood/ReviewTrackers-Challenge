import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { NotFoundPage } from './pages/common/NotFoundPage';
import { ReviewsList } from './pages/ReviewsList';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <ReviewsList />},
    { path: '/reviews', element: <ReviewsList />},
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