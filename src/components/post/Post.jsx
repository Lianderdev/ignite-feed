import { Comment } from '../comment/Comment'
import styles from '../post/Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src='https://github.com/lianderDev.png' />
                    <div className={styles.authorInfo}>
                        <strong>Liander Vinicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio às 08h13' dateTime='2022-05-11 08:13:30'> Públicado há 1h </time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de Inicar mais curso de programação, agora pela melhor plataforma de cursos desenvolvimento, a Rockseat.</p>
                <p>👉 {' '}<a href="#">Portfólio/LianderDev</a></p>
                <p>
                    <a href="#">#Code</a>{' '}
                    <a href="#">#Programing</a>{' '}
                    <a href="#">  #Happy</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feeback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}