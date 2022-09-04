import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { ReviewCommentModel } from '..';
import { ReviewsModel, useReviewContext } from '../../../ReviewsList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';

interface EditCommentFormPropsModel {
  comment: Omit<ReviewCommentModel, 'date'> | undefined;
  review: ReviewsModel;
  setEditContent: (bool: boolean) => void;
}

export const EditCommentForm: FunctionComponent<EditCommentFormPropsModel> = ({
  comment,
  review,
  setEditContent,
}: EditCommentFormPropsModel) => {
  const { reviews, setReviews } = useReviewContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: ReviewCommentModel): void => {
    const updatedReviews = reviews.map((rev) => {
      if (rev.id === review.id) {
        rev.comment = { date: new Date().toDateString(), ...data };
      }
      return rev;
    });

    setReviews(updatedReviews);
    setEditContent(false);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="form-wrapper"
    >
      <TextField
        required
        label="Response"
        fullWidth
        multiline
        maxRows={5}
        {...register('content')}
        defaultValue={comment?.content || ''}
        variant="standard"
      />
      <TextField
        label="Name"
        className=""
        {...register('author')}
        defaultValue={comment?.author || ''}
        variant="standard"
      />
      <div className="button-wrapper">
        {comment?.content && (
          <Button color="error" onClick={() => setEditContent(false)}>
            Cancel
          </Button>
        )}
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EditCommentForm;
