import React from "react";
import style from'./404.module.scss'

function EmptyPage() {
  return (
    <>
      <div class={style.body}>
        <div class = {style.error}>
            <p>
                404
            </p>
        </div>
      </div>
    </>
  );
}

export default EmptyPage;
