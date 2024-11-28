import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from '../post/Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {

    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([
        'oi liander'
    ])

    const handleNewComment = (e) => {
        e.preventDefault()
        setComments([...comments, comments.length + 1])
    }

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
                            return <p>{line.content}</p>

                        case 'link':
                            return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.commentForm}>
                <strong>Deixe seu feeback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return <Comment comment={comment}/>
                })}
            </div>
        </article>
    )
}