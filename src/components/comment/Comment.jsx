import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../comment/Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/lianderDev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Liander Vinicius</strong>
                            <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'> Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={15}/>
                        </button>
                    </header>
                    <p>Muito bom Liander, parabens!! 👏</p>
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