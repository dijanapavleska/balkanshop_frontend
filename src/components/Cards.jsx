import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../CartContext";


const Cards = () => {

    const { cart, setCart } = useContext(CartContext)


    // fetching data from API endpoint (products)
    const [productData, setProductData] = useState([])

    const loadProductData = async () => {

        const response = await fetch('http://laravel-shop.test/api/list-products')

        const data = await response.json();

        setProductData(data.data);
        console.log(data)
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





    // increment and decrement button for quanity

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
<<<<<<< HEAD

            {
                productData.map(product => {
                    return (< div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
                        <div className="card h-100 shadow rounded">
                            <div class="thumbnail" style={{ backgroundImage: `url(${product.img})` }}></div>
                            <img src={product.img} alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{product.name}</h5>
                                    <span className="fw-bolder">Total price: {product.price}</span>
                                </div>
                                <div className="">
                                    <p className="card-text">{product.description}</p>
                                </div>
                                <Button onClick={() => {
                                    increment()
                                }}>+</Button>
                                <span className="fs-3">{amount}</span>
                                <Button onClick={() => {
                                    decrement()
                                }}>-</Button>
                            </div>
                            <div className="d-flex  justify-content-end mt-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-sm btn-outline-success" onClick={() => {
                                        addToCart()
                                    }}>Add to Cart</button>
                                </div>
                            </div>
=======
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
                <div className="card h-100 shadow rounded">
                    <div className="thumbnail" style={{ backgroundImage: `url(${props.img})` }}></div>
                    {/* <img src={props.img} alt="" className="card-img-top" /> */}
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{props.title}</h5>
                            <span className="fw-bolder">${props.price}</span>
>>>>>>> dijana
                        </div>
                    </div >)

                })


            }





        </>
    )
}

export default Cards




