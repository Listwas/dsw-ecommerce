import styles from '../styles/Button.module.css'
import { Link } from 'react-router-dom'

export default function Button({ width, height, placeholder }) {
    return (
        <>
            <div>
                <button className={styles.button_style} style={{ width: `${width}px`, height: `${height}px` }}> {placeholder} </button>
            </div>
        </>

    )
}
