import './styles.scss';

export const convertRating = (rating: number): JSX.Element => {
  const fiveStars = '★★★★★';

  if (rating < 1 || rating > 5 || typeof rating !== 'number')
    return <div data-testid='0/5-stars' className="empty-rating">{fiveStars}</div>;

  const star = '★';
  let response = '';

  for (let i = 0; i < rating; i++) {
    response += star;
  }

  const emptyStars = fiveStars.substring(0, fiveStars.length - response.length);

  return (
    <div className="rating-wrapper">
      <div className="rating">{response}</div>
      <div className="empty-rating">{emptyStars}</div>
    </div>
  );
};
