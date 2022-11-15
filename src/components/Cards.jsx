import { useState, useEffect, useContext } from "react";
import CartContext from "../CartContext";


const Cards = () => {

    const { cart, setCart } = useContext(CartContext)



    const [productData, setProductData] = useState([])

    const loadProductData = async () => {

        const response = await fetch('http://laravel-shop.test/api/list-products')

        const data = await response.json();

        setProductData(data.data);
        // console.log(data)
    }

    useEffect(() => {
        loadProductData()
    }, [])


    // add products to cart

    const addToCart = () => {
        setCart([
            ...cart,
            [
                `${productData.name}`,
                `${productData.img}`,
                `${productData.description}`,
                `${productData.price}`,
                `${productData.stock}`,
            ],
        ])
    }


    // increment and decrement button

    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(Number(productData.price))

    const increment = () => {
        setAmount(Math.min(1000, amount + 1))
        setPrice(Math.min(Number(productData.price) * 1000, Number(productData.price) + price))
        // props.parentCallback(price)

        //###REDUCER    dispatch({ type: "increment" })

    }

    const decrement = () => {
        setAmount(Math.max(0, amount - 1))
        setPrice(Math.max(0, price - Number(productData.price)))
        //###REDUCER    dispatch({ type: "decrement" })
    }



    return (

        <>

            {
                productData.map(product => {
                    return (< div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
                        <div className="card h-100 shadow rounded">
                            <div class="thumbnail" style={{ backgroundImage: `url(${product.img})` }}></div>
                            <img src={product.img} alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{product.name}</h5>
                                    <span className="fw-bolder">${product.price}</span>
                                </div>
                                <div className="">
                                    <p className="card-text">{product.stock}</p>
                                </div>
                                <div className="d-flex  justify-content-end mt-4">
                                    <button onClick={() => {
                                        increment()
                                    }}>+</button>
                                    <button onClick={() => {
                                        decrement()
                                    }}>-</button>
                                    <button className="btn btn-sm btn-outline-success" onClick={() => {
                                        addToCart()
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div >)

                })


            }





        </>
    )
}

export default Cards