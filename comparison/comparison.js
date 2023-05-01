// Создаём функцию, куда будем передавать некоторое значение
function expect(value) {
    // Возвращаем из функции объект, у которого будут некоторые ключи
    return {
        // toBe - это функция, которая принимает некоторое значение exp
        toBe: exp => {
            // Создаём условие, где в случае, если value совпадает с exp, то выводим сообщение Success
            if (value === exp) {
                console.log('Success!')
                // В обратном случае выводим сообщение об ошибке
            } else {
                console.error(`Value is ${value}, but expectation us ${exp}!`)
            }
        }
    }
}

// Создаём функцию сложения чисел
const sum = (a, b) => a + b

// Создаём функцию, возвращаюшую NULL
const nativeNull = () => null

// Экспотируем объект, у которого будут следующие ключи: sum и nativeNull
module.exports = {sum, nativeNull}
