import NavBar from '../components/NavBar'
import styles from '../styles/Login.module.css'
import InputField from '../components/InputField'
import Button from '../components/Button'

export default function AdminLogin() {
    return (
        <>
            <NavBar />
            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <h3> Admin login </h3>
                    <InputField width={400} placeholder='E-mail lub login' />
                    <InputField width={400} placeholder='Hasło' />
                    <Button width={400} placeholder='Zaloguj się' />
                </div>
            </div>
        </>
    )
}
