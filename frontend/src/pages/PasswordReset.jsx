import NavBar from '../components/NavBar'
import styles from '../styles/Login.module.css'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function PasswordReset() {
    return (
        <>
            <NavBar />
            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <h3> Nie pamiętasz hasła? </h3>
                    <span className={styles.support_text}> Jeśli na ten e-mail jest założone konto, to wyślemy na niego wiadomość </span>
                    <InputField width={600} placeholder='E-mail' />
                    <Button width={600} placeholder='Odzyskaj hasło' />
                </div>
            </div>
        </>
    )
}
