// Подключаем axios
const axios = require('axios')
// Получаем класс Ajax
const Ajax = require('./async')
// Чтобы управлять всеми элементами, jest необходимо с помощью функции mock замокать
jest.mock('axios')

describe('Класс Ajax: функция echo', () => {

    // Создаём сценарий, где функция должна вернуть значение async
    test('должна вернуть значение async', async () => {
        // Создаём переменную result, где помещаем Ajax.echo('какая-то data')
        const result = await Ajax.echo('какая-то data')
        // Ожидаем, что переменная result должна равняться строке 
        expect(result).toBe('какая-то data')
    })
    
    // Создаём сценарий, где функция должна возвращать значение с промисом
    test('должна возвращать значение с промисом', () => {
        // Чтобы Jest знал, что нужно дождаться какого-то промиса, его необходимо вернуть
        return Ajax.echo('какая-то data').then(data => {
            // Ожидаем, что data должна равняться строке
            expect(data).toBe('какая-то data')
        })
    })
    
    // Создаём сценарий, где функция должна поймать ошибку с промисом
    test('должна поймать ошибку с промисом', () => {
      return Ajax.echo().catch(err => {
        // Ожидаем, что переменная err является экземпляром класса Error
        expect(err).toBeInstanceOf(Error)
        })
    })

    // Создаём сценарий, где функция должна поймать ошибку с промисом, но уже при помощи async/await
    test('должна поймать ошибку с промисом', async () => {
      // Оборачиваем в блок try...catch
      try {
       await Ajax.echo()
      } catch (e) {
        // Ожидаем, что сообщение с ошибкой будет равно строке
        expect(e.message).toBe('ошибка')
      }  
    })
})

describe('Функция Ajax: метод GET', () => {
  // Создаём 2 переменные: response и todos
  let response
  let todos

  // Создаём функцию beforeEach
  beforeEach(() => {
    // Создаём массив todos и заполняем некоторыми данными
    todos = [
      {id: 1, title: 'Todo 1', completed: false}
    ]
     
    response = {
      // Есть некоторое поле data
      data: {
        // В поле data помещаем ключ todos
        todos
      }
    }
  })
 
  // Создаём сценарий, где функция должна возвращать data с бэкенда
  test('должна возвращать data с бэкенда', () => {
    /*
     * Обращаёмся к axios, где вызываем метод get, а затем функцию mockReturnValue.
     * В качестве возвращаемого значения указываем response.
     */
    axios.get.mockReturnValue(response)
    /*
     * Обращаемся к Ajax и указываем, что выполняем метод get.
     * Когда он выполнится, то получаем некоторую data.
     */
    return Ajax.get().then(data => {
      // Ожидаем, что data.todos должна равняться массиву todos
      expect(data.todos).toEqual(todos)
    })
  })
})