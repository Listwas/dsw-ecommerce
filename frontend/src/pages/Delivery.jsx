import NavBar from '../components/NavBar'
import Button from '../components/Button'
import styles from '../styles/Cart.module.css'
import ProductHistory from '../components/ProductHistory'
import img from '../assets/ps5.jpg'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'

export default function Delivery() {
    return (
        <>
            <NavBar page_header='Dostawa i płatność' />
            <div className={styles.products_box}>
                <div className={styles.wrapper}>
                    <div className={styles.delivery_section}>
                        <h3> Sposób dostawy </h3>
                        <div className={styles.delivery_option}>
                            <h4> Kurier 0zł</h4>
                            <span> Najwcześniej u ciebie: jutro </span>
                        </div>
                        <div className={styles.delivery_option}>
                            <h4> Odbiór w salonie 0zł </h4>
                            <span> Najwcześniej u ciebie: dzisiaj </span>
                        </div>
                    </div>

                    <div className={styles.address_section}>
                        <h3> Adres dostawy </h3>
                        <InputField placeholder='Imię i nazwisko' />
                        <InputField placeholder='Ulica i numer domu' />
                        <InputField placeholder='Kod pocztowy' />
                        <InputField placeholder='Miejscowość' />
                        <InputField placeholder='Telefon' />
                        <InputField placeholder='E-mail' />
                        <span className={styles.info_text}> Na ten e-mail wyślemy informacje o zamówieniu </span>
                    </div>
                </div>

                <div className={styles.summary}>
                    <ProductHistory
                        image={img}
                        alt='ps5'
                        product_name='playstation 5 pro'
                        price='1999.99'
                    />
                    <ProductHistory
                        image={img}
                        alt='ps5'
                        product_name='playstation 5 pro'
                        price='1999.99'
                    />

                    <div className={styles.button_wrapper}>
                        <Link to='/summary'>
                            <Button width='400' placeholder='Przejdź do podsumowania' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
