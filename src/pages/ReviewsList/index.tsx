import { FunctionComponent, useState } from 'react';
import Header from '../../components/Header';
import './styles.scss';
import reviewData from '../../resources/reviews.json';
import ReviewCard, { ReviewCardPropsModel } from '../../components/ReviewCard';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';

export type ReviewsModel = Omit<ReviewCardPropsModel, 'detailsView' | 'className'>;

interface ReviewDetailsContextModel {
  reviews: ReviewsModel[];
  setReviews: (reviews: ReviewsModel[]) => void;
  reviewId: string;
}

export function useReviewContext () {
  return useOutletContext<ReviewDetailsContextModel>();
}

export const ReviewsList: FunctionComponent = () => {
  const {reviewId} = useParams();
  const [reviews, setReviews] = useState<ReviewsModel[]>(reviewData);

  return (
    <>
      <Header headerTitle={reviewId ? 'Review Details' : 'Reviews'} />
      { reviewId ? 
        <Outlet context={{reviews, setReviews, reviewId: reviewId.split('=')[1]}}/> :
        <div className="reviews-body">
          {reviews.map((review: ReviewsModel) => (
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
        </div>}
    </>
  );
};

export default ReviewsList;
