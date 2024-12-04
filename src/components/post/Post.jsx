import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from '../post/Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content}) {
    
    const [newCommentText, setNewCommentText] = useState('')
    const [comments, setComments] = useState([])

    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleNewCommentChange = (e) => {
        setNewCommentText(() => e.target.value)
        event.target.setCustomValidity("")
    }
    
    const handleNewComment = (e) => {
        e.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }   

    const deleteComment = (id) => {
        console.log(id)
        setComments(comments.filter((comment) => comment !== id))
    }

    const handleNewCommentInvalid = () => {
        event.target.setCustomValidity("Campo Obrigatório")
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateRelativeToNow} dateTime={publishedAt.toISOString()}>{publishedDateFormat}</time>
            </header>
            <div className={styles.content}>
                {content.map((line) => {
                    switch (line.type) {
                        case 'paragraph':
                            return <p key={line.content}>{line.content}</p>

                        case 'link':
                            return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.commentForm}>
                <strong>Deixe seu feeback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return <Comment key={comment} comment={comment} handleDeleteComment={() => deleteComment(comment)}/>
                })}
            </div>
        </article>
    )
}