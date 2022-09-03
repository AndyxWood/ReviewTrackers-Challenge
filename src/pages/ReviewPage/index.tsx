import { FunctionComponent } from 'react';
import Header from '../../components/Header';

export const ReviewPage: FunctionComponent = () => {
  // TODO:
  // get list of reviews from json file
  // map reviews to card component (To be made)

  return (
    <>
      <Header headerTitle='Reviews' />
      <div className='reviews-body'> {/* cards */} </div>
    </>
  );
};