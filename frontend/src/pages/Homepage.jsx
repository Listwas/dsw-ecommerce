import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import '../styles/Homepage.css'

export default function Homepage() {
    return (
        <>
            <NavBar page_header='Nasze Produkty' />
            <div className='product_cards'>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>
                <Link to="product_details">
                    <ProductCard product_title='product title exmaple' product_price='1234.99' />
                </Link>

            </div>
        </>
    )
}

