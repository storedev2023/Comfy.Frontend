import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'


import Icon from "../icon/icon";

import './authorization.scss'
import { userService } from "../../service/UserService";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth, setUserData } from "../../redux/reducers/user-reducer";

const email_regexp = /^[A-Z0-9][A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

function Authorization({
    btn_className,
    isBtnActive,
}) {

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const user_access_data = useSelector(state => state.user.user_access_data)
    const user_data = useSelector(state => state.user.user_data)

    const [overlayProfile, setOverlayProfile] = useState(false)
    const [isRegistration, setIsRegistration] = useState(false)

    // Password show/hide  
    const [isShowPass, setIsShowPass] = useState(false)

    const passwordLogic = (event) => {
        setIsShowPass(!isShowPass)
        if (isShowPass) {
            document.querySelector(".input-password").setAttribute("type", "password")
        }
        else {
            document.querySelector(".input-password").setAttribute("type", "text")
        }
    }

    const authorizationModelLogic = () => {
        setIsRegistration(false)
        setOverlayProfile(!overlayProfile)
        if (overlayProfile && !isRegistration) {
            document.querySelector(".input-password").setAttribute("type", "password")
            setIsShowPass(false)
        }
    }

    const setErrorMessage = (input, message) => {
        const nextElem = input.nextElementSibling

        if (nextElem !== null) {
            if (nextElem.classList.contains("error-message")) {
                nextElem.innerHTML = message
                return
            }
        }

        let message_element = document.createElement('div')
        message_element.classList.add("error-message")
        message_element.innerHTML = message
        input.after(message_element)

    }

    const deleteAllErrorMessages = (auth_block) => {
        const errorsMessages = Array.from(auth_block.querySelectorAll(".error-message"))
        if (errorsMessages.length === 0) { return }
        errorsMessages.map(error => error.remove())
    }

    const fetchCheckCredentialsAndTwoFactor = async (user) => {
        const isUser = await userService.user_checkCredentialsAndTwoFactor(user)
        let result = isUser.validCredentials
        if (isUser.validCredentials) {
            if (isUser.twoFactorEnabled) {
                const user_data_t = await userService.user_signIn_Password({ userId: isUser.userId, code: isUser.code })
                dispatch(setUserAuth({ userId: user_data.userId, refreshToken: user_data_t.refreshToken, accessToken: user_data_t.accessToken }))
            }
            else {
                const user_data_t = await userService.user_signIn_Password(user)
                console.log(user_data_t)
                dispatch(setUserAuth({ userId: user_data_t.userId, accessToken: user_data_t.accessToken, refreshToken: user_data_t.refreshToken }))
                dispatch(setUserData(await userService.user_data(user_data_t.userId, user_data_t.accessToken, user_data.refreshToken)))
            }
        }
        return await result
    }



    const singIn = async () => {
        const auth_block = document.querySelector(".auth-block-form-inputs")

        deleteAllErrorMessages(auth_block)

        const inputs = auth_block.querySelectorAll("input")
        const data = Array.from(inputs).map((input) => {
            if (input.value.trim() === '') {
                setErrorMessage(input, "Поле не може бути порожнім")
                return
            }
            return [input.type === "email" ? "email" : "password", input.value]
        })

        if (data.indexOf(undefined) != -1) {
            return
        }

        const data_obj = Object.fromEntries(data)
        if (!email_regexp.test(data_obj.email)) {
            setErrorMessage(...Array.from(inputs).filter(input => input.type === "email"), "Некоректний email")
            return
        }
        else {
            const result = await fetchCheckCredentialsAndTwoFactor(data_obj)
            if (!result) {
                setErrorMessage(...Array.from(inputs).filter(input => input.type === "email"), "Такого користувача не існує, перевірте введені дані")
            }
            else {
                deleteAllErrorMessages(auth_block)
                authorizationModelLogic()
                navigation("/profile")
            }
        }
    }



    console.log()

    return (
        <>
            {isBtnActive &&
                <>
                    {(user_access_data?.userId === "") ?
                        <div className={btn_className} onClick={() => { setOverlayProfile(true) }}>
                            <span>
                                Увійти
                            </span>
                        </div>
                        : <>
                            {user_data?.name !== undefined &&
                                <Link to={`/profile/`} reloadDocument={true} className="active-profile-link">
                                    <div className="active-profile">
                                        {user_data?.name[0]?.toUpperCase()}
                                    </div>
                                </Link>
                            }</>
                    }
                </>
            }
            {overlayProfile &&
                <div className="Authorization">
                    <CSSTransition in={overlayProfile} classNames="overlay" timeout={300} unmountOnExit>
                        <div className="auth-modal">
                            <div className="auth-modal-overlay" onClick={authorizationModelLogic}>
                            </div>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={overlayProfile} classNames="auth" timeout={300} unmountOnExit>
                        <div className="auth-modal">
                            <div className="auth-modal-dialog" >
                                <div className="auth-block" >
                                    <div className="auth-block-picture">
                                        <div className="auth-block-picture-figure">
                                            <div className="auth-block-picture-figure-triangle "></div>
                                            <div className="auth-block-picture-figure-circle "></div>
                                        </div>
                                        <div>
                                            <div className="auth-block-picture-figure-rectangle "></div>
                                        </div>
                                    </div>

                                    <div className="auth-block-form">
                                        <div className="auth-block-form-exit" onClick={authorizationModelLogic}>
                                            <Icon id="close" classList="auth-close" />
                                        </div>
                                        {!isRegistration ? <>
                                            <div className="auth-block-form-title">
                                                Увійти
                                            </div>
                                            <div className="auth-block-form-inputs">
                                                <div className="auth-block-form-inputs-email auth-form-inputs">
                                                    <span>Поштова адресса</span>
                                                    <input type="email" className="input-email" />
                                                </div>
                                                <div className="auth-block-form-inputs-password auth-form-inputs">
                                                    <span>Пароль</span>
                                                    <input type="password" className="input-password" />
                                                    <div className="inputs-password-control" onClick={passwordLogic}>
                                                        {isShowPass === true
                                                            ? <Icon id="hide-pass" />
                                                            : <Icon id="show-pass" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="auth-block-form-login-btn" onClick={singIn}>
                                                <span>
                                                    Увійти
                                                </span>
                                            </div>
                                            <div className="auth-block-form-register">
                                                <span>Якщо у вас все ще нема профелю, будь-ласка </span>
                                                <span className="form-register-span" onClick={() => { setIsRegistration(true) }}>Зареєструватися</span>
                                            </div>
                                            <div className="auth-block-form-google-btn">
                                                <span>Увійти за допомогою : </span>
                                                <span className="auth-google-btn">Google</span>
                                            </div>
                                        </>
                                            : <>
                                                <div className="auth-block-form-title-register">
                                                    Зареєструватися
                                                </div>
                                                <div className="registration-block-form-inputs">
                                                    <div className="auth-block-form-inputs-email auth-form-inputs">
                                                        <span>Ваш никнейм</span>
                                                        <input type="email" className="input-email" />
                                                    </div>
                                                    <div className="auth-block-form-inputs-email auth-form-inputs">
                                                        <span>Поштова адресса</span>
                                                        <input type="email" className="input-email" />
                                                    </div>
                                                    <div className="auth-block-form-inputs-email auth-form-inputs">
                                                        <span>Пароль</span>
                                                        <input type="password" className="input-password" />
                                                        <div className="inputs-password-control" onClick={passwordLogic}>
                                                            {isShowPass === true
                                                                ? <Icon id="hide-pass" />
                                                                : <Icon id="show-pass" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="auth-block-form-inputs-password auth-form-inputs">
                                                        <span>Повтор паролю</span>
                                                        <input type="password" className="input-password" />
                                                        <div className="inputs-password-control" onClick={passwordLogic}>
                                                            {isShowPass === true
                                                                ? <Icon id="hide-pass" />
                                                                : <Icon id="show-pass" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="auth-block-form-login-btn">
                                                    <Link to={`/profile`} reloadDocument={true}>
                                                        Зареєструватися
                                                    </Link>
                                                </div>
                                                <div className="auth-block-form-register">
                                                    <span>Якщо у вас все вже э профель, будь-ласка </span>
                                                    <span className="form-register-span" onClick={() => { setIsRegistration(false) }}>Авторизуйтесь</span>
                                                </div>
                                            </>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            }
        </>
    );
}

export default Authorization;
