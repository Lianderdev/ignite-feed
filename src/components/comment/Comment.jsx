import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../comment/Comment.module.css'
import { Avatar } from '../avatar/Avatar'
import { useState } from 'react'

export function Comment({comment, handleDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    const handleLikeComent = () => {
        setLikeCount((prevLikeCount) => prevLikeCount + 1)
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/Edugon0.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo</strong>
                            <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'> Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={15}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComent}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}