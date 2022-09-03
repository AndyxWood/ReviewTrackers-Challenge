import { FunctionComponent } from 'react';
import { convertRating } from './utils';
import './styles.scss';

interface ReviewCardPropsModel {
  id: string;
  author: string;
  place: string;
  published_at: string;
  rating: number;
  content: string;
}

export const ReviewCard: FunctionComponent<ReviewCardPropsModel> = ({
  id,
  author,
  place,
  published_at,
  rating,
  content,
}: ReviewCardPropsModel) => {
  return <div className='review-card'>
    <div className='card-padding'>
      <div className='place'>{place}</div>
      {convertRating(rating)}
    </div>
  </div>;
};

export default ReviewCard;
