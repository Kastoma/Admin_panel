import React, {useState} from "react"
// import mysql from 'mysql'

const Login = () =>{
    const {username, setUserName} = useState('')
    const {password, setPassword} = useState('')
    // const sendToMySQL = ()=>{
    //     const connection = mysql.createConnection({
    //         host: 'localhost',   // Адрес хоста базы данных
    //         user: 'root',    // Имя пользователя базы данных
    //         password: '', // Пароль пользователя базы данных
    //         database: 'admin_panel' // Имя базы данных
    //       });
          
    //       // Проверка подключения
    //       connection.connect(function(err) {
    //         if (err) {
    //           console.error('Ошибка подключения: ' + err.stack);
    //           return;
    //         }
    //         console.log('Подключено к базе данных MySQL с идентификатором ' + connection.threadId);
    //       });
          
    // }
    
    return(
        <div>
            {/* <p>Username</p>
            <input name="username" onChange={setUserName}/>
            <p>Password</p>
            <input name="password" onChange={setPassword}/>
            <button >Login</button> */}
        </div>
    )
 }
export default Login