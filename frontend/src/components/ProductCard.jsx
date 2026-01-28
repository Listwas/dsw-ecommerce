import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product_title, product_price, product_image }) {
    return (
        <div className={styles.card_box}>
            <div className={styles.product_photo}>
                <img src={product_image} alt='ps5 photo' />
            </div>
            <div className={styles.product_description}>
                <h4> {product_title} </h4>
                <p> {product_price}zł </p>
            </div>
        </div>
    )
}
