// Создаём функцию map, принимающую array и callback
function map(array, callback) {
    // Создаём пустой массив result
    const result = []
    // Создаём цикл for
	for (let i = 0; i < array.length; i++) {
        // С помощью метода push складываем новый элемент, который будет пропущен через callback, и этот элемент находится в array[i]
        result.push(callback(array[i]));
    }
    return result
}

// Экспортируем объект, у которого присутствует метод map
module.exports = {map}
