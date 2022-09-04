import { FunctionComponent } from 'react';
import Header from '../../components/Header';
import './styles.scss';
import reviews from '../../resources/reviews.json';
import ReviewCard from './ReviewCard';

export const ReviewsList: FunctionComponent = () => {
  return (
    <>
      <Header headerTitle="Reviews" />
      <div className="reviews-body">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            author={review.author}
            place={review.place}
            published_at={review.published_at}
            rating={review.rating}
            content={review.content}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewsList;
