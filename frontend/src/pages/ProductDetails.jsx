import NavBar from '../components/NavBar'
import Button from '../components/Button'
import styles from '../styles/ProductDetails.module.css'

export default function ProductDetails() {
    return (
        <>
            <NavBar />
            <div className={styles.product_box}>
                <div className={styles.product_photo}>
                    <div></div>
                </div>
                <div className={styles.text_box}>
                    <div className={styles.product_text}>
                        <p> super awesome playstation 5 </p>
                        <span> 1999.99zł </span>
                        <Button width={300} height={70} />
                    </div>
                </div>
            </div>
            <div className={styles.product_description}>
                <h1> Opis produktu </h1>
                <ul>
                    <li><span>Typ produktu: </span> PlayStation 5 Pro</li>
                    <li><span>Dysk: </span> 2TB SSD </li>
                    <li><span>Gry: </span> ASTRO Playroom</li>
                    <li>
                        <span>W zestawie: </span>
                        Pad bezprzewodowy DualSense, Kabel USB, Kabel zasilający,
                        Kabel HDMI, Dwie stopki podstawy poziomej
                    </li>
                </ul>
            </div>
        </>
    )
}
