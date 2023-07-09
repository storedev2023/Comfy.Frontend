import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Components
import Icon from "../../../components/icon/icon";
import Preloader from "../../../components/preloader/Preloader";
import { editDateFormat } from "../../../scripts";
//styles
import './UserQuestions.scss'


function Questions() {

  const user = useSelector(state => state.user.user_access_data)
  const user_questions = useSelector(state => state.user.user_questions)


  if(user_questions.userId === "")
  {
    return( <Preloader/>)
  }
  else{
    return (
      <div className="questions-block">
        <div className="questions-title">
            Ваші питання
        </div>
        <div className="questions-list">
          {user_questions?.questions.length !== 0 ? 
          <>{user_questions?.questions.map(question => (
              <div className="questions-list-question-info"  key={question.id}>
                <div className="questions-list-question-title">
                <Link to={`/product/${question.productUrl}`} reloadDocument={true}>{question.productName}</Link>   
                </div>
                <div className="questions-list-question-text">
                  {question.text}
                </div>
                <div className="questions-list-question-data">
                  <span>Дата створення:</span> {editDateFormat(question.createdAt)}
                </div>
              </div>
          ))}
          </>
          :<div className="empty-list">
            У вас немає питань
          </div>
        }
        </div>  
        
    </div>
    );
  }

}

export default Questions;