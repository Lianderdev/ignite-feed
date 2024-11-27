import styles from '../sidebar/Sidebar.module.css'
import wallpaper from '../../assets/profile-wallpaper.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={wallpaper} className={styles.cover} />

            <div className={styles.profile}>
                <Avatar />
                <div className={styles.author}>
                    <strong>Liander Vinicius</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={15}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}