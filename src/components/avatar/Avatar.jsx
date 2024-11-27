import styles from '../avatar/Avatar.module.css'
import style from '../../assets/styles.jpg'

export function Avatar() {
    return (
        <img src='https://github.com/lianderDev.png' className={styles.avatar} />
    )
}