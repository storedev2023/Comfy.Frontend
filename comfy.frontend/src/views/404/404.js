import React from "react";
import style from'./404.module.scss'

function EmptyPage() {
  return (
    <>
      <div className={style.body}>
        <div className = {style.error}>
            <p>
                404
            </p>
        </div>
      </div>
    </>
  );
}

export default EmptyPage;
