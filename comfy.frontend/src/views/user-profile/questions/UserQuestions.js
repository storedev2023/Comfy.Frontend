import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../../components/card/Card";
import  Icon                from "../../../components/icon/icon";
//styles
import './UserQuestions.scss'


function Questions() {
  return (
            <div className="questions-block">
              <div className="questions-title">
                  Ваші питання
                </div>
                <div className="questions">
                    <div className="question">
                      <div className="question-title">
                        Питання про товар 
                      </div> 
                      <div className="question-product-name">
                      Vestfrost CX263WB
                      </div>
                      <div className="border"></div>
                      <div className="question-body">
                        <div className="rtitle">
                          Питання
                        </div> 
                        <div className="text">
                            Холодильник Vestfrost CX263W Предусмотрена-ли функция "защита от перепада напряжения"
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="question-body">
                        <div className="rtitle">
                            Відповідь
                        </div> 
                        <div className="text">
                            Нема
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="question-data">
                        <div className="question-data">
                          23.06.2024
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
  );
}

export default Questions;