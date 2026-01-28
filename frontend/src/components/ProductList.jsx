import { useState } from 'react'
import s from '../styles/ProductList.module.css'

export default function ProductList({ image, alt, product_name, product_price, product_quantity, showDropdown = true }) {
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    return (
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
                {showDropdown ? (
                    <select
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(e.target.value)}
                        className={s.quantity_select}
                    >
                        {[...Array(Math.min(product_quantity, 10))].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                ) : (
                    <p>{product_quantity} in stock</p>
                )}
            </div>
            <div>
                <button className={s.edit_button}>Usuń</button>
            </div>
        </div>
    )
}
