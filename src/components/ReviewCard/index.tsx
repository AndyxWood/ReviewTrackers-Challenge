import { FunctionComponent } from 'react';
import { convertRating } from './utils';
import { format } from 'date-fns';
import commentIcon from '../../resources/commentIcon.svg';
import './styles.scss';

interface ReviewCardPropsModel {
  id: string;
  author: string;
  place: string;
  published_at: string;
  rating: number;
  content: string;
  detailsView?: boolean;
}

export const ReviewCard: FunctionComponent<ReviewCardPropsModel> = ({
  id,
  author,
  place,
  published_at,
  rating,
  content,
  detailsView
}: ReviewCardPropsModel) => {

  return (
    <div className='review-card'>
      <div className='card-padding'>
        <div className='place'>{place}</div>
        {convertRating(rating)}
        <div className='content'>{content}</div>

        <div className='card-footer-wrapper'>
          <div className='author'>{author}</div>
          <div className='published-date'>{format(new Date(published_at), 'MM/dd/yyyy')}</div>
          <button className='comment-icon'>
            {/* TODO: Add on click and go to new view */}
            {/* If  */}
            {!detailsView && <img src={commentIcon} alt='comment-button' /> } 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
