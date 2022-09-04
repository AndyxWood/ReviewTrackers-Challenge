import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReviewsModel } from '../../ReviewsList';
import backArrowIcon from '../../../resources/backArrowIcon.svg';
import menuIcon from '../../../resources/menuIcon.svg';
import './styles.scss';
import { format } from 'date-fns';
import EditCommentForm from './EditCommentForm';
import Tooltip from '@mui/material/Tooltip';

export interface ReviewCommentModel {
  content?: string;
  author?: string;
  date?: string;
}

interface CommentCardPropsModel {
  comment: ReviewCommentModel | undefined;
  review: ReviewsModel;
}

const CommentContent: FunctionComponent<ReviewCommentModel> = ({
  content,
  author,
  date,
}: ReviewCommentModel) => {
  return (
    <>
      <div className="comment-text">{content}</div>
      <div className="card-footer">
        <div className="comment-author">{author}</div>
        <div className="comment-date">
          {date && format(new Date(date), 'MM/dd/yyyy')}
        </div>
      </div>
    </>
  );
};

export const CommentCard: FunctionComponent<CommentCardPropsModel> = ({
  comment,
  review,
}: CommentCardPropsModel) => {
  const [editContent, setEditContent] = useState<boolean>(
    !comment ? true : false
  );

  return (
    <div className="comment-card">
      <div className="back-arrow-icon">
        <Link to={'/reviews'}>
          <img src={backArrowIcon} alt="back-arrow-button" />
        </Link>
      </div>

      <div className="card-padding">
        {editContent ? (
          <EditCommentForm
            comment={comment}
            review={review}
            setEditContent={(bool) => setEditContent(bool)}
          />
        ) : (
          <CommentContent
            content={comment?.content}
            author={comment?.author || 'Unknown'}
            date={comment?.date}
          />
        )}
      </div>

      {!editContent && (
        <div className="menu-icon">
          <Tooltip title="Edit Comment" enterDelay={700}>
            <img
              src={menuIcon}
              alt="menu-icon"
              onClick={() => setEditContent(true)}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
