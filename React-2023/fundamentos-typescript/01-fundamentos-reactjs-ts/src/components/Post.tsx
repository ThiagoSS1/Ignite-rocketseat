import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { ptBR } from 'date-fns/locale';
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post ({ post }: PostProps) {
    const [comments, setComments] = useState<string[]>([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtDateFormatted = format(new Date(post.publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateComment (event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
        console.log(comments)
    }

    function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        console.log('newCommentText')
    }


    function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        if (!event.target.validity.valid) {
            event.target.setCustomValidity('Esse campo é obrigatório')
        }
    }

    function deleteComment(commentToDelete: string) {
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
                    <Avatar src={post.author.avatarUrl} alt=''/>
                    <div className={styles.authorInfo}>
                        <strong >{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((item) => {
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

            {comments.length > 0 &&
            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}     
                    />
                    )
                })}
            </div>
            }
        </article>
    );
} 
