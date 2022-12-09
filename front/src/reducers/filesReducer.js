import { types } from '../types/types';

const initialState = {
  isError: false,
  isLoading: false,
  filesCollection: []
};

export const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.fileGetAll:
      return {
        ...state,
        filesCollection: action.payload.files,
        isError: false,
      };

    case types.fileGetByName:
      return {
        ...state,
        filesCollection: action.payload.files,
        isError: false,
      };
    
    case types.cleanFile:
        return {
          ...state,
          isError: true,
        }

    case types.loading:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }

    default:
      return state;
  }
};
