import styles from '../styles/ProductHistory.module.css'

export default function ProductHistory({ image, alt, product_name, user_name, price, address, postal_code, city, telephone }) {
    return (
        <>
            <div className={styles.product_box}>
                <div className={styles.image}>
                    <img src={image} alt={alt} />
                </div>
                <div className={styles.product_text}>
                    <p> {product_name} </p>
                    <p> {price}zł </p>
                </div>
                <div className={styles.product_history}>
                    <ul>
                        <li> {user_name} </li>
                        <li> {address} </li>
                        <li> {postal_code}, {city} </li>
                        <li> {telephone} </li>
                    </ul>
                </div>
                <hr />
            </div>
        </>
    )
}
