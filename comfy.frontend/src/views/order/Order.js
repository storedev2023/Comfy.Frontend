import React, { useState, useEffect } from "react";
//Components
import Icon from "../../components/icon/icon";
import { deleteAllItemFromCart, deleteItemFromCart, setCountItemInCart } from "../../redux/reducers/cart-reducer";
import { calcDiscount, priceFormat } from "../../scripts";
import { useDispatch, useSelector } from "react-redux";
//styles
import './Order.scss'
import { Link, useNavigate } from "react-router-dom";
import { userService } from "../../service/UserService";
import { setUserAuth } from "../../redux/reducers/user-reducer";

const email_regexp = /^[A-Z0-9][A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const phone_regexp = /^380\d{9}$/;
const string = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇўЎ]+$/;
const address = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇўЎ0-9 ]+$/;


function Counter({ product_id, isAction, default_value }) {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteItemFromCart(product_id));
    }

    const [count, setCount] = useState(default_value)

    const updateCounter = (event) => {
        if (event.target.innerHTML === "+") {
            dispatch(setCountItemInCart({ productId: product_id, count: (count + 1) }))
            setCount(count + 1)
            isAction(count + product_id)
        }
        else {
            if (count === 1) {
                deleteProduct()
                return
            }
            dispatch(setCountItemInCart({ productId: product_id, count: (count - 1) }))
            setCount(count - 1)
            isAction(count + product_id)
        }
    }

    return (
        <>
            <div className="count" id="product-count">
                {count}
            </div>
            <div className="minus-btn unselectable" onClick={updateCounter}>
                --
            </div>
            <div className="plus-btn unselectable" onClick={updateCounter}>
                +
            </div>
        </>
    )
}


function Orders() {
    // eslint-disable-next-line
    const [updatePrice, setUpdatePrice] = useState("")
    const [accessToken, setAccessToken] = useState('')
    const navigate = useNavigate()

    const products = useSelector(state => state.cart.itemsInCart)
    const products_count = useSelector(state => state.cart.itemCounts)
    const user = useSelector(state => state.user.user_access_data)

    const totalPrice = products.reduce((acc, product) => acc += (product.price * products_count[products?.indexOf(product)].count), 0)
    const totalPriceDiscount = products.reduce((acc, product) => acc += (calcDiscount(product.price, product.discountAmount) * products_count[products?.indexOf(product)].count), 0)
    const totalProductCount = products_count.reduce((acc, product) => acc += product.count, 0)

    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(deleteItemFromCart(id));
    }

    useEffect(() => {
        if (products.length === 0) {
            navigate("/")
        }

    }, [products.length, navigate])


    const createMessage = (element, message) => {
        const nextElem = element.nextElementSibling
        if (nextElem !== null) {
            if (nextElem.classList.contains("error-message")) {
                nextElem.innerHTML = message
                return
            }
        }

        let message_element = document.createElement('div')
        message_element.classList.add("error-message")
        message_element.innerHTML = message
        element.after(message_element)
    }

    const checkAccessToken = async (response) =>{
        if(response.hasOwnProperty('newAccessToken'))
        {
          dispatch(setUserAuth({userId:user.userId, accessToken:response.newAccessToken, refreshToken:user.refreshToken}))
          setAccessToken(response.newAccessToken)
        }
      }

    const sentRequest = async (event) => {
        if (user.userId === "") {
            const message = "Щоб зробити замовлення, ви повинні бути авторизовані"
            createMessage(event.target, message)
            return
        }
        const user_data_block = document.querySelector(".user-data-block")
        const result = await check_valid_data(user_data_block)
        if (result === false) { return }
        else {
            const response = await userService.user_createNewOrder(result, user?.accessToken, user?.refreshToken)
            checkAccessToken(response)
            if(response === 200)
            {
                dispatch(deleteAllItemFromCart())
                navigate("/profile/")
            }
        }
    }

    const deleteAllErrorMessages  = async (user_data_block) => {
        const errorsMessages = Array.from(user_data_block.querySelectorAll(".error-message"))
        if (errorsMessages.length === 0) { return }
        errorsMessages.map(error => error.remove())
    }

    const check_valid_data = async (user_data_block) => {
        deleteAllErrorMessages(user_data_block)
        let answer = {
            userId: user.userId,
            productsIds: products_count.map(product => { return product.productId }),
            email: "",
            phoneNumber: "",
            name: "",
            surname: "",
            patronymic: "",
            city: "",
            address: "",
            userComment: user_data_block.querySelector("textarea").value,
            callToConfirm: false
        }

        const inputs = user_data_block.querySelectorAll("input")
        const result = Array.from(inputs).map(input => {
            if (input.value === "") {
                createMessage(input, "Поле не може бути порожнім")
                return false
            }

            if (input.name === "email") {
                if (!email_regexp.test(input.value)) {
                    createMessage(input, "Некоректний email")
                    return false
                }
                answer.email = input.value
                return
            }
            if (input.name === "phone") {
                if (!phone_regexp.test(input.value)) {
                    createMessage(input, "Некоректний номер")
                    return false
                }
                answer.phoneNumber = input.value
                return 
            }
            if (input.name === ("name")) {
                if (!string.test(input.value)) {
                    createMessage(input, "Некоректна строка")
                    return false
                }
                answer.name = input.value
                return
            }
            if (input.name === ("surname")) {
                if (!string.test(input.value)) {
                    createMessage(input, "Некоректна строка")
                    return false
                }
                answer.surname = input.value
                return
            }
            if (input.name === ("patronymic")) {
                if (!string.test(input.value)) {
                    createMessage(input, "Некоректна строка")
                    return false
                }
                answer.patronymic = input.value
                return
            }
            if (input.name === ("city")) {
                if (!string.test(input.value)) {
                    createMessage(input, "Некоректна строка")
                    return false
                }
                answer.city = input.value
                return
            }
            if (input.name === ("address")) {
                if (!address.test(input.value)) {
                    createMessage(input, "Некоректна строка")
                    return false
                }
                answer.address = input.value
                return
            }
            if (input.name === ("callToConfirm")) {
                answer.callToConfirm = input.checked
            }
        })
        
        if(result.includes(false)){
            return false
        }
        else{
            return answer
        }    
    }


    return (
        <div className="order-page">
            <div className="order-page-title">
                Оформити замовлення
            </div>
            <div className="order-page-body">
                <div className="info-block">
                    <div className="products-block">
                        <div className="products-block-title">
                            Ваше замовлення
                        </div>
                        <div className="products-list">
                            {products.map(product => (
                                <div className="products-list-product" key={product.id}>
                                    <div className="products-list-product-image">
                                            {product.hasOwnProperty("imageUrl")  
                                            ? <img src={product.imageUrl} alt="" />
                                            : <img src={product.images[0].url} alt="" />
                                            }
                                    </div>
                                    <div className="products-list-product-body">
                                        <div className="products-list-product-title-code">
                                            <div className="products-list-product-title">
                                                <Link to={`/product/${product.url}`}>{product.name}</Link>
                                            </div>
                                            <div className="products-list-product-code">
                                                Код: {product.code}
                                            </div>
                                        </div>
                                        <div className="products-list-product-counter">
                                            <Counter product_id={product.id} default_value={products_count[products?.indexOf(product)].count} isAction={setUpdatePrice} />
                                        </div>
                                        <div className="products-list-product-price">
                                            {product.discountAmount > 0 &&
                                                <div className="products-list-product-price-old">
                                                    <span>
                                                        {priceFormat(product.price * products_count[products?.indexOf(product)].count)} ₴
                                                    </span>
                                                </div>
                                            }
                                            <div className="products-list-product-price-current">
                                                {product.discountAmount > 0
                                                    ? <>{priceFormat(calcDiscount(product.price, product.discountAmount) * products_count[products?.indexOf(product)].count)}</>
                                                    : <>{priceFormat(product.price * products_count[products?.indexOf(product)].count)}</>
                                                }
                                                <span className="products-list-product-price-currency">

                                                    ₴
                                                </span>
                                            </div>
                                        </div>
                                        <div className="products-list-product-delete-btn" onClick={() => { deleteProduct(product.id) }}>
                                            <Icon id="delete-item-cart" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="user-data-block">
                        <div className="user-data-title">
                            Контактна інформація
                        </div>
                        <div className="contacts-inputs">
                            <div className="contact-div">
                                <div className="title">Пошта</div>
                                <input type="email" name="email" />
                            </div>
                            <div className="contact-div">
                                <div className="title">Номер телефону</div>
                                <input type="text" placeholder="380736343817" name="phone" />
                            </div>
                            <div className="contact-div">
                            </div>
                        </div>
                        <div className="contacts-inputs">
                            <div className="contact-div">
                                <div className="title">Ім`я</div>
                                <input type="text" name="name" />
                            </div>
                            <div className="contact-div">
                                <div className="title">Фамілія</div>
                                <input type="text" name="surname" />
                            </div>
                            <div className="contact-div">
                                <div className="title">По батькові</div>
                                <input type="text" name="patronymic" />
                            </div>
                        </div>
                        <div className="contacts-inputs">
                            <div className="contact-div">
                                <div className="title">Місто</div>
                                <input type="text" name="city" />
                            </div>
                            <div className="contact-div">
                                <div className="title">Адреса</div>
                                <input type="text" name="address" />
                            </div>
                            <div className="contact-div">
                            </div>
                        </div>
                        <div className="contacts-inputs">
                            <div className="contact-div-long">
                                <div className="title">Коментар до замовлення</div>
                                <textarea type="text" name="" />
                            </div>
                        </div>
                        <div className="contacts-inputs"> 
                            <div className="callback-inputs"> 
                            <input type="checkbox" name="callToConfirm" id="myCheckbox" className="custom-checkbox"/>
                            <label htmlFor="myCheckbox">Передзвонити після оформлення</label> 
                        </div> 
                        </div>  
                    </div>
                </div>
                <div className="total-block">
                    <div className="block">
                        <div className="total-title">Підсумок:</div>
                        <div className="product-counting">
                            <div className="products-count">{totalProductCount} товари на суму:</div>
                            <div className="products-prices">{priceFormat(totalPrice)} ₴</div>
                        </div>
                        <div className="product-discount">
                            <div className="discount-title">Економія: </div>
                            <div className="discount-prices">{priceFormat(totalPrice - totalPriceDiscount)} ₴</div>
                        </div>
                        <div className="payment">
                            <div className="payment-title">До сплати: </div>
                            <div className="payment-price">{priceFormat(totalPriceDiscount)} ₴ </div>
                        </div>
                        <div className="placing-order">
                            <button className="placing-order-button" type="" onClick={sentRequest}>Оформити</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;