import { filesReducer } from '../../src/reducers/filesReducer';
import { types } from '../../src/types/types';


describe('Pruebas en el filesReducer', () => {
  test('obtener el listado de archivos', () => {
    const initState = {
      isError: false,
      isLoading: false,
      filesCollection: []
    };

    const action = {
      type: types.fileGetAll,
      payload: {
        files : []
      }
    };
    const state = filesReducer(initState, action);
    expect(state).toEqual(initState);
  });

  test('limpiar archivos', () => {
    const initState = {
      isError: true,
      isLoading: false,
      filesCollection: []
    };

    const action = {
      type: types.cleanFile
    };
    const state = filesReducer(initState, action);
    expect(state).toEqual(initState);
  });


  test('loading al consultar y buscar archivo', () => {
    const initState = {
      isError: true,
      isLoading: true,
      filesCollection: []
    };

    const action = {
      type: types.loading,
      payload: {
        isLoading: true
      }
    };
    const state = filesReducer(initState, action);
    expect(state).toEqual(initState);
  });

})