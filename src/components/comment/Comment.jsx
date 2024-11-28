import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../comment/Comment.module.css'
import { Avatar } from '../avatar/Avatar'

export function Comment({comment}) {
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

                        <button title='Deletar comentário'>
                            <Trash size={15}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}