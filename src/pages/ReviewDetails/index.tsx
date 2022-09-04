import { FunctionComponent, useEffect, useState } from 'react';
import ReviewCard from '../../components/ReviewCard';
import { ReviewsModel, useReviewContext } from '../ReviewsList';
import CommentCard from './Comment';
import './styles.scss';

export const ReviewDetails: FunctionComponent = () => {
  const { reviews, reviewId } = useReviewContext();
  const [review, setReview] = useState<ReviewsModel | null>(null);

  useEffect(() => {
    if (reviews && reviewId && !review) {
      const currentReview = reviews.find((rev) => rev.id === reviewId);
      if (currentReview) setReview(currentReview);
    }
  }, [reviews, reviewId]);

  return (
    <>
      <div className="review-details-body">
        {review && (
          <ReviewCard
            key={review.id}
            id={review.id}
            author={review.author}
            place={review.place}
            published_at={review.published_at}
            rating={review.rating}
            content={review.content}
            detailsView
            className="details"
          />
        )}
        {review && <CommentCard comment={review?.comment} review={review} />}
      </div>
    </>
  );
};

export default ReviewDetails;
