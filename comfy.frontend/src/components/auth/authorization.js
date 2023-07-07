import React, { useState } from "react";
import { Link} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'


import Icon from "../icon/icon";

import './authorization.scss'



function Authorization() {
    // Password show/hide  
    const [isShowPass, setIsShowPass] = useState(false)
    const passwordLogic  = () => {
        setIsShowPass(!isShowPass)
        if(isShowPass){
            document.querySelector(".input-password").setAttribute("type","password")
        }
        else{
            document.querySelector(".input-password").setAttribute("type","text")
        }
    }

    const [overlayProfile, setOverlayProfile] = useState(false)
    const authorizationModelLogic = () =>{
        setOverlayProfile(!overlayProfile)
        if(overlayProfile) 
        {  
            document.querySelector(".input-password").setAttribute("type","password")
            setIsShowPass(false) 
        }
    }


    return (
        <div className="Authorization">
            {console.log("auth file")}
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
                                <div className="auth-block-form-title">
                                    <Link className="header-bottom-profile-link" to={`/profile`} reloadDocument={true}> 
                                        Увійти
                                    </Link>
                                </div>
                                <div className="auth-block-form-inputs">
                                    <div className="auth-block-form-inputs-email auth-form-inputs">
                                        <span>Поштова адресса</span>
                                        <input type="email" className="input-email" />
                                    </div>
                                    <div className="auth-block-form-inputs-password auth-form-inputs">
                                        <span>Пароль</span>
                                        <input type="password" className="input-password" />
                                        <a className="inputs-password-control" onClick={passwordLogic}>
                                            
                                           {isShowPass === true 
                                            ? <Icon id="hide-pass"/>
                                            : <Icon id="show-pass"/> 
                                            }
                                        </a>
                                    </div>
                                </div>
                                <div className="auth-block-form-login-btn">
                                    <button>Увійти</button>
                                </div>
                                <div className="auth-block-form-forgot-pass">
                                    <span>Забули пароль? Натисніть </span>
                                    <span className="forgot-pass-span">сюды </span>
                                </div>
                                <div className="auth-block-form-register">
                                    <span>Якщо у вас все ще нема профелю, будь-ласка </span>
                                    <span className="form-register-span">Зареєструватися</span>
                                </div>
                                <div className="auth-block-form-google-btn">
                                    <span>Увійти за допомогою : </span>
                                    <span className="auth-google-btn">Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Authorization;
