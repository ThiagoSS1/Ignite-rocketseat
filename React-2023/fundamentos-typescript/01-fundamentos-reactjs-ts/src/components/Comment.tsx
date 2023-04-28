import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log('deletar comentario')
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/thiagoss1.png"
        alt=""
        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago</strong>
              <time title='22 de julho às 17:55' dateTime="2022-07-22 17:55:00">Cerca de 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>


        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div >
    </div >
  )
}     