import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { ptBR } from 'date-fns/locale';
import React, { useState } from 'react';



export function Post ({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post bacana hein ?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateComment () {
        event.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
        console.log(comments)
    }

    function handleNewCommentChange (event) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        console.log('newCommentText')
    }


    function handleNewCommentInvalid (event) {
        if (!event.target.validity.valid) {
            event.target.setCustomValidity('Esse campo é obrigatório')
        }
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete
        })
        
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.trim().length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong >{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((item) => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}> <a href=''>{item.content} </a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe seu comentario aqui'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}     
                    />
                    )
                })}
            </div>
        </article>
    );
} 
