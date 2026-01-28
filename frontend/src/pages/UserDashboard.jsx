import NavBar from '../components/NavBar'
import InputField from '../components/InputField'
import Button from '../components/Button'
import ProductHistory from '../components/ProductHistory'
import styles from '../styles/Admin_User_Dashboard.module.css'
import img from '../assets/ps5.jpg'

export default function UserDashboard() {
    return (
        <>
            <NavBar />

            <div className={styles.center}>
                <div className={styles.wrapper}>
                    <h1> Ustawienia Konta </h1>
                    <InputField placeholder='Login' />
                    <InputField placeholder='E-mail' />
                    <InputField placeholder='Telefon' />
                    <InputField placeholder='Hasło' />
                    <Button width={600} placeholder='Zatwierdź zmiany' />
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


// image, alt, user_name, product_name, price, address, postal_code, city, telephone 
