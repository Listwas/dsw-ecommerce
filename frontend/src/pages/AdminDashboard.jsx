import NavBar from '../components/NavBar'
import Button from '../components/Button'
import ProductHistory from '../components/ProductHistory'
import styles from '../styles/Admin_User_Dashboard.module.css'
import img from '../assets/ps5.jpg'
import ProductList from '../components/ProductList'

export default function AdminDashboard() {
    return (
        <>
            <NavBar />

            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <h1>Lista produktów</h1>
                    <ProductList
                        image={img}
                        alt='ps5'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />

                    <ProductList
                        image={img}
                        alt='ps5'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />

                    <ProductList
                        image={img}
                        alt='ps5'
                        product_name='playstation 5 pro'
                        product_price='1999.99'
                        product_quantity='10'
                    />
                    <Button width={400} placeholder='Dodaj Produkt' />
                    <h1> Historia zamówień </h1>
                    <ProductHistory
                        image={img}
                        alt='ps5'
                        name='andrzej'
                        product_name='play station 5 pro'
                        price='1999.9'
                        address='warszawska'
                        postal_code='51-555'
                        city='wrocław'
                        telephone='12345678'
                    />

                    <ProductHistory
                        image={img}
                        alt='ps5'
                        name='andrzej'
                        product_name='play station 5 pro'
                        price='1999.9'
                        address='warszawska'
                        postal_code='51-555'
                        city='wrocław'
                        telephone='12345678'
                    />
                </div>
            </div>
        </>
    )
}


