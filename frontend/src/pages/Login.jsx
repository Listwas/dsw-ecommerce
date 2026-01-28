import NavBar from '../components/NavBar'
import styles from '../styles/Login.module.css'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <NavBar />
            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <h3> Masz konto? </h3>
                    <InputField width={400} placeholder='E-mail lub login' />
                    <InputField width={400} placeholder='Hasło' />
                    <div className={styles.align_fix}>
                        <Link to='/password_reset'> Nie pamiętam hasła </Link>
                        <Link to='/register'> Nie masz konta? </Link>
                    </div>
                    <Link to='/user_dashboard'>
                        <Button width={400} placeholder='Zaloguj się' />
                    </Link>
                </div>
            </div>
        </>
    )
}
