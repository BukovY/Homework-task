import styles from'./IncorrectRequest.module.sass'
import React from "react";
import {Link} from "react-router-dom";

const IncorrectRequest = ({path}) => {
    return(
        <div className={styles.center}>
            <h1>Некорректный запрос</h1>
            <p>Пожалуйста проверьте корректность введенного запроса в строку браузера.</p>
            <p>Путь после <span>{path}</span> должен содержать только цифры</p>
            <p>Либо вернитесь на главную.</p>
            <Link to={'/'}>На главную</Link>
        </div>
    )
}

export default IncorrectRequest