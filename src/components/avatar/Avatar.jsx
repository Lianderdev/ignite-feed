import styles from '../avatar/Avatar.module.css'
import style from '../../assets/styles.jpg'

export function Avatar({ src, hasBorder = true }) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}