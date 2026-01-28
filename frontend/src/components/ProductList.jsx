import styles from '../styles/Admin_User_Dashboard.module.css'
import s from '../styles/ProductList.module.css'

export default function ProductList({ image, alt, product_name, product_price, product_quantity }) {
    return (
        <div className={styles.center}>
            <div className={styles.wrapper}>
                <div className={s.product_box}>
                    <div className={s.product_photo}>
                        <img src={image} alt={alt} />
                    </div>

                    <div className={s.product_text}>
                        <p>{product_name}</p>
                    </div>

                    <div className={s.product_price}>
                        <p>{product_price}zł</p>
                    </div>

                    <div className={s.product_quantity}>
                        <p>{product_quantity} in stock </p>
                    </div>

                    <div>
                        <button className={s.edit_button} >Usuń</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
