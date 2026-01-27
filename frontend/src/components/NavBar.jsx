import styles from '../styles/NavBar.module.css'

export default function NavBar({ page_header }) {
    return (
        <>
            <nav className={styles.center}>
                <div className={styles.left}>
                    <h1>dsw-ecommerce</h1>
                </div>
                <div className={styles.right}>
                    <button className={styles.profile}>Profile</button>
                    <button className={styles.cart}></button>
                </div>
            </nav>

            <header>
                <h1>{page_header}</h1>
            </header>
        </>
    )
}
