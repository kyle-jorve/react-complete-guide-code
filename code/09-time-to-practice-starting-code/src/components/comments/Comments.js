import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: comments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.quoteID);
  }, [params.quoteID, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest(params.quoteID);
  }, [sendRequest, params.quoteID]);
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteID={params.quoteID} onAddedComment={addCommentHandler} />}
      {
        status === 'pending' &&
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }
      {
        status === 'completed' && comments && comments.length > 0 &&
        <CommentsList comments={comments} />
      }
      {
        status === 'completed' && (!comments || comments.length === 0) &&
        <p className='centered'>No comments added yet 🙁</p>
      }
    </section>
  );
};

export default Comments;
