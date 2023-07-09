import React, { useEffect, useState } from "react";

//styles
import './UserPersonalData.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function UserPersonalData() {

  const [isEdit, setIsEdit] = useState(false)

  const editUserData = () => {

  }

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user_data)


  return (
    <div className="personal-data-page">
      <div className="personal-data-title">
        <span>Ваші персональні дані</span>
      </div>
      {isEdit ?
        <div className="personal-data-info-edit">
          <div className="personal-data-info___edit">
            <div className="personal-data-info-title">
              <span>Особисті дані:</span>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Никнейм:
              </div>
              <div className="input">
                <input defaultValue={user.name} />
              </div>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Пошта:
              </div>
              <div className="input">
                <input defaultValue={user.email} />
              </div>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Номер телефону:
              </div>
              <div className="input">
                <input defaultValue={user.phoneNumber} />
              </div>
            </div>
          </div>
          <div className="personal-data-info-edit-btn">
            <div className="personal-data-info-edit-btn-cancel" onClick={() => { setIsEdit(false) }}>
              Скасувати
            </div>
            <div className="personal-data-info-edit-btn-save">
              Зберегти
            </div>
          </div>
        </div>
        : <div className="personal-data-info">
          <div className="personal-data___info">
            <div className="personal-data-info-title">
              <span>Особисті дані:</span>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Никнейм:
              </div>
              <div className="text">
                {user.name}
              </div>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Пошта:
              </div>
              <div className="text">
                {user.email !== null  ? user.email : <>Не вказано</>}
              </div>
              <div className="status">
                {user.emailConfirmed
                  ? <>Підтверджено</>
                  : <>Не підтверджено</>}
              </div>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Номер телефону:
              </div>
              <div className="text">
                {user.phoneNumber !== null  ? user.email : <>Не вказано</>}
              </div>
              <div className="status">
                {user.phoneNumberConfirmed
                  ? <>Підтверджено</>
                  : <>Не підтверджено</>}
              </div>
            </div>
            <div className="personal-data-info-row">
              <div className="label">
                Двофакторний захист:
              </div>
              <div className="text">
                {user.twoFactorEnabled
                  ? <>Підтверджено</>
                  : <>Вимкнено</>}
              </div>
              {!user.twoFactorEnabled &&
                <Link to={"/profile/twoFactor"} className="factor-link">
                  Увімкнути
                </Link>}
            </div>
          </div>
          <div className="personal-data-edit" onClick={()=>setIsEdit(true)}>
            РЕДАГУВАТИ ПЕРСОНАЛЬНІ ДАННІ
          </div>
        </div>
      }

    </div>
  );
}

export default UserPersonalData;