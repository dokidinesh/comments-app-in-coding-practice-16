// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, date, initialClassName} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''
  const likeTestClassName = isLiked ? 'button active' : 'button'
  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onClickDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-date-container">
            <p className="name">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likedImageUrl} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onClickLike}
            className={likeTestClassName}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onClickDeleteComment}
          testid="delete"
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
