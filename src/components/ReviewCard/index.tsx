import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { convertRating } from './utils';
import { format } from 'date-fns';
import { ReviewCommentModel } from '../../pages/ReviewDetails/Comment';
import commentIcon from '../../resources/commentIcon.svg';
import './styles.scss';

export interface ReviewCardPropsModel {
  id: string;
  author: string;
  place: string;
  published_at: string;
  rating: number;
  content: string;
  detailsView?: boolean;
  className?: string;
  comment?: ReviewCommentModel;
}

export const ReviewCard: FunctionComponent<ReviewCardPropsModel> = ({
  id,
  author,
  place,
  published_at,
  rating,
  content,
  detailsView,
  className,
}: ReviewCardPropsModel) => {
  return (
    <div className={`review-card ${className}`}>
      <div className="card-padding">
        <div className="place">{place}</div>
        {convertRating(rating)}
        <div className="content">{content}</div>

        <div className="card-footer-wrapper">
          <div className="author">{author}</div>
          <div className="published-date">
            {format(new Date(published_at), 'MM/dd/yyyy')}
          </div>
          <button className="comment-icon">
            {!detailsView && (
              <Link to={`/reviews/reviewId=${id}`}>
                <img src={commentIcon} alt="comment-button" />
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
