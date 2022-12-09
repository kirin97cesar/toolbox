import { types } from "../../src/types/types";

describe('Pruebas con nuestros types', () => {
  test('deben de existir estos types', () => {
    expect(types).toEqual({
        fileGetAll: '[Files] Get All Files',
        fileGetByName: '[Files] Get File By Name',
        cleanFile: '[Files] Clean All Files',
        loading: '[Files] Set Loading'
    });
  });
});
