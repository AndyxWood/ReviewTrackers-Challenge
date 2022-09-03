import { FunctionComponent } from 'react';
import { convertRating } from './utils';
import { format } from 'date-fns';
import commentIcon from '../../../resources/commentIcon.svg';
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
      <div className='content'>{content}</div>

      <div className='card-footer-wrapper'>
        <div className='author'>{author}</div>
        <div className='published-date'>{format(new Date(published_at), 'MM/dd/yyyy')}</div>
        <img src={commentIcon} className='comment-icon' alt='comment-button' /> 
        {/* TODO: Add on click and go to new view */}
        {/* TODO: Make this page responsive and put cards horizontally */}
      </div>
    </div>
  </div>;
};

export default ReviewCard;
