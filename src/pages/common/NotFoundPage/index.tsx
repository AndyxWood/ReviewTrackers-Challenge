import { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const NotFoundPage: FunctionComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <header className="not-found-wrapper">
      <h2>Woops, this page doesn't exist.</h2>
      <div>Redirecting back to the home page...</div>
    </header>
  );
};