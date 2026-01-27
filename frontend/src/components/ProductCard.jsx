import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product_title, product_price }) {
    return (
        <div className={styles.card_box}>
            <div className={styles.product_photo}>

            </div>
            <div className={styles.product_description}>
                <h4> {product_title} </h4>
                <p> {product_price}zł </p>
            </div>
        </div>
    )
}
