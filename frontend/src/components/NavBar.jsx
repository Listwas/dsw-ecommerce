import styles from '../styles/NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar({ page_header }) {
    return (
        <>
            <nav className={styles.center}>
                <div className={styles.left}>
                    <Link to="/">
                        <h1>dsw-ecommerce</h1>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Link to='/login'>
                        <button className={styles.profile}>Profile</button>
                    </Link>
                    <Link to="/cart">
                        <button className={styles.cart}></button>
                    </Link>
                </div>
            </nav>

            <header>
                <h1>{page_header}</h1>
            </header>
        </>
    )
}
