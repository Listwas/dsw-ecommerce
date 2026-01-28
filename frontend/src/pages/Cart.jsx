import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import Button from '../components/Button'
import styles from '../styles/Cart.module.css'
import img from '../assets/ps5.jpg'
import { Link } from 'react-router-dom'

export default function Cart() {
    return (
        <>
            <NavBar page_header='Koszyk' />
            <div className={styles.products_box}>
                <div className={styles.wrapper}>
                    <ProductList
                        image={img}
                        alt='ps5 photo'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />

                    <ProductList
                        image={img}
                        alt='ps5 photo'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />

                    <ProductList
                        image={img}
                        alt='ps5 photo'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />
                </div>
                <div className={styles.summary}>
                    <div>
                        <p> Do zapłaty </p>
                    </div>
                    <div>
                        <p> 1999.99zł </p>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Link to='/delivery'>
                            <Button width='400' placeholder='Przejdź do dostawy' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
