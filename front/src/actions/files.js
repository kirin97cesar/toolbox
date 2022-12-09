import axios from 'axios';
import { types } from '../types/types';

export const getAllFilesDetail = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const {data} = await axios.get('http://localhost:4000/api/files');
      dispatch(getAllFiles(data))
    } catch (error) {
      dispatch(cleanFilesError())
    } finally {
      dispatch(setLoading(false))
    }
  };
};

export const getAllFilesByName = (fileName = '') => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const {data} = await axios.get(`http://localhost:4000/api/files/data?fileName=${fileName}`);
      console.log('fileName', data)
      dispatch(getFilesByName(data))
    } catch (error) {
      dispatch(cleanFilesError())
    } finally {
      dispatch(setLoading(false))
    }
  };
};


export const getAllFiles = (files) => ({
  type: types.fileGetAll,
  payload: {
    files
  }
})


export const setLoading = (status) => ({
  type: types.loading,
  payload: {
    isLoading: status
  }
})


export const getFilesByName = (files) => ({
  type: types.fileGetByName,
  payload: {
    files
  }
})


export const cleanFilesError = () => ({
  type: types.cleanFile
})
