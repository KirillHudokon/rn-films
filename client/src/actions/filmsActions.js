import * as types from '../types'
import {FilmsApi, FilmsActionsApi} from '../api'
const filmsApi = new FilmsApi()
const filmsActionsApi = new FilmsActionsApi()

export const getFilmsLoading = () => ({
    type: types.GET_FILMS_LOADING,
})
export const getFilmsSuccess=(films)=>({
    type: types.GET_FILMS_SUCCESS,
    payload: films,
})
export const getFilmsFail=(error)=>({
    type: types.GET_FILMS_FAIL,
    payload: error,
})

export const deleteFilmLoading = () => ({
    type: types.DELETE_FILM_LOADING,
})
export const deleteFilmSuccess=(data)=>({
    type: types.DELETE_FILM_SUCCESS,
    payload: data
})
export const deleteFilmFail=(error)=>({
    type: types.DELETE_FILM_FAIL,
    payload: error,
})

export const addFilmLoading = () => ({
    type: types.ADD_FILM_LOADING,
})
export const addFilmSuccess=(data)=>({
    type: types.ADD_FILM_SUCCESS,
    payload: data
})
export const addFilmFail=(error)=>({
    type: types.ADD_FILM_FAIL,
    payload: error,
})

export const sortFilmsLoading = () => ({
    type: types.SORT_FILMS_LOADING,
})
export const sortFilmsSuccess=(films)=>({
    type: types.SORT_FILMS_SUCCESS,
    payload: films
})
export const sortFilmsFail=(error)=>({
    type: types.SORT_FILMS_FAIL,
    payload: error,
})

export const searchFilmsLoading = () => ({
    type: types.SEARCH_FILMS_LOADING,
})
export const searchFilmsSuccess=(films)=>({
    type: types.SEARCH_FILMS_SUCCESS,
    payload: films
})
export const searchFilmsFail=(error)=>({
    type: types.SEARCH_FILMS_FAIL,
    payload: error,
})

export const importFileLoading = () => ({
    type: types.IMPORT_FILE_LOADING,
})
export const importFileSuccess=(films)=>({
    type: types.IMPORT_FILE_SUCCESS,
    payload: films
})
export const importFileFail=(error)=>({
    type: types.IMPORT_FILE_FAIL,
    payload: error,
})

export const resetError = () => ({
    type: types.RESET_ERROR
})
export const dispatchResetError = () => dispatch => dispatch(resetError())

export const getFilms = () => async dispatch => {
    try{
        dispatch(getFilmsLoading())
        const {data} = await filmsApi.get()
        dispatch(getFilmsSuccess(data))
    }catch(e){
        dispatch(getFilmsFail(e.message))
    }
}

export const deleteFilm = (film) => async dispatch =>{
    try{
        dispatch(deleteFilmLoading())
        const {data} = await filmsApi.delete(film._id)
        dispatch(deleteFilmSuccess(data))
    }catch(e){
        dispatch(deleteFilmFail(e.message))
    }
}
export const addFilm = (film) => async dispatch => {
    try{
        dispatch(addFilmLoading())
        const {data} = await filmsApi.post(film)
        dispatch(addFilmSuccess(data))
    }catch(e){
        dispatch(addFilmFail(e.message))
    }
}

export const sortFilms= () => async dispatch => {
    try{
        dispatch(sortFilmsLoading())
        const {data} = await filmsActionsApi.sort('a-z')
        dispatch(sortFilmsSuccess(data))
    }catch(e){
        console.log(e)
        dispatch(sortFilmsFail(e.message))
    }
}

export const searchFilms = (how, text) => async dispatch => {
    try{
        dispatch(searchFilmsLoading())
        const {data} = await filmsActionsApi.searchBy(how, text)
        dispatch(searchFilmsSuccess(data))
    }catch(e){
        console.log(e)
        dispatch(searchFilmsFail(e.message))
    }
}
export const importFile = (file) => async dispatch => {
    try{
        dispatch(importFileLoading())
        const {data} = await filmsActionsApi.import(file)
        dispatch(importFileSuccess(data))
    }catch(e){
        dispatch(importFileFail(e.message))
    }
}