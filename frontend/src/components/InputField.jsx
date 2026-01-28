import styles from '../styles/InputField.module.css'

export default function InputField({ placeholder, width }) {
    return (
        <>
            <input className={styles.input_field} type="text" placeholder={placeholder} style={{ width: `${width}px` }} />
        </>
    )
}
