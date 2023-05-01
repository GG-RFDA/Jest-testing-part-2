// Импортируем axios
const axios = require('axios')

// Создаём класс Ajax
class Ajax {
    // Создаём статическую функцию echo, принимаюшую параметром data и возвращающую её же через setTimeout
    static echo(data) {
        // Возвращаем новый Promise, принимающий параметрами функции resolve и reject
        return new Promise((resolve, reject) => {
            // Оборачиваем в  setTimeout
            setTimeout(() => {
                // Если data определена, то вызываем функцию resolve с data
                if (data) {
                    resolve(data)
                    // Если же data не передавали, то вызываем функцию reject и передаём ошибку
                } else {
                    reject(new Error('ошибка'))
                }
                // Будем ждать 150 миллисекунд
            }, 150)
        })
    }
    
    // Создаём асинхронный метод get
    static async get() {
        // Оборачиваем в блок try...catch
        try {
            // Будем ждать, пока axios выполнить запрос на определённый URL
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            // Возвращаем значение data
            return response.data
        } catch (e) {
          // Сообщение с ошибкой будет выводиться в console.log
          console.log(e)
        }
    }
}

// Экспортируем класс Ajax
module.exports = Ajax