import styles from '../styles/InputField.module.css'

export default function InputField({ width, ...props }) {
    return (
        <>
            <input
                className={styles.input_field}
                type="text"
                style={{ width: `${width}px` }} {...props} />
        </>
    )
}
