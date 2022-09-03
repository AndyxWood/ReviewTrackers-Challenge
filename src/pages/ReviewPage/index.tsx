import { FunctionComponent } from 'react';
import Header from '../../components/Header';
import './styles.scss';

export const ReviewPage: FunctionComponent = () => {
  // TODO:
  // get list of reviews from json file
  // map reviews to card component (To be made)

  return (
    <>
      <Header headerTitle='Reviews' />
      <div className='reviews-body'>cards list</div>
    </>
  );
};

export default ReviewPage;