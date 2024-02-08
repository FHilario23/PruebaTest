const { sumArray, averageArray } = require('./arrayUtils');

describe('Funciones de operaciones sobre arreglos', () => {
  describe('Función sumArray', () => {
    test('debe sumar correctamente los elementos de un arreglo', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
    });

    test('debe devolver 0 para un arreglo vacío', () => {
      expect(sumArray([])).toBe(0);
    });
  });

  describe('Función averageArray', () => {
    test('debe calcular correctamente el promedio de los elementos de un arreglo', () => {
      expect(averageArray([1, 2, 3, 4])).toBe(2.5);
    });

    test('debe devolver NaN para un arreglo vacío', () => {
      expect(averageArray([])).toBeNaN();
    });
  });
});
